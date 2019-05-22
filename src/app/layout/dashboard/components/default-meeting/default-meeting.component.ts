import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { MeetingService } from '../../../../services/meeting-service';
import { Router } from '@angular/router';
import { AlertService } from '../../../../services/alert.service';
import { CustomModalComponent, CustomModalModel } from '../custom-modal/custom-modal.component';
import { SpinnerComponent } from 'app/shared/modules/common-components/spinner/spinner.component';
import { ErrorMessageConstants, TypeOfError , SuccessMessage , StaticLabels} from '../../../../shared/errorMessageConstants';
import { Utils } from '../../../../shared/utilis';
@Component({
    selector: 'app-default-meeting',
    templateUrl: './default-meeting.component.html',
    styleUrls: ['./default-meeting.component.scss'],
    providers: [AlertService]
})
export class DefaultMeetingComponent implements OnInit, AfterViewInit {

    _meetingService: MeetingService;
    _userService: UserService;
    @Output() CurrentRoute = new EventEmitter();
    currentDate = new Date();
    loggedInUser: any;
    futureMeetingList = [];
    filteredFutureMeetingList = [];
    recentMeeting: any;
    selectDateFlag: boolean;
    selectedDate: Date;
    selectedfromDate: any;
    selectedtoDate: any;
    showScheduleMeetingFl: boolean;
    searchText: String;
    accessCode: any;
    meetNowMeeting: any;
    selectedCriteria: any;
    selectedMeeting: any;
    outLookBody: any;
    outLookSubject: any;
    toAttendees: any;
    Product: any;
    selectedAttendee: UserService;
    ccAttendees: any;
    rememberEmailList = [];
    selectedEmails: any;
    selectedCcEmails: any;
    isAdministrator = false;
    activeAll = true;
    activeToday = false;
    activeTomorrow = false;
    baseurl: any;
    @ViewChild('defaultMeetingSpinner') defaultMeetingSpinnerMod: SpinnerComponent;
    @ViewChild('chatPanel') chatPanel: ElementRef;
    @ViewChild('chatBody') chatBody: ElementRef;
    @ViewChild('MeetNowModal') public meetNowModal: CustomModalComponent;
    meetNowModel: CustomModalModel = {
        titleIcon: '<i class="fa fa - calendar - check - o"></i>',
        title: 'Invite Attendees',
        smallHeading: 'Copy and paste to your calendar or share with your attendees',
        body: '',
        Button1Content: '<i class="fa fa - envelope"></i> Outlook',
        Button2Content: '<i class="fa fa - copy"></i> Copy'
    };
    @ViewChild('confirmCancelMeetingModal') public confirmCancelMeetingModal: CustomModalComponent;
    cancelMeetConfirm: CustomModalModel = {
        titleIcon: '<i class="fa fa - ban"></i>',
        title: 'Cancel Meeting',
        smallHeading: 'You can cancel selected meeting',
        body: '',
        Button1Content: '<i class="fa fa - ban"></i>&nbsp;Cancel Meeting',
        Button2Content: ''
    };

    @ViewChild('startMeetNowModal') public startMeetNowModal: CustomModalComponent;
    startMeetNow: CustomModalModel = {
        titleIcon: '<i class="fa fa - trash"></i>',
        title: 'Meet Now',
        smallHeading: 'You can start meeting',
        body: '',
        Button1Content: '<i class="fa fa - trash"></i>&nbsp;Meet Now',
        Button2Content: ''
    };
    @ViewChild('meetNowOutlookModal') public meetNowOutlookModal: CustomModalComponent;
    meetNowOutlookWindow: CustomModalModel = {
        titleIcon: '<i class="fa fa-calendar-check-o"></i>',
        title: 'Send Email',
        smallHeading: 'Add attendees to your meeting here',
        body: '',
        Button1Content: '<i class="fa fa-envelope"></i>Send',
        Button2Content: '<i class="fa fa-copy"></i> Cancel'
    };
    constructor(userService: UserService, meetingService: MeetingService,
        private router: Router, public alertService: AlertService) {
        this._userService = userService;
        this._meetingService = meetingService;
    }
    ngOnInit() {
        this.baseurl = Utils.getAbsoluteDomainUrl();
        this.setDefaultValue();
        this.loggedInUserApiCall();
    }

    private setDefaultValue() {
        this.selectDateFlag = true;
        this.meetNowMeeting = {};
        this.selectedCriteria = 'All';
        this.showScheduleMeetingFl = false;
    }

    private loggedInUserApiCall() {
        this._userService.getLoggedInUserObj().subscribe(data => {
            if (data.errorFl || data.warningFl) {
                this.loggedInUser = {};
                return this.alertService.warning(data.message, TypeOfError.Warning);
            }  else {
                this.loggedInUserSuccessAction(data);
            }
        });
    }

    private loggedInUserSuccessAction(data: any) {
        this.loggedInUser = data;
        this.isAdministrator = this.loggedInUser.roles.find(x => x.role === 'ADMINISTRATOR') !== undefined;
        this._meetingService.setFutureMeetimgList();
        this.futureMeetingList = [];
        this.getUpcomingMeetings();
    }

    private getUpcomingMeetings() {
        this._meetingService.getFutureMeetingListByUser().subscribe(futureData => {
            if (futureData !== undefined && futureData.length > 0 && futureData[0].warningFl !== true) {
                this.futureMeetingSuccessAction(futureData);
            } else {
                this.futureMeetingFailResponseAction(futureData);
            }
        });
    }

    private futureMeetingFailResponseAction(futureData: any[]) {
        this.futureMeetingList = [];
        this.filteredFutureMeetingList = [];
        if (futureData[0] !== undefined && futureData[0].message !== undefined) {
            this.defaultMeetingSpinnerMod.hideSpinner();
        }
    }

    private futureMeetingSuccessAction(futureData: any[]) {
        this.futureMeetingList = futureData;
        this.filteredFutureMeetingList = futureData;
        this.defaultMeetingSpinnerMod.hideSpinner();
    }

    ngAfterViewInit(): void {
        this.chatBody.nativeElement.style.height = (this.chatPanel.nativeElement.offsetHeight
            - (this.chatBody.nativeElement.offsetTop + 30)) + 'px';
    }
    switchRoute() {
        this.CurrentRoute.emit(1);
    }
    selectMeetingFilterDate() {
        this.selectDateFlag = !this.selectDateFlag;
    }
    filterMeetingByDate(mode) {
        this.filteredFutureMeetingList = [];
        switch (mode) {
            case 'today':
                this.getTodaysMeetings();
                break;
            case 'tomorrow':
            this.getTomorrowsMeetings();
                break;
            case 'range':
               this.getMeetingsByDate();
                break;
            default:
               this.setDefaultMeetings();
                break;
        }
    }
    private getMeetingsByDate() {
        if (this.selectedfromDate === null || this.selectedfromDate === undefined || this.selectedfromDate === '' ) {
            this.dateValidation(ErrorMessageConstants.SelectFromDate);
        } else if (this.selectedtoDate === null || this.selectedtoDate === '' || this.selectedtoDate === undefined) {
            return this.dateValidation(ErrorMessageConstants.SelectToDate);
        } else {
            this.getMeetingBySelectedPeriod();
        }
    }
    private dateValidation(message) {
        this.alertService.warning(message, TypeOfError.Warning);
        this.filteredFutureMeetingList = this.futureMeetingList;
        return false;
    }

    private setDefaultMeetings() {
        this.activeToday = false;
        this.activeAll = true ;
        this.activeTomorrow = false;
        this.selectedCriteria = 'All';
        this.selectedfromDate = '';
        this.selectedtoDate = '';
        this.filteredFutureMeetingList = this.futureMeetingList;
    }
    private getMeetingBySelectedPeriod() {
        this.selectedCriteria = 'Range';
        const fromDate = new Date(this.selectedfromDate.year, this.selectedfromDate.month - 1, this.selectedfromDate.day);
        const toDate = new Date(this.selectedtoDate.year, this.selectedtoDate.month - 1, this.selectedtoDate.day);
        this.iterateMeetingsbyDatePeriod(toDate, fromDate);
    }

    private iterateMeetingsbyDatePeriod(toDate: Date, fromDate: Date) {
        this.futureMeetingList.forEach(meeting => {
            const meetingDate = new Date(meeting.meetingDate);
            if (meetingDate <= toDate && meetingDate >= fromDate && meeting.status.status === 'ACTIVE') {
                this.filteredFutureMeetingList.push(meeting);
            }
        });
    }

    private getTomorrowsMeetings() {
        this.activeToday = false;
        this.activeAll = false;
        this.activeTomorrow = true;
        this.selectedCriteria = 'Tomorrow';
        this.filterTomorrowMeetings();
    }

    private filterTomorrowMeetings() {
        this.futureMeetingList.forEach(meeting => {
            const meetingDate = new Date(meeting.meetingStartDateTime);
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            if (meetingDate.getDate() === tomorrow.getDate()
                && meetingDate.getMonth() === tomorrow.getMonth()
                && meetingDate.getFullYear() === tomorrow.getFullYear()) {
                this.filteredFutureMeetingList.push(meeting);
            }
        });
    }

    private getTodaysMeetings() {
        this.activeToday = true;
        this.activeAll = false;
        this.activeTomorrow = false;
        this.selectedCriteria = 'Today';
        this.iterateMeetingsByToday();
    }

    private iterateMeetingsByToday() {
        this.futureMeetingList.forEach(meeting => {
            const meetingDate = new Date(meeting.meetingStartDateTime);
            if (meetingDate.getDate() === this.currentDate.getDate()
                && meetingDate.getMonth() === this.currentDate.getMonth()
                && meetingDate.getFullYear() === this.currentDate.getFullYear()) {
                this.filteredFutureMeetingList.push(meeting);
            }
        });
    }

    startMeeting(meeting, isfromPopup) {
        if (isfromPopup) {
            this.meetNowModal.close();
        }
        this.router.navigate(['/meeting'], { queryParams: { meetingCode: meeting.meetingCode } });
    }
    cancelMeeting(meeting) {
        this.selectedMeeting = meeting;
        this.confirmCancelMeetingModal.open();
    }
    cancelMeetingNow() {
        const payload = {  meetingCode: this.selectedMeeting.meetingCode };
        this._meetingService.cancelMeeting(payload).subscribe(data => {
            if (data.errorFl === true || data.warningFl === true) {
                this.recentMeeting = {};
                return this.alertService.warning(data.message, TypeOfError.Warning);
            } else {
                return this.setCancelMeetingSuccessAction();
            }
        });
    }
    private setCancelMeetingSuccessAction() {
        this.closePopup('cancel');
        if (this.filteredFutureMeetingList.indexOf(this.selectedMeeting) !== -1) {
            this.filteredFutureMeetingList.splice(this.filteredFutureMeetingList.indexOf(this.selectedMeeting), 1);
        }
        if (this.futureMeetingList.indexOf(this.selectedMeeting) !== -1) {
            this.futureMeetingList.splice(this.futureMeetingList.indexOf(this.selectedMeeting), 1);
        }
        return this.alertService.success(SuccessMessage.CancelledMeeting, SuccessMessage.SuccessHeader);
    }

    copyToOutLook(event) {
        this._meetingService.getRemeberEmails().subscribe(data => {
            if (data.errorFl === true || data.warningFl === true) {
                this.rememberEmailList = [];
                return this.alertService.warning(data.message, TypeOfError.Warning);
            } else {
                this.setRememberEmailList(data);
            }
        });
    }
    private setRememberEmailList(data: any) {
        this.rememberEmailList = data;
        this.meetNowOutlookModal.open();
        const newLine = '\r\n\r\n';
        this.outLookBody = this.getMeetingDetails(newLine);
        this.outLookSubject = 'Meet now: ' + new Date().toDateString();
        this.closePopup('meetNow');
    }

    // copy meeting content
    copyToClipboard() {
        const newLine = '\r\n\r\n';
        const meetingDetails = 'Meet now: ' + new Date().toDateString() + newLine + this.getMeetingDetails(newLine);
        const el = document.createElement('textarea');
        el.value = meetingDetails;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        return this.alertService.success(SuccessMessage.copyMeetingDetails, SuccessMessage.SuccessHeader);
    }
    joinMeetingNow() {
        const payload = this.setMeetNowPayload();

        this.setMeetNowApiCall(payload);
    }
    private setMeetNowApiCall(payload: { 'meetingDate': Date; 'meetingStartDateTime': Date; 'subject': string; 'duration': string;
     'recurringType': number; 'timeZone': string; 'timeType': string; 'meetingId': any; 'createdBy': any; }) {
        this._meetingService.scheduleMeeting(payload).subscribe(data => {
            if (data.errorFl === true || data.warningFl === true) {
                this.meetNowMeeting = {};
                return this.alertService.warning(data.message, TypeOfError.Warning);
            } else {
                return this.meetNowSuccessAction(data);
            }
        });
    }

    private meetNowSuccessAction(data: any) {
        this.meetNowMeeting = data;
        this.meetNowModal.open();
        //  this.futureMeetingList.push(this.meetNowMeeting);
        this.futureMeetingList.splice(0, 0, this.meetNowMeeting);
        return this.alertService.success(SuccessMessage.ScheduleMeeting, SuccessMessage.SuccessHeader);
    }

    private setMeetNowPayload() {
        this.accessCode = Math.floor(100000000 + Math.random() * 900000000);
        const now = new Date().toString();
        const timeZone = now.replace(/.*[(](.*)[)].*/, '$1');
        const timeZoneOffset = new Date().getTimezoneOffset().toLocaleString();
        const payload = {
            'meetingDate': new Date(),
            'meetingStartDateTime': new Date(),
            'subject': 'Meet now: ' + new Date().toDateString(),
            'duration': '45 Min',
            'recurringType': 2,
            'timeZone': timeZone,
            'timeType': timeZoneOffset,
            'meetingId': this.accessCode,
            'createdBy': this.loggedInUser
        };
        return payload;
    }

    getTimeZone() {
        const offset = new Date().getTimezoneOffset(), o = Math.abs(offset);
        return (offset < 0 ? '+' : '-') + ('00' + Math.floor(o / 60)).slice(-2) + ':' + ('00' + (o % 60)).slice(-2);
    }
    sendEmail(e) {
        if (this.selectedEmails === null || typeof this.selectedEmails === StaticLabels.Undefined || this.selectedEmails.trim() === '') {
            return this.alertService.warning(ErrorMessageConstants.AttendeeEmail, TypeOfError.Warning);
        } else {
            const payload = this.setSendEmailPaylod();
            this.sendMeetingInvitationApiCall(payload);
        }
    }
    private sendMeetingInvitationApiCall(payload: { toAttendees: any; ccAttendees: any; meetingDetailsBody: string; meeting: any; }) {
        this._meetingService.sendMeetingInvitationMail(payload).subscribe(data => {
            if (data.errorFl === true || data.warningFl === true) {
                return this.alertService.warning(data.message, TypeOfError.Warning);
            } else {
                return this.setMeetingInvitationSuccessAction();
            }
        });
    }

    private setMeetingInvitationSuccessAction() {
        this.meetNowOutlookModal.close();
        this.clearOutlookField();
        this.router.navigate(['/meeting'], { queryParams: { meetingCode: this.meetNowMeeting.meetingCode } });
        return this.alertService.success(SuccessMessage.MeetingInvitation, SuccessMessage.SuccessHeader);
    }

    private setSendEmailPaylod() {
        const newLineJson = '<br><br>';
        const outLookBodyJson = this.getMeetingDetails(newLineJson);
        if (this.ccAttendees !== '') {
            this.selectedCcEmails = this.ccAttendees;
        }
        const payload = {
            toAttendees: this.selectedEmails, ccAttendees: this.selectedCcEmails,
            meetingDetailsBody: outLookBodyJson, meeting: this.meetNowMeeting
        };
        return payload;
    }

    clearOutlookField() {
        this.outLookBody = '';
        this.selectedEmails = '';
        this.selectedCcEmails = '';
    }
    closeOutLookMailPopup() {
        this.meetNowOutlookModal.close();
        this.clearOutlookField();
    }
    // get meeting details
    getMeetingDetails(newLine): string {
        let meetingUrl = '';
        meetingUrl = this.baseurl + '#/meeting?meetingCode=';
        const guestMeetingUrl =  this.baseurl + '#/login/GuestUserWithMeeting?meetingCode=';
        const meetingDetails = 'Dear Attendees,' + newLine + 'Date :  ' + new Date().toString().slice(0, 24) + newLine +
            ' Please join my meeting from your computer using chrome browser ' + newLine + ' for  '
            + this.meetNowMeeting.duration + newLine + 'Registered user use below URL for meeting :' + newLine
            + meetingUrl + this.meetNowMeeting.meetingCode + newLine + 'Guest user use below URL for meeting:' + newLine + guestMeetingUrl +
            this.meetNowMeeting.meetingCode + newLine + 'Meeting Id :  ' + this.meetNowMeeting.meetingCode;
        return meetingDetails;
    }
    closePopup(popType) {
        switch (popType) {
            case 'meetNow':
                this.meetNowModal.close();
                break;
            case 'cancel':
                this.confirmCancelMeetingModal.close();
                break;
        }
    }

    onEmailSelect() {
        if (this.toAttendees.trim() !== '') {
            this.selectedEmails += ',' + this.toAttendees.trim();
        }
        if (this.selectedEmails.find === undefined) {
            this.selectedEmails = this.selectedEmails.replace(StaticLabels.Undefined, '');
            this.selectedEmails = this.selectedEmails.replace(/^,/, '');
        }
        this.toAttendees = '';
    }
    selectedCcEmail() {
        if (this.ccAttendees.trim() !== '') {
            this.selectedCcEmails += ',' + this.ccAttendees.trim();
        }
        if (typeof this.selectedCcEmails.find === StaticLabels.Undefined) {
            this.selectedCcEmails = this.selectedCcEmails.replace(StaticLabels.Undefined, '');
            this.selectedCcEmails = this.selectedCcEmails.replace(/^,/, '');
        }
        this.ccAttendees = '';
    }
    editToAttendees() {
        if (this.selectedEmails === '' || this.selectedEmails === null || this.selectedEmails === undefined) {
        } else {
            this.toAttendees = this.selectedEmails;
            this.selectedEmails = '';
        }
    }
    editCcAttendees() {
        if (this.selectedCcEmails === '' || this.selectedCcEmails === null || this.selectedCcEmails === undefined) {
        } else {
            this.ccAttendees = this.selectedCcEmails;
            this.selectedCcEmails = '';
        }
    }
}

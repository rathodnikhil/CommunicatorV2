import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { MeetingService } from '../../../../services/meeting-service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AlertService } from '../../../../services/alert.service';
import { CustomModalComponent, CustomModalModel } from '../custom-modal/custom-modal.component';
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
        title: 'Cancel',
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
    constructor(userService: UserService, meetingService: MeetingService,
        private router: Router, private toastr: ToastrService, public alertService: AlertService) {
        this._userService = userService;
        this._meetingService = meetingService;
    }
    ngOnInit() {
        this.selectDateFlag = true;
        this.meetNowMeeting = {};
        this.selectedCriteria = 'All';
        this.showScheduleMeetingFl = false;
        // loggedInUser web service call
        this._userService.getLoggedInUserObj().subscribe(data => {
            if (data.errorFl || data.warningFl) {
                this.loggedInUser = {};
                return this.alertService.warning(data.message, 'Warning');
            } else {
                this.loggedInUser = data;
                let userRoleArray = [];
                userRoleArray = this.loggedInUser.roles;
                let roleArray = [];
                for (let i = 0; i < userRoleArray.length; i++) {
                    roleArray.push(userRoleArray[i].role);
                }
                if (roleArray.indexOf('ADMINISTRATOR') === -1) {
                    this.showScheduleMeetingFl = true;
                } else {
                    this.showScheduleMeetingFl = false;
                }
                const payload = { userCode: this.loggedInUser.userCode };
                this._meetingService.setFutureMeetimgList(payload);
                this.futureMeetingList = [];
                this._meetingService.getFutureMeetingListByUser().subscribe(data => {
                    if (data !== undefined && data.length > 0 && (data[0].errorFl || data[0].warningFl)) {
                        this.futureMeetingList = [];
                        return this.alertService.warning(data[0].message, 'Warning');
                    } else {
                        this.futureMeetingList = data;
                        this.filteredFutureMeetingList = data;
                    }
                });
            }
        });
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
                this.selectedCriteria = 'Today';
                this.futureMeetingList.forEach(meeting => {
                    const meetingDate = new Date(meeting.meetingStartDateTime);
                    if (meetingDate.getDate() === this.currentDate.getDate()
                        && meetingDate.getMonth() === this.currentDate.getMonth()
                        && meetingDate.getFullYear() === this.currentDate.getFullYear() ) {
                        this.filteredFutureMeetingList.push(meeting);
                    }
                });
                break;
            case 'tomorrow':
                this.selectedCriteria = 'Tomorrow';
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
                break;
            case 'range':
                this.selectedCriteria = 'Range';
                this.futureMeetingList.forEach(meeting => {
                    const meetingDate = new Date(meeting.meetingStartDateTime);

                    if ((meetingDate.getDate() >= this.selectedfromDate.day
                        && meetingDate.getMonth() + 1 >= this.selectedfromDate.month
                        && meetingDate.getFullYear() >= this.selectedfromDate.year)
                        && (meetingDate.getDate() <= this.selectedtoDate.day
                            && meetingDate.getMonth() + 1 <= this.selectedtoDate.month
                            && meetingDate.getFullYear() <= this.selectedtoDate.year)) {
                        this.filteredFutureMeetingList.push(meeting);
                    }
                });
                break;
            default:
                this.selectedCriteria = 'All';
                this.filteredFutureMeetingList = this.futureMeetingList;
                break;
        }

    }
    startMeeting(meeting, isfromPopup) {
        if (isfromPopup) {
            this.meetNowModal.close();
            if (meeting.callType === 'Video') {
                this.router.navigate(['/meeting'], { queryParams: { meetingCode: meeting.meetingCode } });
            } else {
                this.router.navigate(['/meeting/audio'], { queryParams: { meetingCode: meeting.meetingCode } });
            }
        } else {
            if (meeting.meetingStartDateTime <= Date.now()) {
                if (meeting.callType === 'Video') {
                    this.router.navigate(['/meeting'], { queryParams: { meetingCode: meeting.meetingCode } });
                } else {
                    this.router.navigate(['/meeting/audio'], { queryParams: { meetingCode: meeting.meetingCode } });
                }
            } else {
                if ((new Date(meeting.meetingStartDateTime).getDate() - new Date().getDate()) > 0) {
                    return this.alertService.warning('Meeting is set in future.', 'Warning');
                } else if (((meeting.meetingStartDateTime - new Date().getTime()) / (3600000)) > 0) {
                    const hours = Math.round((meeting.meetingStartDateTime - new Date().getTime()) / (3600000));
                    const min = Math.round((meeting.meetingStartDateTime - new Date().getTime()) / (60000));
                    return this.alertService
                        .warning('Wait to reach meeting start time. Meeting will start in ' + hours + ':' + min + ' hours.', 'Warning');
                }
            }
        }
    }
    deleteMeetingNow(meeting) {
        const payload = { userCode: this.loggedInUser.userCode, meetingCode: meeting.meetingCode };
        this._meetingService.endMeeting(payload).subscribe(data => {
            if (data.errorFl === true || data.warningFl === true) {
                this.recentMeeting = {};
                return this.alertService.warning(data.message, 'Warning');
            } else {
                this.filteredFutureMeetingList.splice(this.filteredFutureMeetingList.indexOf(this.selectedMeeting), 1);
                this.closePopup('delete');
            }
        });
    }
 
    cancelMeeting(meeting) {
        this.selectedMeeting = meeting;
        this.confirmCancelMeetingModal.open();
    }
    cancelMeetingNow() {
        const payload = { userCode: this.loggedInUser.userCode, meetingCode: this.selectedMeeting.meetingCode };
        this._meetingService.cancelMeeting(payload).subscribe(data => {
            if (data.errorFl === true || data.warningFl === true) {
                this.recentMeeting = {};
                return this.alertService.warning(data.message, 'Warning');
            } else {
                this.closePopup('cancel');
                this.filteredFutureMeetingList.splice(this.filteredFutureMeetingList.indexOf(this.selectedMeeting), 1);
                return this.alertService.success('Meeting has cancelled', 'Cancel Meeting');
            }
        });
    }
    copyToOutLook(event) {
        debugger;
        const meetingDetails = encodeURIComponent(this.getMeetingDetails());
        const a = document.createElement('a');
        a.href = 'mailto:?subject=' + 'Meet now: ' + new Date().toDateString() + '&body=' + meetingDetails;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    // copy meeting content
    copyToClipboard() {
        const meetingDetails ='Meet now: ' + new Date().toDateString()+ '  '+ this.getMeetingDetails();
        const tempInput = $('<input>').val(meetingDetails).appendTo('body').select();
        document.execCommand('copy');
        return this.alertService.success('Meeting Details has been Copied.Kindly share via your preferred Mail Id.', 'Copy Meeting Details');
    }
    joinMeetingNow() {
        this.accessCode = new Date().getTime() + '_' + Math.floor(Math.random() * 900) + 100;
        const now = new Date().toString();
        const timeZone = now.replace(/.*[(](.*)[)].*/, '$1');
        const payload = {
            'meetingDate': new Date(),
            'meetingStartDateTime': new Date(),
            'subject': 'Meet now: ' + new Date().toDateString(),
            'duration': '45 Min',
            'recurringType': 2,
            'callType': 'Audio',
            'timeZone': timeZone,
            // 'timeType': this.meeting.meridianTime.hour > 12 ? 'PM' : 'AM',
            'meetingId': this.accessCode,
            'createdBy': this.loggedInUser
        };

        this._meetingService.scheduleMeeting(payload).subscribe(data => {
            if (data.errorFl === true || data.warningFl === true) {
                this.meetNowMeeting = {};
                return this.alertService.warning(data.message, 'Warning');
            } else {
                this.meetNowMeeting = data;
                this.meetNowModal.open();
                return this.alertService.success('Meeting has scheduled successfully', 'Schedule Meeting');
            }
        });
    }
    getTimeZone() {
        const offset = new Date().getTimezoneOffset(), o = Math.abs(offset);
        return (offset < 0 ? '+' : '-') + ('00' + Math.floor(o / 60)).slice(-2) + ':' + ('00' + (o % 60)).slice(-2);
    }


    // get meeting details
    getMeetingDetails(): string {
        let meetingUrl = '';
        meetingUrl = 'https://cfscommunicator.com/#/meeting/audio?meetingCode=';

        const meetingDetails = 'Dear Attendees,\r\n\r\n' + 'Date :  ' + this.GetFormattedDate() + '\r\n\r\n' +
            '\r\n\r\n Please join my meeting from your computer , tablet or smartphone \r\n\r\n'
            + meetingUrl + this.meetNowMeeting.meetingCode +
            '\r\n\r\n' + '\r\n\r\n Access Code :  ' + this.meetNowMeeting.meetingCode;
        return meetingDetails;
    }
    GetFormattedDate(): String {
        const todayTime = new Date();
        const month = todayTime.getMonth() + 1;
        const day = todayTime.getDate();
        const year = todayTime.getFullYear();
        return year + '/' + month + '/' + day;
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
}

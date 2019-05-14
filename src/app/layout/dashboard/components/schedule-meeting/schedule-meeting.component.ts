import { Component, OnInit, EventEmitter, Output, ViewChild, ViewContainerRef, ElementRef } from '@angular/core';
import { CustomModalComponent, CustomModalModel } from '../custom-modal/custom-modal.component';
import { MeetingService } from '../../../../services/meeting-service';
import { UserService } from '../../../../services/user.service';
import { Router } from '@angular/router';
import { AlertService } from '../../../../services/alert.service';
import { DatePipe } from '@angular/common';
import { Utils } from '../../../../shared/utilis';
@Component({
    selector: 'app-schedule-meeting',
    templateUrl: './schedule-meeting.component.html',
    styleUrls: ['./schedule-meeting.component.scss'],
    providers: [AlertService , DatePipe]
})
export class ScheduleMeetingComponent implements OnInit {
    _meetingService: MeetingService;
    _userService: UserService;
    currentDate: any;
    meeting: any;
    subject: any;
    meridian = true;
    today: any;
    accessCode: any;
    loggedInUser: any;
    futureMeetingList: any[];
    filteredFutureMeetingList: any[];
    outLookBody: any;
    outLookSubject: any;
    toAttendees: any;
    ccAttendees: any;
    meetingObj: any;
    outLookBodyJson: any;
    rememberEmailList = [];
    selectedEmails: any;
    selectedCcEmails: any;
    timezoneSelect: any;
    selectedTime: any;
    baseUrl: any;
    @Output() CurrentRoute = new EventEmitter();
    @ViewChild('closeBtn') closeBtn: ElementRef;
    @ViewChild('scheduleMeetingModal') public scheduleMeetingModal: CustomModalComponent;
    scheduleMeetings: CustomModalModel = {
        titleIcon: '<i class="fa fa-calendar-check-o"></i>',
        title: 'Invite Attendees',
        smallHeading: 'Copy and paste to your calendar or share with your attendees',
        body: '',
        Button1Content: '<i class="fa fa-envelope"></i> Outlook',
        Button2Content: '<i class="fa fa-copy"></i> Copy'
    };
    @ViewChild('outlookModal') public outlookModal: CustomModalComponent;
    scheduleOutlookWindow: CustomModalModel = {
        titleIcon: '<i class="fa fa-calendar-check-o"></i>',
        title: 'Send Email',
        smallHeading: 'Add attendees to your meeting here',
        body: '',
        Button1Content: '<i class="fa fa-envelope"></i>Send',
        Button2Content: '<i class="fa fa-copy"></i> Csncel'
    };
    durationArray =  Utils.getDurationArray();
    timeZoneArray =  Utils.getTimezoneArray();

    constructor(private viewContainerRef: ViewContainerRef, meetingService: MeetingService, userService: UserService,
        private router: Router, public alertService: AlertService , private datePipe: DatePipe) {
        this._meetingService = meetingService;
        this._userService = userService;
    }

    ngOnInit() {
        this.baseUrl = Utils.getAbsoluteDomainUrl();
        this._userService.getLoggedInUserObj().subscribe(data => {
            this.loggedInUser = data;
        });
        this.setDefaultValueForScheduleMeetingFields();
        // current date and time
        this.currentDate = Date.now();
    }
    private setDefaultValueForScheduleMeetingFields() {
        this.today = new Date();
        this.meeting = {
            meridianTime: { hour: this.today.getHours(), minute: this.today.getMinutes() },
            meridian: true,
            datePicker: {
                day: this.today.getDate(),
                month: this.today.getMonth() + 1,
                year: this.today.getFullYear()
            },
            isRecurring: 1,
            callType: 1,
            selectedTimeZone: new Date().toString().match(/([A-Z]+[\+-][0-9]+.*)/)[1].split('(')[1].split(')')[0] ? 'Select Timezone' : '',
            selectedDuration: 'Select Duration',
            subject: this.subject
        };
    }

    switchRoute(value) {
        this.CurrentRoute.emit(value);
    }
    scheduleMeeting() {
        const date = new Date(this.meeting.datePicker.year, this.meeting.datePicker.month - 1,
            this.meeting.datePicker.day, this.meeting.meridianTime.hour, this.meeting.meridianTime.minute);
        const today = new Date();
        if (this.subject === null || typeof this.subject === 'undefined' || this.subject.trim() === '') {
            return this.alertService.warning('Please enter meeting subject', 'Warning');
        } else if (this.meeting.selectedDuration === 'Select Duration') {
            return this.alertService.warning('Please select meeting duration', 'Warning');
        } else if (this.timezoneSelect === undefined || this.timezoneSelect === '') {
            return this.alertService.warning('Please select timezone', 'Warning');
        } else if (date <= today) {
            return this.alertService.warning('Please select future meeting date or time', 'Warning');
        } else {
            const payload = this.createNewMeetingPayload();
            this.scheduleMeetingApiCall(payload);
        }
    }
    private scheduleMeetingApiCall(payload: { 'meetingDate': Date; 'meetingStartDateTime': Date; 'subject': any; 'duration': any;
     'recurringType': any;  'timeZone': any; 'timeType': string; 'meetingId': any; 'createdBy': any; }) {
        this._meetingService.scheduleMeeting(payload).subscribe(data => {
            if (data.errorFl === true || data.warningFl === true) {
                return this.alertService.warning(data.message, 'Warning');
            } else {
                if (this.futureMeetingList === undefined || this.futureMeetingList.length <= 0) {
                    this.futureMeetingList = [];
                }
                this.futureMeetingList.splice(0, 0, data);
                if (this.filteredFutureMeetingList === undefined || this.filteredFutureMeetingList.length <= 0) {
                    this.filteredFutureMeetingList = [];
                }
                this.filteredFutureMeetingList.splice(0, 0, data);
                this.meetingObj = data;
                this.scheduleMeetingModal.open();
                return this.alertService.success('Meeting has scheduled successfully', 'Schedule Meeting');
            }
        });
    }

    private createNewMeetingPayload() {
        this.meridian = !this.meridian;
        this.accessCode = Math.floor(100000000 + Math.random() * 900000000);
        const startDate = new Date(this.meeting.datePicker.year, this.meeting.datePicker.month - 1, this.meeting.datePicker.day,
            this.meeting.meridianTime.hour, this.meeting.meridianTime.minute);
        const timeZoneOffset = startDate.getTimezoneOffset().toLocaleString();
        const payload = {
            'meetingDate': startDate,
            'meetingStartDateTime': startDate,
            'subject': this.subject,
            'duration': this.meeting.selectedDuration,
            'recurringType': this.meeting.isRecurring,
            'timeZone': this.timezoneSelect,
            'timeType': timeZoneOffset,
            'meetingId': this.accessCode,
            'createdBy': this.loggedInUser
        };
        return payload;
    }
    clearAllMeetingField() {
        this.subject = '';
        this.meeting.selectedDuration = 'Select Duration';
        this.meeting.selectedTimeZone = 'Select Timezone';
        this.meeting.callType = 1;
        this.meeting.isRecurring = 1;
        const today = new Date();
        this.meeting.datePicker = {
            day: today.getDate(),
            month: today.getMonth() + 1,
            year: today.getFullYear()
        };
        this.meeting.meridianTime = { hour: today.getHours(), minute: today.getMinutes() };
    }
    copyToOutLook(event) {
        const payload = {userCode: this.loggedInUser.userCode};
        this._meetingService.getRemeberEmails(payload).subscribe(data => {
            if (data.errorFl === true || data.warningFl === true) {
              this.rememberEmailList = [];
                return this.alertService.warning(data.message, 'Warning');
            } else {
              this.rememberEmailList = data;
              this.outlookModal.open();
              const newLine = '\r\n\r\n';
              this.outLookBody = this.getMeetingDetails(newLine);
              this.outLookSubject = this.subject;
              const newLineJson = '<br><br>';
              this.outLookBodyJson = this.getMeetingDetails(newLineJson);
              this.closeMeetingPopup('scheduleMeetings', false);
              }
        });

    }
    // copy meeting content
    copyToClipboard() {
        const newLine = '\r\n\r\n';
        const meetingDetails = 'Subject: ' + this.subject + newLine + this.getMeetingDetails(newLine);
        const el = document.createElement('textarea');
        el.value = meetingDetails;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        return this.alertService.success('Meeting Details has been copied. Kindly share via your preferred email id.'
        , 'Copy Meeting Details');
    }
    changeTimeZone(timezone) {
        this.meeting.selectedTimeZone = timezone;
    }
    changeDuration(duration) {
        this.meeting.selectedDuration = duration;
    }
    getTimeZone() {
        const offset = new Date().getTimezoneOffset(), o = Math.abs(offset);
        return (offset < 0 ? '+' : '-') + ('00' + Math.floor(o / 60)).slice(-2) + ':' + ('00' + (o % 60)).slice(-2);
    }
    // close meeting modal popup
    closeMeetingPopup(popupType, isSwitchRoute) {
        switch (popupType) {
            case 'scheduleMeetings':
                this.scheduleMeetingModal.close();
                this.clearAllMeetingField();
                if (isSwitchRoute) { this.switchRoute(0); }
                break;
        }
    }

    // get meeting details
    getMeetingDetails(newLine): string {
        const hours = parseInt(this.meeting.meridianTime.hour, 10) < 10 ? '0' + parseInt(this.meeting.meridianTime.hour, 10) : ''
            + parseInt(this.meeting.meridianTime.hour, 10);
        const minutes = parseInt(this.meeting.meridianTime.minute, 10) < 10 ? '0' + parseInt(this.meeting.meridianTime.minute, 10) :
            '' + parseInt(this.meeting.meridianTime.minute, 10);
        const meetingUrl = this.baseUrl + '#/meeting?meetingCode=';
        const guestMeetingUrl = this.baseUrl + '#/login/GuestUserWithMeeting?meetingCode=';
        const meetingDetails = 'Dear Attendees,' + newLine + 'Date :  ' + this.meeting.datePicker.year + '/' +
            this.meeting.datePicker.month + '/'
            + this.meeting.datePicker.day + '  at  ' +
            hours + ':' + minutes + '  (' + this.timezoneSelect + ')   for  '
            + this.meeting.selectedDuration +
            newLine + ' Please join my meeting from your computer using chrome browser ' + newLine +
            'Registered user use below URL for meeting:' + newLine
            + meetingUrl + this.accessCode + newLine + 'Guest user use below URL for meeting:'
             + newLine + guestMeetingUrl + this.accessCode + newLine + ' Meeting Id :    ' + this.accessCode;
        return meetingDetails;
    }
    sendEmail(e) {
        if (this.selectedEmails === null || typeof this.selectedEmails === 'undefined' || this.selectedEmails.trim() === '') {
            return this.alertService.warning('Please enter attendee email id', 'Warning');
        } else {
            if (this.ccAttendees !== '') {
                this.selectedCcEmails =  this.ccAttendees;
            }
            const payload = {
                toAttendees: this.selectedEmails, ccAttendees: this.selectedCcEmails,
                meetingDetailsBody: this.outLookBodyJson, meeting: this.meetingObj
            };
            this._meetingService.sendMeetingInvitationMail(payload).subscribe(data => {
                if (data.errorFl === true || data.warningFl === true) {
                    return this.alertService.warning(data.message, 'Warning');
                } else {
                    this.closeOutLookMailPopup();
                    return this.alertService.success('Meeting Invitation sent successfully', 'Meeting Invitation');
                }
            });
        }
    }
    closeOutLookMailPopup() {
        this.outlookModal.close();
        this.clearOutlookField();
    }
    clearOutlookField() {
        this.outLookBody = '';
        this.selectedEmails = '';
        this.selectedCcEmails = '';
        this.switchRoute(0);
    }
    onEmailSelect() {
        if (this.toAttendees.trim() !== '') {
            this.selectedEmails += ',' + this.toAttendees.trim();
        }
        if (this.selectedEmails.find === undefined) {
            this.selectedEmails = this.selectedEmails.replace('undefined', '');
            this.selectedEmails = this.selectedEmails.replace(/^,/, '');
        }
        this.toAttendees = '';
    }
    selectedCcEmail() {
        if (this.ccAttendees.trim() !== '') {
            this.selectedCcEmails += ',' + this.ccAttendees.trim();
        }
        if (typeof this.selectedCcEmails.find === 'undefined') {
            this.selectedCcEmails = this.selectedCcEmails.replace('undefined', '');
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

    onTimezoneSelect() {
            this.timezoneSelect = this.timezoneSelect.trim();
    }
}

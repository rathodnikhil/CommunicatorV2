import { Component, OnInit, EventEmitter, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { CustomModalComponent, CustomModalModel } from '../custom-modal/custom-modal.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';
import { MeetingService } from '../../../../services/meeting-service';
import { UserService } from '../../../../services/user.service';
import { Router } from '@angular/router';
import { AlertService } from '../../../../services/alert.service';

@Component({
    selector: 'app-schedule-meeting',
    templateUrl: './schedule-meeting.component.html',
    styleUrls: ['./schedule-meeting.component.scss'],
    providers: [AlertService]
})
export class ScheduleMeetingComponent implements OnInit {
    @Output() CurrentRoute = new EventEmitter();
    @ViewChild('scheduleMeetingModal') public scheduleMeetingModal: CustomModalComponent;
    _meetingService: MeetingService;
    _userService: UserService;
    currentDate: any;
    meeting: any;
    subject: any;
    meridian = true;
    today: any;
    accessCode: any;
    loggedInUser: any;
    audioMeeting: boolean;
    vedioMeeting: boolean;
    showScheduleMeetingSuccess: boolean;
    showCopyDetailsSuccess: boolean;
    // public radioGroupForm: FormGroup;
    scheduleMeetings: CustomModalModel = {
        titleIcon: '<i class="fa fa-calendar-check-o"></i>',
        title: 'Invite Attendees',
        smallHeading: 'Copy and paste to your calendar or share with your attendees',
        body: '',
        Button1Content: '<i class="fa fa-envelope"></i> Outlook',
        Button2Content: '<i class="fa fa-copy"></i> Copy'
    };
    durationArray = ['15 Min', '30 Min', '45 Min', '60 Min (1 Hour)', '90 Min (1.5 Hour)', '120 Min (2 Hour)', '150 Min (2.5 Hour)',
        '180 Min (3 Hour)', '240 Min (4 Hour)', '300 Min (5 Hour)', '360 Min (6 Hour)', '420 Min (7 Hour)', '480 Min (8 Hour)'];
    timeZoneArray = [
        '(GMT+13:00) Nukualofa',
        '(GMT+12:00) Fiji, Kamchatka, Marshall Is/',
        '(GMT+12:00) Auckland, Wellington',
        '(GMT+11:00) Magadan, Solomon Is/, New Caledonia',
        '(GMT+11:00) Currie',
        '(GMT+10:00) Vladivostok',
        '(GMT+10:00) Hobart',
        '(GMT+10:00) Guam, Port Moresby',
        '(GMT+10:00) Canberra, Melbourne, Sydney',
        '(GMT+10:00) Brisbane',
        '(GMT+09:30) Darwin',
        '(GMT+09:30) Adelaide',
        '(GMT+09:00) Yakutsk',
        '(GMT+09:00) Seoul',
        '(GMT+09:00) Osaka, Sapporo, Tokyo',
        '(GMT+08:00) Taipei',
        '(GMT+08:00) Perth',
        '(GMT+08:00) Kuala Lumpur, Singapore',
        '(GMT+08:00) Irkutsk, Ulaan Bataar',
        '(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi',
        '(GMT+07:00) Krasnoyarsk',
        'GMT+07:00) Bangkok',
        '(GMT+07:00) Hanoi, Jakarta',
        '(GMT+06:30) Rangoon',
        '(GMT+06:00) Sri Jayawardenepura',
        '(GMT+06:00) Astana, Dhaka',
        '(GMT+06:00) Almaty, Novosibirsk',
        '(GMT+05:45) Kathmandu',
        '(GMT+05:30) Calcutta, Chennai, Mumbai, New Delhi',
        '(GMT+05:00) Islamabad, Karachi, Tashkent',
        '(GMT+05:00) Ekaterinburg',
        '(GMT+04:30) Kabul',
        '(GMT+04:00) Baku, Tbilisi, Yerevan',
        '(GMT+04:00) Abu Dhabi, Muscat',
        '(GMT+03:30) Tehran',
        '(GMT+13:00) Nukualofa',
        '(GMT+03:00) Moscow, St/ Petersburg, Volgograd',
        '(GMT+03:00) Kuwait, Riyadh',
        '(GMT+03:00) Baghdad',
        '(GMT+02:00) Jerusalem',
        '(GMT+02:00) Helsinki, Riga, Tallinn',
        '(GMT+02:00) Harare, Pretoria',
        '(GMT+02:00) Cairo',
        '(GMT+02:00) Bucharest',
        '(GMT+02:00) Athens, Istanbul, Minsk, Vilnius',
        '(GMT+01:00) West Central Africa',
        '(GMT+01:00) Sarajevo, Skopje, Sofija, Warsaw, Zagreb',
        '(GMT+01:00) Brussels, Copenhagen, Madrid, Paris',
        '(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague',
        '(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
        '(GMT) Greenwich Mean Time',
        '(GMT) Casablanca, Monrovia',
        '(GMT-01:00) Cape Verde Is/',
        '(GMT-01:00) Azores',
        '(GMT-03:00) Buenos Aires, Georgetown',
        '(GMT-03:00) Brasilia',
        '(GMT-03:30) Newfoundland',
        '(GMT-04:00) Santiago',
        '(GMT-04:00) Caracas, La Paz',
        '(GMT-04:00) Atlantic Time (Canada)',
        '(GMT-05:00) Indiana (East)',
        '(GMT-05:00) Eastern Time (US and Canada)',
        '(GMT-05:00) Bogota, Lima, Quito',
        '(GMT-06:00) Mexico City',
        '(GMT-06:00) Guatemala',
        '(GMT-06:00) Central Time (US and Canada)',
        '(GMT-07:00) Mountain Time (US and Canada)',
        '(GMT-07:00) Arizona',
        '(GMT-08:00) Pacific Time (US and Canada); Tijuana',
        '(GMT-09:00) Alaska',
        '(GMT-10:00) Hawaii',
        '(GMT-11:00) Midway Island, Samoa',
        '(GMT) Dublin, Edinburgh, Lisbon, London'];

    constructor(private viewContainerRef: ViewContainerRef, meetingService: MeetingService ,userService: UserService, 
        private router: Router,public  alertService: AlertService) {
        this._meetingService = meetingService;
        this._userService = userService;
    }

    ngOnInit() {
        this.audioMeeting = false;
        this.vedioMeeting = false;
        this._userService.getLoggedInUserObj().subscribe(data => {     
            this.loggedInUser = data;     
         });
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
        // current date and time
        this.currentDate = Date.now();
    }
    switchRoute() {
        this.CurrentRoute.emit(0);
    }
    scheduleMeeting() {
        
        if (this.subject === "" || this.subject === null || typeof this.subject === "undefined") {
            return this.alertService.warning('Please enter meeting subject' , "Warning");
        } else if (this.meeting.selectedDuration === 'Select Duration') {
            return this.alertService.warning('Please select meeting duration' , "Warning");
        } else if (this.meeting.selectedTimeZone === 'Select Timezone') {
            return this.alertService.warning('Please select timezone' , "Warning");
        }else if(new Date(this.meeting.datePicker.year, this.meeting.datePicker.month-1,this.meeting.datePicker.day)< new Date()){
            return this.alertService.warning('Please select future Date' , "Warning");
        } else if(this.meeting.meridianTime.hour < new Date().getHours() && this.meeting.meridianTime.minute< new Date().getMinutes()){
            return this.alertService.warning('Please select future time' , "Warning");
        }else {
            this.meridian = !this.meridian;
            this.accessCode = new Date().getTime()+'_'+ Math.floor(Math.random() * 900) + 100;
            if (this.meeting.callType === 1) {
                this.meeting.callType = 'Audio';
            } else {
                this.meeting.callType = 'Video';
            }
          
            const payload = {
                'meetingDate': new Date(this.meeting.datePicker.year, this.meeting.datePicker.month-1, this.meeting.datePicker.day),
                // 'meetingStartDateTime': (this.meeting.meridianTime.hour > 12 ? this.meeting.meridianTime.hour - 12 : this.meeting.meridianTime.hour) + ':' 
                // + this.meeting.meridianTime.minute,
                //'meetingEndDateTime': 1525067350000,
                'meetingStartDateTime': new Date(this.meeting.datePicker.year, this.meeting.datePicker.month-1,
                    this.meeting.datePicker.day,this.meeting.meridianTime.hour , this.meeting.meridianTime.minute),
                'subject': this.subject,
                'duration': this.meeting.selectedDuration,
                'recurringType': this.meeting.isRecurring,
                'callType': this.meeting.callType,
                'timeZone': this.meeting.selectedTimeZone,
                'timeType': this.meeting.meridianTime.hour > 12 ? 'PM' : 'AM',
                'meetingId': this.accessCode,
                'createdBy': this.loggedInUser
            };

            this._meetingService.scheduleMeeting(payload).subscribe(data => {
                if(data.errorFl === true || data.warningFl === true){
                    this.meeting = {};
                    return this.alertService.warning(data.message, "Warning"); 
                }else{ 
                if(this.meeting.callType === 'Video'){
                    this.vedioMeeting = true;
                    this.audioMeeting =false;
                }else{
                    this.audioMeeting = true;
                    this.vedioMeeting = false;
                }
                this.scheduleMeetingModal.open();
            }
            });
            
        }
    }
    clearAllMeetingField() {
        this.subject = '';
        this.meeting.selectedDuration = 'Select Duration';
        this.meeting.selectedTimeZone = 'Select Timezone';
        this.meeting.callType = 1;
        this.meeting.isRecurring = 1;
        this.meeting.datePicker = Date.now();
    }
    copyToOutLook(event, subject) {
        var meetingDetails = this.getMeetingDetails();
        this.closeMeetingPopup('scheduleMeetings');
        const a = document.createElement('a');
        a.href = 'mailto:?subject=' + this.subject+'&body=' + meetingDetails;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        this.showScheduleMeetingSuccess = false;
        this.clearAllMeetingField();
    }
    //copy meeting content
    copyToClipboard() {
        var meetingDetails = this.getMeetingDetails();
        var tempInput = $('<input>').val(meetingDetails).appendTo('body').select()
        document.execCommand('copy');
        this.clearAllMeetingField();
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
    //close meeting modal popup
    closeMeetingPopup(popupType) {
        switch (popupType) {
            case 'scheduleMeetings':
                this.scheduleMeetingModal.close();
                break;
        }
    }

    //get meeting details
    getMeetingDetails(): string {
        let meetingUrl = '';
        if(this.meeting.callType === 'Video'){
            this.vedioMeeting = true;
             meetingUrl = 'https://cfscommunicator.com/#/meeting?meetingCode=';
        }else{
            this.audioMeeting = true;
             meetingUrl = 'https://cfscommunicator.com/#/meeting/audio?meetingCode=';
        }
      
        var meetingDetails = 'Date :  ' + this.meeting.datePicker.day + '/' + this.meeting.datePicker.month + '/' + this.meeting.datePicker.year + '  at  ' +
            this.meeting.meridianTime.hour + ':' + this.meeting.meridianTime.minute + '  (' + this.meeting.selectedTimeZone + ')   for  '
             + this.meeting.selectedDuration + '\n' +
            '\n Please join my meeting from your computer,tablet or smartphone \n' + meetingUrl +this.accessCode+'\n' +
            '\n Access Code :    ' + this.accessCode;
        return meetingDetails;
    }
}


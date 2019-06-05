import {
    Component, OnInit,
    AfterViewInit, ElementRef, Inject, ViewChild
} from '@angular/core';
import { UserService } from '../../../services/user.service';
import { LoginService } from '../../../services/login.service';
import { MeetingService } from '../../../services/meeting-service';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AlertService } from '../../../services/alert.service';
import { CustomModalComponent, CustomModalModel } from 'app/layout/dashboard/components/custom-modal/custom-modal.component';
import { StaticLabels, ErrorMessageConstants, TypeOfError, SuccessMessage } from 'app/shared/errorMessageConstants';
@Component({
    selector: 'app-meeting',
    templateUrl: './meeting.component.html',
    styleUrls: ['./meeting.component.scss'],
    providers: [AlertService]
})
export class MeetingComponent implements OnInit, AfterViewInit {
    _userService: UserService;
    _loginService: LoginService;
    _meetingService: MeetingService;
    messageSendTo: any;
    momTo: any;
    isMOMvisible = true;
    momDescription: any;
    meetingDetails: any;
    errorFl: boolean;
    userList = [];
    nullCheckFlag: boolean;
    momAddSuccess: boolean;
    momAddDesciption: boolean;
    meetingCode = '';
    momTxt: any;
    loggedInUser: any;
    isHost = false;
    previousHtml: any;
    isGuest = false;
    currentTab = '';
    notify: string;
    hour = 0;
    minute = 0;
    second = 0;
    tick = 0;
    timeLeft = 0;
    leftNavDisabled = false;
    rightNavDisabled = false;
    index = 0;
    isMute = false;
    isMeetingStarted = false;
    isScreenSharingStarted = false;
    isVideoEnabled = false;
    toggleMeeting = false;
    actualMeetingTime: any;
    muteBtnTitle = StaticLabels.Mute;
    videoBtnTitle = StaticLabels.VideoOn;
    constructor(@Inject(DOCUMENT) private document, private elementRef: ElementRef,
        userService: UserService, loginService: LoginService, meetingService: MeetingService, private alertService: AlertService,
        private activatedRoute: ActivatedRoute, public router: Router) {
        this._userService = userService;
        this._loginService = loginService;
        this._meetingService = meetingService;
    }
    @ViewChild('exitMeetingConfirmModal') public exitMeetingConfirmModal: CustomModalComponent;
    leaveMeeting: CustomModalModel = {
        titleIcon: '<i class="fas fa-sign-out-alt"></i>',
        title: 'Exit Meeting',
        smallHeading: 'You can exit meeting here',
        body: '',
        Button1Content: '',
        Button2Content: ''
    };
    ngOnInit() {
        if (!localStorage.getItem('loggedInuserName')) {
            // this._loginService.setPreviousUrl(this.router.url);
            this.router.navigate(['/login']);
        }
        this.meetingDetails = {};
        this.activatedRoute.queryParams.subscribe((params: Params) => {
            this.meetingCode = params['meetingCode'];
        });
        this.getLoggedInUserObjApiCall();
    }
    private getLoggedInUserObjApiCall() {
        this._userService.getLoggedInUserObj().subscribe(data => {
            if (data.firstName !== undefined && this.loggedInUser === undefined) {
                this.loggedInUser = data;
                //     let userCodeVal = null;
                if (!data.isGuest) {
                    //     userCodeVal = this.loggedInUser.userCode;
                    this.isGuest = false;
                } else if (data.isGuest) {
                    //  userCodeVal = this.loggedInUser.firstName;
                    this.isGuest = true;
                    this.meetingCode = data.meetingCode;
                }
                if (this.meetingCode !== '' && this.meetingCode !== undefined) {
                    const payload = {
                        userCode: this.loggedInUser.userCode, meetingCode: this.meetingCode,
                        email: this.loggedInUser.email
                    };
                    this.verifyUserApiCall(payload);
                } else {
                    this.setAuthenticateUserValidation(data);
                }
            }
        });
    }

    private setAuthenticateUserValidation(data: any) {
        this.alertService.error(ErrorMessageConstants.InvalidMeetingCode, StaticLabels.InvalidData);
        if (data.isGuest === true) {
            this.router.navigate(['/login']);
            // window.location.reload();
        } else {
            this.router.navigate(['/dashboard']);
            // window.location.reload();
        }
    }

    private verifyUserApiCall(payload: { userCode: any; meetingCode: string; email: any; }) {
        this._meetingService.verifyMeetingHost(payload).subscribe(data2 => {
            if (!data2.warningFl && !data2.errorFl && data2.message !== null
                && data2.message.toLowerCase().indexOf('success') > -1) {
                this.onMeetingAlreadyOverOnSuccess(data2);
            } else if (data2.warningFl && data2.message !== null) {
                this.onMeetingAlreadyOver(data2);
            } else {
                this.isHost = false;
                this.document.getElementById('isHost').innerHTML = StaticLabels.False;
            }
        });
    }

    private onMeetingAlreadyOverOnSuccess(data2: any) {
        this.meetingDetails = data2;
        const duration = (parseInt(this.meetingDetails.duration.split(' ')[0], 10) * 60);
        const delta = Math.round((new Date().getTime() - new Date(data2.meetingStartDateTime).getTime()) / 1000);
        this.timeLeft = (duration - delta) > 0 ? (duration - delta) : 0;
        // if (this.isHost === false && this.isGuest === true) {
        this.startTimer();
        // }
        if ((duration - delta) < 0) {
            this.alertService.error(ErrorMessageConstants.MeetingOver, StaticLabels.OverMeeting);
        }
        this.isHost = true;
        this.document.getElementById('isHost').innerHTML = StaticLabels.True;
    }

    private onMeetingAlreadyOver(data2: any) {
        this.meetingDetails = data2;
        const duration = (parseInt(this.meetingDetails.duration.split(' ')[0], 10) * 60);
        const delta = Math.round((new Date().getTime() - new Date(data2.meetingStartDateTime).getTime()) / 1000);
        this.timeLeft = (duration - delta) > 0 ? (duration - delta) : 0;
        // if (this.isHost === false || this.isGuest === true) {
        this.startTimer();
        // }
        // this.startTimer();
        if ((duration - delta) < 0) {
            this.alertService.error(ErrorMessageConstants.MeetingOver, StaticLabels.OverMeeting);
        }
        this.isHost = false;
        this.document.getElementById('isHost').innerHTML = StaticLabels.False;
    }

    ngAfterViewInit(): void {
        (<any>window).customAlertService = this.alertService;
        const s = this.document.createElement('script');
        s.type = 'text/javascript';
        s.src = '../../../assets/scripts/meetingTest.js';
        s.id = 'meetingTest';
        const __this = this; // to store the current instance to call
        // afterScriptAdded function on onload event of
        // script.
        s.onload = function () { __this.afterScriptAdded(); };
        this.elementRef.nativeElement.appendChild(s);
    }
    afterScriptAdded() {
        this.document.getElementById('room-id').value = this.meetingCode === undefined ? 'Enter Meeting Id' : this.meetingCode;
        const params = {
            width: '350px',
            height: '420px',
        };
        if (typeof (window['functionFromExternalScript']) === 'function') {
            window['functionFromExternalScript'](params);
        }
    }

    toggleMOM() {
        this.isMOMvisible = !this.isMOMvisible;
    }

    // save mom details
    saveMom() {
            if (!this.isHost) {
                if (this.momTxt === '' || this.momTxt === null || typeof this.momTxt === StaticLabels.Undefined) {
                    this.momTxt = ErrorMessageConstants.EnterMOM;
                }
                this.momForHostAndRegisterUser();
            } else {
                const payload = { meetingCode: this.meetingCode, momDescription: this.momTxt, userCode: this.loggedInUser.userCode };
                this.saveMomApiCall(payload);
            }
    }
    private saveMomApiCall(payload: { meetingCode: string; momDescription: any; userCode: any; }) {
        this._meetingService.saveMomDetails(payload).subscribe(resp => {
            this.errorFl = resp.errorFl;
            if (this.errorFl === true) {
                return this.alertService.warning(resp.message, TypeOfError.Warning);
            } else {
                const attendeePayload = { meetingCode: this.meetingDetails.meetingCode };
                let attendeeList;
                attendeeList = this.meetingAttendeeApiCall(attendeePayload, attendeeList);
            }
        });
    }

    private meetingAttendeeApiCall(attendeePayload: { meetingCode: any; }, attendeeList: any) {
        this._meetingService.getMeetingAttendee(attendeePayload).subscribe(attendeeData => {
            attendeeList = attendeeData;
            this.downloadFile(this.momTxt, this.meetingDetails, attendeeList);
        });
        return attendeeList;
    }

    private momForHostAndRegisterUser() {
        if (this.isGuest) {
            this.downloadFile(this.momTxt, this.meetingDetails, ErrorMessageConstants.GuestViewAttendee);
        } else {
            const payload = { meetingCode: this.meetingDetails.meetingCode };
            this._meetingService.getMeetingAttendee(payload).subscribe(resp => {
                this.downloadFile(this.momTxt, this.meetingDetails, resp);
            });
        }
    }

    downloadFile(data, meetingDetails, attendeeList) {
        if (this.isGuest) {
            attendeeList = 'Your are guest , you cant view attendee';
        } else {
            data = data.split('\n');
            data = data.join('\r\n ');
        }
        const meetingDate = new Date();
        meetingDate.setTime(meetingDetails.meetingStartDateTime);
        const momHeader = 'Date of Meeting: ' + meetingDate.toString().slice(0, 24) + '\r\n\r\n' + 'Subject: ' + meetingDetails.subject +
            '\r\n\r\n' + 'Attendees: ' + attendeeList + '\r\n\r\n';
        const fileType = 'text/json';
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.setAttribute('style', 'display: none');
        a.setAttribute('href', `data:${fileType};charset=utf-8,${encodeURIComponent(momHeader + 'Meeting Notes: ' + '\r\n\r\n' + data)}`);
        // a.href = url;
        a.download = 'MOM' + '(' + meetingDate.toString().slice(0, 24) + ').txt';
        a.click();
        // window.URL.revokeObjectURL(url);
        a.remove(); // remove the element
        //  return this.alertService.success(SuccessMessage.DownloadMom, SuccessMessage.SuccessHeader);
    }

    switchTab(tab) {
        this.currentTab = tab;
        this.toggleMeeting = true;
    }
    closeToggle() {
        this.currentTab = null;
        this.toggleMeeting = false;
    }
    exitMeeting() {
        this.exitMeetingConfirmModal.open();
    }
    completeExit() {
        this.exit();
        const payload = { userCode: this.loggedInUser.userCode, meetingCode: this.meetingCode };
        this.saveMom();
        if (this.isGuest === true) {
            // this.downloadFile(this.momTxt, this.meetingDetails, null);
            payload.userCode = this.loggedInUser.firstName;
            this.closeRmainigMeetingActivity();
        } else {
            this.endMeetingApiCall(payload);
        }
    }
    exit() {
        this.exitMeetingConfirmModal.close();
    }
    private endMeetingApiCall(payload: { userCode: any; meetingCode: string; }) {
        this._meetingService.endMeeting(payload).subscribe(resp => {
            if (resp.errorFl) {
                this.alertService.warning(resp.message, TypeOfError.Warning);
            } else {
                //   this.document.getElementById('btn-leave-room').click();
                this.closeRmainigMeetingActivity();
                this.alertService.success(SuccessMessage.EndMeeting, SuccessMessage.SuccessHeader);
            }
        });
    }

    private closeRmainigMeetingActivity() {
        this.stopTimer();
        this.router.navigate(['/login']);
        window.location.reload();
    }

    stopTimer() {
        clearInterval(this.actualMeetingTime);
    }
    startTimer() {
        this.actualMeetingTime = setInterval(() => { this.calculateTimeSpan(); }, 1000);
    }
    mute() {
        this.isMute = !this.isMute;
        if (this.isMute) {
            this.muteBtnTitle = StaticLabels.UnMute;
        } else {
            this.muteBtnTitle = StaticLabels.Mute;
        }
    }
    shareScreen() {
        this.isScreenSharingStarted = !this.isScreenSharingStarted;
    }
    viewVideo() {
        this.isVideoEnabled = !this.isVideoEnabled;
        if (this.isVideoEnabled) {
            this.videoBtnTitle = StaticLabels.VideoOff;
        } else {
            this.videoBtnTitle = StaticLabels.VideoOn;
        }
    }
    calculateTimeSpan() {
        if (this.second === 59) {
            if (this.minute === 59) {
                this.hour += 1;
                this.minute = 0;
            } else {
                this.minute += 1;
            }
            this.second = 0;
        } else {
            this.second += 1;
        }
        this.tick++;
    }
    startMeeting() {
        this.isMeetingStarted = !this.isMeetingStarted;
        // this.startTimer();
    }
    copyMeetingId() {
        const el = document.createElement('textarea');
        el.value = this.meetingDetails.meetingCode;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        return this.alertService.success(SuccessMessage.copyMeetingDetails, SuccessMessage.SuccessHeader);
    }
    switchTabAndToggle() {
        if (!this.toggleMeeting) {
            this.currentTab = 'chat';
        } else {
            this.currentTab = null;
        }
        this.toggleMeeting = !this.toggleMeeting;
    }
}


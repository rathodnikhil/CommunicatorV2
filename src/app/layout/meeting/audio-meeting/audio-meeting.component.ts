import { Component, OnInit, Inject, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { LoginService } from '../../../services/login.service';
import { MeetingService } from '../../../services/meeting-service';
import { DOCUMENT } from '@angular/common';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { CustomModalComponent, CustomModalModel } from 'app/layout/dashboard/components/custom-modal/custom-modal.component';
import { AlertService } from 'app/services/alert.service';
import { CountdownComponent } from 'ngx-countdown';

@Component({
    selector: 'app-audio-meeting',
    templateUrl: './audio-meeting.component.html',
    providers: [AlertService],
    styleUrls: ['./audio-meeting.component.scss']
})
export class AudioMeetingComponent implements OnInit, AfterViewInit {
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
    isScreenSharingStarted=false;
    isMute =false;
    isMeetingStarted=false;
    currentTab = 'chat';
    notify: string;
    config: any = { leftTime: 10, notify: [300] };
    counter: CountdownComponent;
    endBtnFlag: boolean;
    @ViewChild(CountdownComponent) set ft(tiles: CountdownComponent) {
        if (tiles !== undefined) {
            this.counter = tiles;
            this.counter.pause();
        }
    }
    imagelist = [
        'luke.png',
        'chubaka.png',
        'boba.png',
        'c3po.png',
        'leia.png',
        'obi.png',
        'r2d2.png',
        'storm.png',
        'varder.png',
        'yoda.png',
        'yolo.png'
    ];
    leftNavDisabled = false;
    rightNavDisabled = false;
    index = 0;
    @ViewChild('saveMomBtn') saveMomBtn: ElementRef;
    @ViewChild('exitMeetingConfirmModal') public exitMeetingConfirmModal: CustomModalComponent;
    leaveMeeting: CustomModalModel = {
        titleIcon: '<i class="fas fa-sign-out-alt"></i>',
        title: 'Exit Meeting',
        smallHeading: 'You can exit meeting here',
        body: '',
        Button1Content: '',
        Button2Content: ''
    };
    constructor(@Inject(DOCUMENT) private document, private elementRef: ElementRef,
        userService: UserService, loginService: LoginService, meetingService: MeetingService, private alertService: AlertService,
        private activatedRoute: ActivatedRoute, public router: Router) {
        this._userService = userService;
        this._loginService = loginService;
        this._meetingService = meetingService;
    }

    ngOnInit() {
        if (!localStorage.getItem('loggedInuserName')) {
            this._loginService.setPreviousUrl(this.router.url);
            this.router.navigate(['/login']);
        }
        this.meetingDetails = {};
        this.activatedRoute.queryParams.subscribe((params: Params) => {
            this.meetingCode = params['meetingCode'];
        });
        this._userService.getLoggedInUserObj().subscribe(data => {
            if (data.firstName !== undefined) {
                this.loggedInUser = data;
                if (this.meetingCode !== '') {
                    const payload = { userCode: '', meetingCode: this.meetingCode };
                    if (!data.isGuest) {
                        payload.userCode = this.loggedInUser.userCode;
                    } else if (data.isGuest) {
                        payload.userCode = this.loggedInUser.firstName;
                    }
                    this._meetingService.verifyMeetingHost(payload).subscribe(data2 => {
                        if (!data2.warningFl && !data2.errorFl && data2.message !== null
                            && data2.message.toLowerCase().indexOf('success') > -1) {
                            this.meetingDetails = data2;
                            this.config.leftTime = parseInt(this.meetingDetails.duration.split(' ')[0]) * 60;
                            this.isHost = true;
                            this.document.getElementById('isHost').innerHTML = 'true';
                        } else if (data2.warningFl && data2.message !== null) {
                            this.meetingDetails = data2;
                            this.config.leftTime = parseInt(this.meetingDetails.duration.split(' ')[0]) * 60;
                            this.isHost = false;
                            this.document.getElementById('isHost').innerHTML = 'false';
                        } else {
                            this.isHost = false;
                            this.document.getElementById('isHost').innerHTML = 'false';
                        }
                    });
                }
            } else if (data.firstName !== undefined && data.isGuest) {
                this.isGuest = true;
            }
        });
    }
    ngAfterViewInit(): void {
        (<any>window).customAlertService = this.alertService;
        const s = this.document.createElement('script');
        s.type = 'text/javascript';
        s.src = '../../../assets/scripts/meetingAudio.js';
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

        if (this.momTxt.trim() === '' || this.momTxt === null || typeof this.momTxt === 'undefined') {
            return this.alertService.warning('Please enter minutes of meeting(MOM)', 'Warning');
        } else {
            if (!this.isHost) {
                this.downloadFile(this.momTxt,this.meetingDetails);
            } else {
                const payload = { meetingCode: this.meetingCode, momDescription: this.momTxt, userCode: this.loggedInUser.userCode };
                this._meetingService.saveMomDetails(payload).subscribe(resp => {
                    this.errorFl = resp.errorFl;
                    if (this.errorFl === true) {
                        return this.alertService.warning(resp.message, 'Warning');
                    } else {
                        this.downloadFile(this.momTxt,this.meetingDetails);
                    }
                });
            }
        }
    }
    downloadFile(data,meetingDetails) {
        data = data.split('\n');
        data = data.join('\r\n ');
        const fileType = 'text/json';
        const momHeader = 'Date of Meeting: '+meetingDetails.meetingDate +'\r\n\r\n'+'Subject: '+meetingDetails.subject+'\r\n\r\n';
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.setAttribute('style', 'display: none');
        a.setAttribute('href', `data:${fileType};charset=utf-8,${encodeURIComponent(momHeader+data)}`);
        // a.href = url;
        const today = new Date();
        a.download = 'MOM_' + meetingDetails.meetingDate + '(' + new Date().toLocaleString('en-us', {  weekday: 'long' })+').txt';
        a.click();
        // window.URL.revokeObjectURL(url);
        a.remove(); // remove the element
        this.alertService.success('File has downloaded.', 'MOM Download');
    }


    switchTab(tab) {
        this.currentTab = tab;
    }

    exitMeeting() {
        this.exitMeetingConfirmModal.open();
    }
    completeExit(){
     this.exit();
     if (!this.isHost) {
        this.router.navigate(['/dashboard']);
    } else{
     this.router.navigate(['/login']);
    }
    }
    exit(){
        this.exitMeetingConfirmModal.close();
        const payload = { userCode: this.loggedInUser.userCode, meetingCode: this.meetingCode };
        this._meetingService.endMeeting(payload).subscribe(resp => {
            this.errorFl = resp.errorFl;
            if (this.errorFl) {
                this.alertService.warning(resp.message, 'Warning');
            } else {
                this.document.getElementById('btn-leave-room').click();
                this.document.getElementById('btn-leave-room').disable = true;
                this.document.getElementById('input-text-chat').disable = true;
                this.alertService.success('Meeting has ended.', 'End Meeting');
            }
        });
    }
    startTimer() {
        this.counter.resume();
    }
    onFinished() {
        this.alertService.warning('Meeting time has lapsed.', 'Meeting time over!');
    }
    onNotify(time: number) {
        this.alertService.warning('Meeting will end in 5 mins.', 'Meeting about to end!');
    } 
    leftBoundStat(reachesLeftBound: boolean) {
        this.leftNavDisabled = reachesLeftBound;
    }

    rightBoundStat(reachesRightBound: boolean) {
        this.rightNavDisabled = reachesRightBound;
    }

    onSnapAnimationFinished() {
        console.log('snap animation finished');
    }

    onIndexChanged(idx) {
        this.index = idx;
        console.log('current index: ' + idx);
    }
}

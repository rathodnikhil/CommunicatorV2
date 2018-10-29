import { Component, OnInit, Inject, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { LoginService } from '../../../services/login.service';
import { MeetingService } from '../../../services/meeting-service';
import { DOCUMENT } from '@angular/common';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { CustomModalComponent, CustomModalModel } from 'app/layout/dashboard/components/custom-modal/custom-modal.component';
import { AlertService } from 'app/services/alert.service';

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

    @ViewChild('confirmEndMeetingModal') public confirmEndMeetingModal: CustomModalComponent;
    endMeetConfirm: CustomModalModel = {
        titleIcon: '<i class="fa fa-user"></i>',
        title: 'New Team',
        smallHeading: 'You can add new team details here',
        body: '',
        Button1Content: '<i class="fa fa-user"></i>&nbsp;Add Team',
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

        this.messageSendTo = 'Send Message to';
        this.momTo = 'set MOM Duty';
        this.activatedRoute.queryParams.subscribe((params: Params) => {
            this.meetingCode = params['meetingCode'];

            console.log(this.meetingCode);
        });
        this._userService.getLoggedInUserObj().subscribe(data => {
            if (data.firstName !== undefined && !data.isGuest) {
                this.loggedInUser = data;
                if (this.meetingCode !== '') {
                    const payload = { userCode: this.loggedInUser.userCode, meetingCode: this.meetingCode };
                    // this.document.getElementById('isHost').innerHTML = 'true';
                    // this.isHost = true;
                    this._meetingService.verifyMeetingHost(payload).subscribe(data => {
                        if (!data.warningFl && !data.errorFl && data.message !== null) {
                            this.meetingDetails = data;
                            this.isHost = true;
                            this.document.getElementById('isHost').innerHTML = "true";
                        }
                        else {
                            this.isHost = false;
                            this.document.getElementById('isHost').innerHTML = "false";
                        }

                    });
                }
            }
        });
    }
    ngAfterViewInit(): void {
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
    // to set selected send message to
    changeMessageTo(member) {
        this.messageSendTo = member.name + ' ' + member.lastName;
    }

    // to set selected mom to
    changeMomTo(member) {
        this.momTo = member.name + ' ' + member.lastName;
    }
    toggleMOM() {
        this.isMOMvisible = !this.isMOMvisible;
    }

    // save mom details
    saveMom() {
        if (this.momTxt === '' || this.momTxt === null || typeof this.momTxt === "undefined") {
            return this.alertService.warning('Please neter minutes of meeting(MOM)', 'Warning');
        } else {
            if (!this.isHost) {
                this.downloadFile(this.momTxt);
            }else{
            const payload = { meetingCode: this.meetingCode, momDescription: this.momTxt, userCode: this.loggedInUser.userCode };
            this._meetingService.saveMomDetails(payload).subscribe(resp => {
                this.errorFl = resp.json().errorFl;
                if (this.errorFl === true) {
                    return this.alertService.warning(resp.json().message, 'Warning');
                } else {
                    this.downloadFile(this.momTxt);
                }
            });
        }
        }
    }
    downloadFile(data) {
        data = data.split('\n');
        data = data.join('\r\n ');
        const fileType = 'text/json';

        var a = document.createElement('a');
        document.body.appendChild(a);
        a.setAttribute('style', 'display: none');
        a.setAttribute('href', `data:${fileType};charset=utf-8,${encodeURIComponent(data)}`);
        // a.href = url;
        a.download = this.meetingCode + '.txt';
        a.click();
        // window.URL.revokeObjectURL(url);
        a.remove(); // remove the element
        this.alertService.success("File has been downloaded.", "MOM Download");
    }

    saveCurrent(obj) {
        if (this.previousHtml != undefined && this.previousHtml.id == obj.nextId) {
            setTimeout(() => { this.document.getElementById(obj.nextId + '-panel').innerHTML = this.previousHtml.content; this.previousHtml = undefined; }, 1000)


        }
        else {
            this.previousHtml = {
                id: obj.activeId,
                content: this.document.getElementById(obj.activeId + '-panel').innerHTML
            };
        }
    }
    exitMeeting() {
        this.confirmEndMeetingModal.open();

    }
    endMeeting() {
        window.close();
        const payload = { userCode: this.loggedInUser.userCode, meetingCode: this.meetingCode }
        this._meetingService.endMeeting(payload).subscribe(resp => {
            this.errorFl = resp.json().errorFl;
            if (this.errorFl === true) {
                this.nullCheckFlag = true;
                setTimeout(function () {
                    this.nullCheckFlag = false;
                }.bind(this), 5000);
            } else {
                this.confirmEndMeetingModal.open();
                this.alertService.success('Meeting has ended.', 'End Meeting');
            }
        });
    }

    //close team modal popup
    closePopup() {
        this.confirmEndMeetingModal.close();

    }
}

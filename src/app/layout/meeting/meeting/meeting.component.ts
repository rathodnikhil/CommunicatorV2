import { Component, OnInit, trigger, transition, style, animate, state, AfterViewInit, ElementRef, Inject, ViewChild } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { LoginService } from '../../../services/login.service';
import { MeetingService } from '../../../services/meeting-service';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
    selector: 'app-meeting',
    templateUrl: './meeting.component.html',
    styleUrls: ['./meeting.component.scss'],
    animations: [
        trigger('MomBody', [
            state('inactive', style({
                display: 'block'
            })),
            state('active', style({
                display: 'none'
            })),
            transition('inactive => active', animate('200ms ease-in')),
            transition('active => inactive', animate('200ms ease-in'))
        ]),
        trigger('MomHeader', [
            state('inactive', style({
                top: '100%'
            })),
            state('active', style({
                top: '65%'
            })),
            transition('inactive => active', animate('0.2ms ease-in')),
            transition('active => inactive', animate('450ms ease-in'))
        ]),
        trigger('arrow', [
            state('up', style({
                transform: 'rotate(180deg)'
            })),
            state('down', style({
                transform: 'rotate(0deg)'
            })),
            transition('up => down', animate('0.2ms ease-in')),
            transition('down => up', animate('450ms ease-in'))
        ]),
    ],
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
    constructor(@Inject(DOCUMENT) private document, private elementRef: ElementRef,
        userService: UserService, loginService: LoginService, meetingService: MeetingService, private activatedRoute: ActivatedRoute, public router: Router) {
        this._userService = userService;
        this._loginService = loginService;
        this._meetingService = meetingService;
    }

    ngOnInit() {
        // debugger;
        if (!localStorage.getItem('loggedInuserName')) {
            this._loginService.setPreviousUrl(this.router.url);
            this.router.navigate(['/login']);
        }

        this.messageSendTo = 'Send Message to';
        this.momTo = 'set MOM Duty';
        this.activatedRoute.queryParams.subscribe((params: Params) => {
            debugger;
            this.meetingCode = params['meetingCode'];

            console.log(this.meetingCode);
        });
        this._userService.getLoggedInUserObj().subscribe(data => {
            if (data.firstName !== undefined) {
                this.loggedInUser = data;
                if (this.meetingCode !== '') {
                    const payload = { userCode: this.loggedInUser.userCode, meetingCode: this.meetingCode };
                    this._meetingService.verifyMeetingHost(payload).subscribe(data => {
                        debugger;
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
        // const s = document.createElement('script');
        // s.type = 'text/javascript';
        // s.innerHTML = 'console.log(\'done\');'; // inline script
        // s.src = '../../../assets/scripts/meetingTest.js';

        const s = this.document.createElement('script');
        s.type = 'text/javascript';
        s.src = '../../../assets/scripts/meetingTest.js';
        const __this = this; // to store the current instance to call
        // afterScriptAdded function on onload event of
        // script.
        s.onload = function () { __this.afterScriptAdded(); };
        this.elementRef.nativeElement.appendChild(s);
    }
    afterScriptAdded() {
        // debugger;
        // const meetingName = this.document.getElementById('meeting-name');

        // meetingName.value = this.loggedInUser.name + ' ' + this.loggedInUser.lastName + '_'
        //     + this.selectedUser.firstName + ' ' + this.selectedUser.lastName + '_videoCall';
        // this.document.getElementById('setup-meeting').click();
        // debugger;
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
        
        if (!this.isHost) {
            alert("Only host can save MOM to database");
            return;
        }

        alert(this.momTxt);
        if (this.momTxt === '' || this.momTxt === null || typeof this.momTxt === "undefined") {
            this.momAddDesciption = true;
            setTimeout(function () {
                this.momAddDesciption = false;
            }.bind(this), 5000);
        } else {
            const payload = { meetingCode: this.meetingCode, momDescription: this.momTxt , userCode : this.loggedInUser.userCode};
            this._meetingService.saveMomDetails(payload).subscribe(resp => {
                this.errorFl = resp.json().errorFl;
                if (this.errorFl === true) {
                    this.nullCheckFlag = true;
                    setTimeout(function () {
                        this.nullCheckFlag = false;
                    }.bind(this), 5000);
                } else {

                }
            });
        }
    }
    downloadFile(data) {
        debugger;
        var uri = "data:text/csv;" + data;
        var url = window.URL.createObjectURL(uri);
        var a = document.createElement('a');
        document.body.appendChild(a);
        a.setAttribute('style', 'display: none');
        a.href = url;
        a.download = 'MOM.text';
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove(); // remove the element
    }
}


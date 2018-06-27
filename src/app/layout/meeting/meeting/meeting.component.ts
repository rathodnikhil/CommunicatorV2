import { Component, OnInit, trigger, transition, style, animate, state, AfterViewInit, ElementRef, Inject } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { LoginService } from '../../../services/login.service';
import { MeetingService } from '../../../services/meeting-service';
import { DOCUMENT } from '@angular/common';
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
    errorFl: boolean;
    userList = [];
    nullCheckFlag: boolean;
    momAddSuccess: boolean;
    momAddDesciption: boolean;
    constructor(@Inject(DOCUMENT) private document, private elementRef: ElementRef,
    userService: UserService, loginService: LoginService, meetingService: MeetingService) {
        this._userService = userService;
        this._loginService = loginService;
        this._meetingService = meetingService;
    }

    ngOnInit() {
        this.messageSendTo = 'Send Message to';
        this.momTo = 'set MOM Duty';
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
        this.document.getElementById('setup-meeting').click();
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
        this.isMOMvisible != this.isMOMvisible;
    }

    //save mom details
    saveMom() {
        if(this.momDescription === "" || this.momDescription === null || typeof this.momDescription === "undefined") {
            this.momAddDesciption = true;
            setTimeout(function () {
                this.momAddDesciption = false;
            }.bind(this), 5000);
        }else {
        const payload = { "momDescription": this.momDescription }
        this._meetingService.saveMomDetails(payload).subscribe(resp => {
            this.errorFl = resp.json().errorFl;
            if(this.errorFl == true){
                this.nullCheckFlag = true;
                setTimeout(function () {
                    this.nullCheckFlag = false;
                }.bind(this), 5000)
            }else{

            }
        });
    }
        }
    }


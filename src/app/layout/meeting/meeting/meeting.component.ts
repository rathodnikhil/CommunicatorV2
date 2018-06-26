import { Component, OnInit, trigger, transition, style, animate, state } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { LoginService } from '../../../services/login.service';

@Component({
    selector: 'app-meeting',
    templateUrl: './meeting.component.html',
    styleUrls: ['./meeting.component.scss'],
    animations: [
        // trigger('MomBody', [
        //     transition(':enter', [
        //         style({ transform: 'translateY(0%)' }),
        //         animate('450ms ease-in', style({ transform: 'translateY(-100%)' }))
        //     ]),
        //     transition(':leave', [
        //         animate('200ms ease-in', style({ transform: 'translateY(0%)' }))
        //     ])
        // ]),
        trigger('MomBody', [
            state('inactive', style({
                display:'block'
            })),
            state('active', style({
                display:'none'
            })),
            transition('inactive => active', animate('200ms ease-in')),
            transition('active => inactive', animate('200ms ease-in'))
        ]),
        trigger('MomHeader', [
            state('inactive', style({
                top:'100%'
            })),
            state('active', style({
                top:'65%'
            })),
            transition('inactive => active', animate('0.2ms ease-in')),
            transition('active => inactive', animate('450ms ease-in'))
        ]),
    ],
    providers: [UserService]
})
export class MeetingComponent implements OnInit {
    jwtToken: string;
    userList = [];
    _userService: UserService;
    _loginService: LoginService;
    messageSendTo: any;
    momTo: any;
    isMOMvisible = true;
    constructor(userService: UserService, loginService: LoginService) {
        this._userService = userService;
        this._loginService = loginService;
    }

    ngOnInit() {
        this.messageSendTo = 'Send Message to';
        this.momTo = 'set MOM Duty';
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

}

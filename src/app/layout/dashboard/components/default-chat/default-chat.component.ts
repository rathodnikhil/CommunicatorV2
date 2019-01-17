import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { Router } from '@angular/router';
import { LoginService } from '../../../../services/login.service';
import { AlertService } from '../../../../services/alert.service';
@Component({
    selector: 'app-default-chat',
    templateUrl: './default-chat.component.html',
    styleUrls: ['./default-chat.component.scss'],
    providers: [AlertService]
})
export class DefaultChatComponent implements OnInit {

    _loginService: LoginService;
    _userService: UserService;
    loggedInUserObj: any;

    constructor(userService: UserService, private router: Router, loginService: LoginService , public alertService: AlertService) {
        this._userService = userService;
        this._loginService = loginService;
    }
    ngOnInit() {
        this._userService.getLoggedInUserObj().subscribe(data => {
            if (data.errorFl === true || data.warningFl === true) {
                this.loggedInUserObj = {};
                return this.alertService.warning(data.message, 'Warning');
            } else {
                this.loggedInUserObj = data;
            }
        });
    }
}


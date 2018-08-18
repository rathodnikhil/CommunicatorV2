import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { Router } from '@angular/router';
import { LoginService } from '../../../../services/login.service';
@Component({
    selector: 'app-default-chat',
    templateUrl: './default-chat.component.html',
    styleUrls: ['./default-chat.component.scss']
})
export class DefaultChatComponent implements OnInit {

    _loginService: LoginService;
    _userService: UserService;
    loggedInUserObj: any;

    constructor(userService: UserService, private router: Router,loginService: LoginService) {
        this._userService = userService;
        this._loginService = loginService;
    }
    ngOnInit() {
        this._userService.getLoggedInUserObj().subscribe(data => {     
                this.loggedInUserObj = data;     
        });
    }

}
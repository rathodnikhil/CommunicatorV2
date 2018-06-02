import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit, OnDestroy {
    _loginService: LoginService;
    user = {};
    _userService: UserService;
    constructor(public router: Router, loginService: LoginService, userService: UserService) {
        this._loginService = loginService;
        this._userService = userService;
    }

    ngOnInit() {
        this.onLoggedin();
    }

    async onLoggedin() {
        // debugger;
        const userid = '123';
      //  debugger;
        const abc = await this._loginService
            .authUser(userid)
            .subscribe(
                data =>
                    (this.user = {
                        username: data['username']
                    })
            );
            const payload = { loggedInUserId: 2 };
        this._userService.setLoggedInUserDetails(payload);
        localStorage.setItem('isLoggedin', 'true');
    }
    ngOnDestroy(): void {
        //  this._loginService.dest
    }
}

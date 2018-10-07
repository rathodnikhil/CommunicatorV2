import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../router.animations';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';
import { Injectable } from '@angular/core';
import { AlertService } from '../services/alert.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()],
    providers: [AlertService]
})
export class LoginComponent implements OnInit, OnDestroy {
    _loginService: LoginService;
    _userService: UserService;
    user = {};
    jwtToken: any;
    authFlag: boolean;
    userNameFlag: boolean;
    passwordFlag: boolean;
    loginUiFlag: boolean;
    userName: any;
    password: any;
    email: any;
    forgetEmail: any;
    previousUrl: string;
    passwordMacthFlag: boolean;
    isGuest: boolean;
    forgetPasswordFlag: boolean;
    emailSuccessFlag: boolean;
    emailValidationFlag: boolean;
    emailFailFlag: boolean;
    Logintext = 'Login';
    loggedInUserObj: any;

    constructor(public router: Router, loginService: LoginService, userService: UserService, public alertService: AlertService) {
        this._loginService = loginService;
        this._userService = userService;
    }

    ngOnInit() {
        // // debugger;
        this.previousUrl = this._loginService.getPreviousUrl();
        this.isGuest = false;
        this.loginUiFlag = true;
    }

    ngOnDestroy(): void {
        //  this._loginService.dest
    }
    guestLogin() {
        this.Logintext = this.isGuest ? 'Continue' : 'Login';
    }
    onKey(event) {
        if (event.key === 'Enter') { this.login(); }
    }
    login() {
        if (this.userName === undefined || this.userName === '' || this.userName === null) {
            return this.alertService.error('Enter Username', 'Error');
        } else if (!this.isGuest && (this.password === undefined || this.password === '' || this.password === null)) {
            return this.alertService.error('Enter Password', 'Error');

        } else {
            if (this.isGuest) {
                localStorage.setItem('loggedInuserName', this.userName);
                const payload = { firstName: this.userName, isGuest: this.isGuest, email: this.email };
                this._userService.setLoggedInUserObj(payload).subscribe(res => {
                    if (res.firstName !== undefined) {
                        if (!this.previousUrl) {
                            this.router.navigate(['/meeting']);
                        } else {
                            this.router.navigateByUrl(this.previousUrl);
                        }
                    }
                });
            } else {
                const payload = { 'name': this.userName, 'password': this.password };
                let loginWarningFlag;
                this._userService.verifyUser(payload).subscribe(resp => {
                    const loggedinUser = resp.json();
                    loginWarningFlag = loggedinUser.warningFl;
                    if (loginWarningFlag === false) {
                        this._loginService.getAuthenticationToken(payload).subscribe(resp => {
                            this.jwtToken = this._loginService.getJwtToken();
                            if (this.jwtToken === undefined ||
                                this.jwtToken === '' || this.jwtToken === null || typeof this.jwtToken === 'undefined') {
                                return this.alertService.error('Authentication Token failed', 'Error');
                            } else {
                                const userNamePayload = { userName: loggedinUser.name };
                                this._userService.setLoggedInUserObj(userNamePayload).subscribe(res => {
                                    if (res.firstName !== undefined && res.firstName != null) {
                                        if (!this.previousUrl) {
                                            this.router.navigate(['/dashboard/default']);
                                        } else {
                                            this.router.navigateByUrl(this.previousUrl);
                                        }
                                    }
                                });
                            }
                        }, err => {

                        });
                    } else {
                        return this.alertService.warning('UserName and Password dose not match', 'Error');
                    }
                },
                    err => {
                    });
            }
        }
    }
    forgetPassword() {
        this.forgetPasswordFlag = true;
        this.loginUiFlag = false;
    }
    backToLogin() {
        this.forgetPasswordFlag = false;
        this.loginUiFlag = true;
    }

    sendEmailForgotPassword() {
        let payload = { email: this.forgetEmail };
        this._userService.forgotPasswordSendMail(payload).subscribe(res => {
            this.emailSuccessFlag = true;
            setTimeout(function () {
                this.emailSuccessFlag = false;
            }.bind(this), 5000);
        });
        this.forgetEmail = '';
    }
}

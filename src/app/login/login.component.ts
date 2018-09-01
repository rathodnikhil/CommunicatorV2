import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../router.animations';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';
import { Injectable } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
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
    Logintext = "Login";
    loggedInUserObj: any;

    constructor(public router: Router, loginService: LoginService, userService: UserService) {
        this._loginService = loginService;
        this._userService = userService;
    }

    ngOnInit() {
        // debugger;
        this.previousUrl = this._loginService.getPreviousUrl();
        this.isGuest = false;
        this.loginUiFlag = true;
    }

    ngOnDestroy(): void {
        //  this._loginService.dest
    }
    guestLogin() {
        this.Logintext = this.isGuest ? "Continue" : "Login";
    }
    onKey(event) {
        if (event.key == "Enter") { this.login(); }
    }
    login() {
        // debugger;
        if (this.userName === '' || this.userName === null) {
            this.userNameFlag = true;
            setTimeout(function () {
                this.userNameFlag = false;
            }.bind(this), 5000);
        } else if (!this.isGuest && (this.password === '' || this.password === null)) {
            this.passwordFlag = true;
            setTimeout(function () {
                this.passwordFlag = false;
            }.bind(this), 5000);
        } else {
            if (this.isGuest) {
                localStorage.setItem('loggedInuserName', this.userName);
                const payload = { firstName: this.userName, isGuest: this.isGuest,email:this.email }
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
                let payload = { 'name': 'admin', 'password': 'password' };
                let payload1 = { 'name': this.userName, 'password': this.password };
                let loginWarningFlag;
                this._userService.verifyUser(payload1).subscribe(resp => {
                    loginWarningFlag = resp.json().warningFl;
                    if (loginWarningFlag === false) {
                        this._loginService.getAuthenticationToken(payload).subscribe(resp => {
                            this.jwtToken = this._loginService.getJwtToken();
                            if (this.jwtToken === '' || this.jwtToken === null || typeof this.jwtToken === 'undefined') {
                                this.authFlag = true;
                                setTimeout(function () {
                                    this.authFlag = false;
                                }.bind(this), 5000);
                            } else {
                                let userNamePayload = { userName: this.userName };
                                this._userService.setLoggedInUserObj(userNamePayload).subscribe(res => {
                                    if (res.firstName !== undefined) {
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
                        this.passwordMacthFlag = true;
                        setTimeout(function () {
                            this.passwordMacthFlag = false;
                        }.bind(this), 5000);
                    }
                },
                    err => {
                    });
            }
        }
    }
    forgetPassword() {
        // alert();
        this.forgetPasswordFlag = true;
        this.loginUiFlag = false;
    }
    backToLogin() {
        this.forgetPasswordFlag = false;
        this.loginUiFlag = true;
    }

    sendEmailForgotPassword() {
        let payload = { email: this.forgetEmail }
        this._userService.forgotPasswordSendMail(payload).subscribe(res => {
            this.emailSuccessFlag = true;
            setTimeout(function () {
                this.emailSuccessFlag = false;
            }.bind(this), 5000);
        });
        this.forgetEmail = '';
    }
}

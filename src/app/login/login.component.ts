import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../router.animations';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';
import { Injectable } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { PasswordService } from '../services/password.service';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()],
    providers: [AlertService, PasswordService]
})
export class LoginComponent implements OnInit, OnDestroy {
    UserNameText = 'UserName';
    _loginService: LoginService;
    _userService: UserService;
    _passwordService: PasswordService;
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
    Logintext = 'Login';
    loggedInUserObj: any;
    @ViewChild('emailField') emailField: ElementRef;
    constructor(public router: Router, loginService: LoginService,
        userService: UserService, public alertService: AlertService, passwordService: PasswordService) {
        this._loginService = loginService;
        this._userService = userService;
        this._passwordService = passwordService;

    }
    ngOnInit() {
        this.previousUrl = this._loginService.getPreviousUrl();
        this.isGuest = false;
        this.loginUiFlag = true;
    }

    ngOnDestroy(): void {
        //  this._loginService.dest
    }
    guestLogin() {
        this.Logintext = this.isGuest ? 'Continue' : 'Login';
        this.UserNameText = this.isGuest ? 'Name' : 'UserName';
    }
    onKey(event) {
        if (event.key === 'Enter') { this.login(); }
    }
    login() {
        if (this.userName === undefined || this.userName
            === '' || this.userName === null) {
            return this.alertService.error('Enter Username', 'Error');
        } else if (!this.isGuest && (this.password === undefined || this.password === '' || this.password === null)) {
            return this.alertService.error('Enter Password', 'Error');

        } else {
            if (this.isGuest) {
                localStorage.setItem('loggedInuserName', this.userName);
                if (this.email === undefined || this.email === '' || this.email === null) {
                    return this.alertService.error('Enter email id', 'Error');
                } else {
                    const EMAIL_REGEXP =
                     /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

                    if (!EMAIL_REGEXP.test(this.email)) {
                        this.emailField.nativeElement.focus();
                        return this.alertService.warning('Please enter valid email', 'Warning');
                    } {
                        const currentDate = new Date();
                        const guestUserCode = 'guest' + (+currentDate);
                        const payload = { firstName:  this.userName.substring(0, 1).toUpperCase() + this.userName.substring(1) ,
                             isGuest: this.isGuest, email: this.email , userCode: guestUserCode};
                        this._userService.setLoggedInUserObj(payload).subscribe(res => {
                            if (res.firstName !== undefined) {
                                if (!this.previousUrl) {
                                    this.router.navigate(['/meeting']);
                                } else {
                                    if (this.previousUrl.indexOf('meeting') > 0) {
                                        this.router.navigateByUrl(this.previousUrl);
                                    } else {
                                        this.router.navigate(['/meeting']);
                                    }
                                }

                            }
                        });
                    }
                }
            } else {
                const payload = { 'name': this.userName, 'password': this._passwordService.encrypted(this.password) };
                let loginWarningFlag;
                this._userService.verifyUser(payload).subscribe(resp => {
                    const loggedinUser = resp.json();
                    loginWarningFlag = loggedinUser.warningFl;
                    if (loginWarningFlag === false) {
                        this._loginService.getAuthenticationToken(payload).subscribe(data => {
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
                        });
                    } else {
                        this.userName = '';
                        this.password = '';
                        return this.alertService.warning(loggedinUser.message, 'Incorrect Credential');
                    }
                }
                );
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
    onKeyUp(event) {
        if (event.key === 'Enter') { this.sendEmailForgotPassword(); }
    }
    sendEmailForgotPassword() {
        if (this.forgetEmail === '' || this.forgetEmail === null || typeof this.forgetEmail === 'undefined') {
            return this.alertService.error('Please enter email', 'Error');
        } else {
            const payload = { email: this.forgetEmail };
            this._userService.forgotPasswordSendMail(payload).subscribe(res => {
                if (res.json().errorFl === true || res.json().warningFl === true) {
                    return this.alertService.error('Email id is not registered, enter registered email id', 'Error');
                } else {
                    return this.alertService
                        .success('Password reset link has been successfully sent to your email account ,check your email.', 'Email Send');
                }
            });
            this.forgetEmail = '';
        }
    }
}

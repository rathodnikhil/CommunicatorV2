import { Component, OnInit, ViewChild, ElementRef, OnDestroy, AfterViewInit, Inject, Output, EventEmitter } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRoute, Params } from '@angular/router';
import { routerTransition } from '../router.animations';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';
import { AlertService } from '../services/alert.service';
import { PasswordService } from '../services/password.service';
import { DOCUMENT } from '@angular/common';
import { ErrorMessageConstants, TypeOfError } from '../shared/errorMessageConstants';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()],
    providers: [AlertService, PasswordService]
})
export class LoginComponent implements OnInit, AfterViewInit {
    UserNameText = 'UserName';
    _loginService: LoginService;
    _userService: UserService;
    _passwordService: PasswordService;
    user = {};
    jwtToken: any;
    authFlag: boolean;
    loginUiFlag: boolean;
    userName: any;
    password: any;
    email: any;
    forgetEmail: any;
    passwordMacthFlag: boolean;
    isGuest: boolean;
    forgetPasswordFlag = false;
    loginText = 'Log In';
    loggedInUserObj: any;
    meetingCode: string;
    isMeetingCodeInValid = false;
    loginMeetingCode: any;
    loginHeader = 'Log In';
    previousResponseValue: any;
    @ViewChild('usernameField') usernameField: ElementRef;
    @ViewChild('passwordField') passwordField: ElementRef;
    @ViewChild('forgotEmailField') forgotEmailField: ElementRef;
    @ViewChild('meetingCodeField') meetingCodeField: ElementRef;
    @Output() meetingCodeVal = new EventEmitter<String>();
    constructor(@Inject(DOCUMENT) private document, private elementRef: ElementRef,
        public router: Router, loginService: LoginService, private activatedRoute: ActivatedRoute,
        userService: UserService, public alertService: AlertService, passwordService: PasswordService) {
        this._loginService = loginService;
        this._userService = userService;
        this._passwordService = passwordService;

    }
    ngOnInit() {
        this.isGuest = false;
        this.loginUiFlag = true;
        this.activatedRoute.queryParams.subscribe((params: Params) => {
            this.meetingCode = params['meetingCode'];
        });
    }
    ngAfterViewInit(): void {
        (<any>window).customAlertService = this.alertService;
        const s = this.document.createElement('script');
        s.type = 'text/javascript';
        s.src = '../../../assets/scripts/checkPlugins.js';
        s.id = 'meetingTest';
        const __this = this; // to store the current instance to call
        // afterScriptAdded function on onload event of
        // script.
        s.onload = function () { __this.afterScriptAdded(); };
        this.elementRef.nativeElement.appendChild(s);
    }
    afterScriptAdded() {
        // this.document.getElementById('room-id').value = this.meetingCode === undefined ? 'Enter Meeting Id' : this.meetingCode;
        const params = {
            width: '350px',
            height: '420px',
        };
        if (typeof (window['functionFromExternalScript']) === 'function') {
            window['functionFromExternalScript'](params);
        }
    }

    guestLogin() {
        this.isGuest = true;
        this.changePlaceHolderText();
    }
    private changePlaceHolderText() {
        this.loginText = this.isGuest ? 'Continue' : 'Login';
        this.loginHeader = this.isGuest ? 'Join Meeting' : 'Log In';
        this.UserNameText = this.isGuest ? 'Name' : 'UserName';
        this.userName = '';
        this.password = '';
    }
    login() {
        if (this.forgetPasswordFlag === true) {
            this.sendEmailForgotPassword();
        } else {
            if (this.validatePulgins()) {
                return this.alertService.error(ErrorMessageConstants.ClosePopup, TypeOfError.Warning);
            } else {
                if (this.isGuest) {
                    return this.verifyGuest();
                } else {
                    return this.verifyRegisteredUser();
                }
            }
        }
    }
    validatePulgins() {
        return (this.document.getElementById('isRecordScreenPopupClosed').innerText === 'true'
            || this.document.getElementById('isScreenSharePopupClosed').innerText === 'true');
    }
    private verifyRegisteredUser() {
        if (this.userName === undefined || this.userName
            === '' || this.userName === null) {
            return this.validationMsgAndField(this.usernameField, ErrorMessageConstants.EnterUserName, TypeOfError.Warning);
        } else if (!this.isGuest && (this.password === undefined || this.password === '' || this.password === null)) {
            return this.validationMsgAndField(this.passwordField, ErrorMessageConstants.EnterPassword, TypeOfError.Warning);
        }
        const payload = { 'name': this.userName, 'password': this._passwordService.encrypted(this.password) };
        this.verifyUserApiCall(payload);
    }
    private verifyGuest() {
        const NAME_REGEXP = /^[a-zA-Z]+$/i;
        if (this.loginMeetingCode === null || typeof this.loginMeetingCode === 'undefined'
            || this.loginMeetingCode.trim() === '') {
            this.validationMsgAndField(this.meetingCodeField, ErrorMessageConstants.EnterMeetingId, TypeOfError.Warning);
        } else if (this.userName === null || typeof this.userName === 'undefined' || this.userName.trim() === '') {
            return this.validationMsgAndField(this.usernameField, ErrorMessageConstants.EnterFullName, TypeOfError.Warning);
        } else if (!NAME_REGEXP.test(this.userName)) {
            return this.validationMsgAndField(this.usernameField, ErrorMessageConstants.EnterAlphabatesOnly, TypeOfError.Warning);
        }
        this.meetingCode = this.loginMeetingCode;
        this.guestLoggedInActions();
    }
    private verifyUserApiCall(payload: { 'name': any; 'password': string; }) {
        this._userService.verifyUser(payload).subscribe(resp => {
            const loggedinUser = resp.json();
            if (loggedinUser.warningFl === false) {
                this.getAuthenticationJwtToken(payload, loggedinUser);
            } else {
                switch (resp.json()) {
                    case 'invalidUsername':
                        this.setValidationMsgAndForAuthentication(true, false, 'Please enter valid username');
                        break;
                    case 'invalidPassword':
                        this.setValidationMsgAndForAuthentication(false, true, 'Please enter valid password');
                        break;
                    case 'deactivate':
                        this.setValidationMsgAndForAuthentication(true, true,
                            'Your account has deactivated , please contact to your administrator');
                        break;
                }
            }
        });
    }

    private setValidationMsgAndForAuthentication(userNameFl: boolean, passwordFl: boolean, message: String) {
        if (userNameFl) {
            this.userName = '';
            this.validationMsgAndField(this.usernameField, message, 'Account Authentication');
        } if (passwordFl) {
            this.password = '';
            this.validationMsgAndField(this.passwordField, message, 'Account Authentication');
        }
    }
    private validationMsgAndField(elementFocus: ElementRef, validationMsg: String, flag: String) {
        elementFocus.nativeElement.focus();
        return this.alertService.warning(validationMsg, flag);
    }
    private getAuthenticationJwtToken(payload: { 'name': any; 'password': string; }, loggedinUser: any) {
        this._loginService.getAuthenticationToken(payload).subscribe(data => {
            this.jwtToken = this._loginService.getJwtToken();
            if (this.jwtToken === undefined ||
                this.jwtToken === '' || this.jwtToken === null || typeof this.jwtToken === 'undefined') {
                return this.alertService.error('Authentication Token failed', 'Error');
            } else {
                const userNamePayload = { userName: loggedinUser.name };
                this.registerUserLoggedInUserApiCall(userNamePayload);
            }
        });
    }

    private registerUserLoggedInUserApiCall(userNamePayload: { userName: any; }) {
        this._userService.setLoggedInUserObj(userNamePayload).subscribe(res => {
            if (res.firstName !== undefined && res.firstName != null) {
                this.registeruserMeetingurlActions();
            }
        });
    }

    private registeruserMeetingurlActions() {
        if (this.meetingCode) {
            this.router.navigate(['/meeting'], { queryParams: { meetingCode: this.meetingCode } });
        } else {
            this.router.navigate(['/dashboard/default']);
        }
    }

    private guestLoggedInActions() {
        const { firstNameUpperCase, guestUserCode } = this.setDefaultGuestValues();
        const payload = {
            firstName: firstNameUpperCase,
            isGuest: this.isGuest, userCode: guestUserCode, email: guestUserCode + '@guest.com', meetingCode: this.loginMeetingCode
        };
        this.meetingCodeVal.emit(this.meetingCode);
        this.loggedInUserApiCall(payload);
    }

    private setDefaultGuestValues() {
        localStorage.setItem('loggedInuserName', this.userName);
        const currentDate = new Date();
        const guestUserCode = 'guest' + (+currentDate);
        const firstNameUpperCase = this.makeFirstLetterInCapital(this.userName);
        return { firstNameUpperCase, guestUserCode };
    }

    private loggedInUserApiCall(payload: { firstName: String; isGuest: boolean; userCode: string; email: string; meetingCode: any; }) {
        this._userService.setLoggedInUserObj(payload).subscribe(res => {
            if (typeof (this.previousResponseValue) !== typeof (res)) {
                if (res === 'invalid' && !this.isMeetingCodeInValid) {
                    this.previousResponseValue = res;
                    return this.meetingCodeValidation();
                } else {
                    if (res.firstName !== undefined) {
                        this.meetingUrlRoutingAction();
                    }
                }
            }
        });
    }

    private meetingCodeValidation() {
        this.isMeetingCodeInValid = true;
        this.alertService.warning('Please enter valid Meeting Id', 'Invalid Data');
        return false;
    }

    private meetingUrlRoutingAction() {
        this.isMeetingCodeInValid = false;
        if (this.meetingCode !== '' || this.meetingCode != null) {
            this.router.navigate(['/meeting'], { queryParams: { meetingCode: this.meetingCode } });
        } else {
            this.router.navigate(['/dashboard/default']);
        }
    }
    private makeFirstLetterInCapital(userName): String {
        const senderNameArray = this.setAttendeeName(this.userName);
        let firstNameUpperCase = null;
        if (senderNameArray.length < 3) {
            firstNameUpperCase = senderNameArray[0].charAt(0).toUpperCase() + senderNameArray[0].slice(1);
        } else {
            firstNameUpperCase = senderNameArray[0].charAt(0).toUpperCase() + senderNameArray[0].slice(1) + ' '
                + senderNameArray[2].charAt(0).toUpperCase() + senderNameArray[2].slice(1);
        }
        return firstNameUpperCase;
    }

    forgetPassword() {
        this.loginText = 'Reset Password';
        this.loginHeader = 'Join Meeting';
        this.forgetPasswordFlag = true;
        this.loginUiFlag = false;
        this.clearInputBoxes();
    }
    backToLogin() {
        this.forgetPasswordFlag = false;
        this.loginUiFlag = true;
        this.isGuest = false;
        this.clearInputBoxes();
        this.changePlaceHolderText();
    }
    onKey(event) {
        this.isMeetingCodeInValid = false;
        if (event.key === 'Enter') { this.login(); }
    }
    onKeyUp(event) {
        if (event.key === 'Enter') { this.sendEmailForgotPassword(); }
    }
    sendEmailForgotPassword() {
        if (this.forgetEmail === '' || this.forgetEmail === null || typeof this.forgetEmail === 'undefined') {
            return this.validationMsgAndField(this.forgotEmailField, 'Please enter email', 'Error');
        } else {
            this.forgotEmailSuccessAction();
        }
    }
    private forgotEmailSuccessAction() {
        const payload = { email: this.forgetEmail };
        this.forgotPasswordEmailApiCall(payload);
        this.forgetEmail = '';
    }

    private forgotPasswordEmailApiCall(payload: { email: any; }) {
        this._userService.forgotPasswordSendMail(payload).subscribe(res => {
            if (res.json().errorFl === true || res.json().warningFl === true) {
                return this.validationMsgAndField(this.forgotEmailField, 'Email id is not registered, enter registered email id', 'Error');
            } else {
                return this.alertService
                    .success('Password reset link has successfully sent to your email account, check your email.', 'Email Send');
            }
        });
    }

    setAttendeeName(attendeeFullName) {
        attendeeFullName = attendeeFullName.split(' ');
        const attendeeFullNameArray = new Array();
        this.iterateAttendeeFullNameArray(attendeeFullName, attendeeFullNameArray);
        return attendeeFullNameArray;
    }

    private iterateAttendeeFullNameArray(attendeeFullName: any, attendeeFullNameArray: any[]) {
        for (let i = 0; i < attendeeFullName.length; i++) {
            attendeeFullNameArray.push(attendeeFullName[i]);
            if (i !== attendeeFullName.length - 1) {
                attendeeFullNameArray.push(' ');
            }
        }
    }
    private clearInputBoxes() {
        this.userName = '';
        this.password = '';
        this.loginMeetingCode = '';
        this.forgetEmail = '';
    }
}

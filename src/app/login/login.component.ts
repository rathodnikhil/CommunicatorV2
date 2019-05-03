import { Component, OnInit, ViewChild, ElementRef, OnDestroy, AfterViewInit, Inject , Output , EventEmitter} from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRoute, Params } from '@angular/router';
import { routerTransition } from '../router.animations';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';
import { Injectable } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { PasswordService } from '../services/password.service';
import { DOCUMENT } from '@angular/common';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()],
    providers: [AlertService, PasswordService ]
})
export class LoginComponent implements OnInit, OnDestroy, AfterViewInit {
    UserNameText = 'UserName';
    passwordText = 'Password';
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
    forgetPasswordFlag = false;
    Logintext = 'Log In';
    loggedInUserObj: any;
    meetingCode: string;
    isMeetingCodeInValid = false;
    loginHeader = 'Log In';
    @Output() meetingCodeVal = new EventEmitter<String>();
    constructor(@Inject(DOCUMENT) private document, private elementRef: ElementRef,
        public router: Router, loginService: LoginService, private activatedRoute: ActivatedRoute,
        userService: UserService, public alertService: AlertService, passwordService: PasswordService) {
        this._loginService = loginService;
        this._userService = userService;
        this._passwordService = passwordService;

    }
    ngOnInit() {
        this.previousUrl = this._loginService.getPreviousUrl();
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

    ngOnDestroy(): void {
        //  this._loginService.dest
    }
    guestLogin() {
        this.isGuest = true;
        this.changePlaceHolderText();
    }
    private changePlaceHolderText() {
        this.Logintext = this.isGuest ? 'Continue' : 'Login';
        this.loginHeader = this.isGuest ? 'Join Meeting' : 'Log In';
        this.UserNameText = this.isGuest ? 'Name' : 'UserName';
        this.passwordText = this.isGuest ? 'Meeting ID' : 'Password';
    }
    login() {
      if (this.forgetPasswordFlag === true) {
         this.sendEmailForgotPassword();
      } else {
        if (this.document.getElementById('isRecordScreenPopupClosed').innerText === 'true'
            || this.document.getElementById('isScreenSharePopupClosed').innerText === 'true') {
            return this.alertService.error('Please close popup to continue', 'Error');
        } else {
            if (this.isGuest) {
                if (this.document.getElementById('isRecordScreenPopupClosed').innerText === 'true'
                || this.document.getElementById('isScreenSharePopupClosed').innerText === 'true') {
                return this.alertService.error('Please close popup to continue', 'Error');
              }
              if (this.password === null || typeof this.password === 'undefined' || this.password.trim() === '') {
                return this.alertService.error('Enter meeting code', 'Error');
              }
              if (this.userName === null || typeof this.userName === 'undefined' || this.userName.trim() === '') {
                return this.alertService.error('Enter full name', 'Error');
              }
              localStorage.setItem('loggedInuserName', this.userName);
              const currentDate = new Date();
              const guestUserCode = 'guest' + (+currentDate);
              const firstNameUpperCase = this.makeFirstLetterInCapital(this.userName);
              const payload = {
                firstName: firstNameUpperCase,
                isGuest: this.isGuest, userCode: guestUserCode, email: guestUserCode + '@guest.com', meetingCode: this.password
              };
              this.meetingCodeVal.emit(this.meetingCode);
              this._userService.setLoggedInUserObj(payload).subscribe(res => {
                if (res === 'invalid' && !this.isMeetingCodeInValid) {
                  this.isMeetingCodeInValid = true;
                  this.alertService.warning('Please enter valid Meeting Id', 'Invalid Data');
                  return false;
                } else {
                  if (res.firstName !== undefined) {
                    if (!this.previousUrl) {
                      // this.router.navigate(['meeting' + this.meetingCode]);
                      this.router.navigate(['/meeting'], { queryParams: { meetingCode: this.meetingCode } });
                    } else {
                      if (this.previousUrl.indexOf('meeting') > 0) {
                        this.router.navigateByUrl(this.previousUrl);
                      } else {
                        this.router.navigate(['/meeting'], { queryParams: { meetingCode: this.meetingCode } });
                      }
                    }
                  }
                }
              });
            } else {
                if (this.userName === undefined || this.userName
                    === '' || this.userName === null) {
                    return this.alertService.error('Enter Username', 'Error');
                } else if (!this.isGuest && (this.password === undefined || this.password === '' || this.password === null)) {
                    return this.alertService.error('Enter Password', 'Error');
                }
                const payload = { 'name': this.userName, 'password': this._passwordService.encrypted(this.password) };
                this._userService.verifyUser(payload).subscribe(resp => {
                    const loggedinUser = resp.json();
                    if (loggedinUser.warningFl === false || loggedinUser.errorFl === false) {
                        this._loginService.getAuthenticationToken(payload).subscribe(data => {
                            this.jwtToken = this._loginService.getJwtToken();
                            if (this.jwtToken === undefined ||
                                this.jwtToken === '' || this.jwtToken === null || typeof this.jwtToken === 'undefined') {
                                return this.alertService.error('Authentication Token failed', 'Error');
                            } else {
                                const userNamePayload = { userName: loggedinUser.name };
                                this._userService.setLoggedInUserObj(userNamePayload).subscribe(res => {
                                    if (res.firstName !== undefined && res.firstName != null) {
                                        if (this.meetingCode) {
                                            this.router.navigate(['/meeting'], { queryParams: { meetingCode: this.meetingCode } });
                                        }
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
                      if (loggedinUser.warningFl === true) {
                        this.userName = '';
                        return this.alertService.warning('Username is invalid', 'Account Authentication');
                      }
                      if (loggedinUser.warningFl === true) {
                        this.password = '';
                        return this.alertService.warning('Password is invalid', 'Account Authentication');
                      }
                      if (resp.json() === 'deactivate') {
                        this.userName = '';
                        this.password = '';
                        return this.alertService.warning('Your account has deactivated , please contact to your administrator',
                         'Account Authentication');
                      }
                    }
                }
                );
            }
        }
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
        this.Logintext = 'Reset Password';
        this.loginHeader = 'Join Meeting';
        this.forgetPasswordFlag = true;
        this.loginUiFlag = false;
    }
    backToLogin() {
        this.forgetPasswordFlag = false;
        this.loginUiFlag = true;
        this.isGuest = false;
        this.changePlaceHolderText();
    }
    onKey(event) {
            if (event.key === 'Enter') { this.login(); }
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
                        .success('Password reset link has successfully sent to your email account, check your email.', 'Email Send');
                }
            });
            this.forgetEmail = '';
        }
    }
      setAttendeeName(attendeeFullName) {
        attendeeFullName = attendeeFullName.split(' ');
        const attendeeFullNameArray = new Array();
        for (let i = 0; i < attendeeFullName.length; i++) {
          attendeeFullNameArray.push(attendeeFullName[i]);
          if (i !== attendeeFullName.length - 1) {
            attendeeFullNameArray.push(' ');
          }
        }
        return attendeeFullNameArray;
      }
}

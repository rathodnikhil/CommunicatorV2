import { Component, OnInit , ViewChild , ElementRef } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PasswordService } from '../../services/password.service';
import { AlertService } from '../../services/alert.service';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  providers: [PasswordService , AlertService]
})
export class ResetPasswordComponent implements OnInit {
  _passwordService: PasswordService;
  emailSuccessFlag: boolean;
  emailValidationFlag: boolean;
  passwordFlag: boolean;
  passwordMacthFlag: boolean;
  resetSuccessFlag: boolean;
  confirmPasswordFlag: boolean;
  _userService: UserService;
  password: any;
  token: any;
  confirmPassword: any;
  @ViewChild('passwordField') passwordField: ElementRef;
  @ViewChild('confirmPasswordField') confirmPasswordField: ElementRef;
  constructor(public router: Router, userService: UserService, private activatedRoute: ActivatedRoute,
    passwordService: PasswordService, public alertService: AlertService) {
    this._userService = userService;
    this._passwordService = passwordService;
  }

  ngOnInit() {
    this.activateroute();
  }
  private activateroute() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.token = params['token'];
      if (!this.token) {
        //  this.alertService.warning("Invalid url","Invali Url");
        alert('Invalid Url');
      }
    });
  }

  resetPassword() {
    if ( this.password === null || typeof this.password === 'undefined' || this.password.trim() === '') {
        return this.validationMsgAndField(this.passwordField , 'Please enter password', 'Warning');
    } else if (this.confirmPassword === '' || this.confirmPassword === null || typeof this.confirmPassword === 'undefined') {
      return this.validationMsgAndField(this.confirmPasswordField , 'Please enter confirm password', 'Warning');
    } else if (this.confirmPassword !== this.password) {
      return this.passwordValidation();
    } else {
      const payload = { passwordAuthToken: this.token, newPassword: this._passwordService.encrypted(this.password)};
      this.resetPasswordApiCall(payload);
    }
  }
  private validationMsgAndField(elementFocus: ElementRef , validationMsg: String , flag: String) {
    elementFocus.nativeElement.focus();
    return this.alertService.warning(validationMsg , flag);
}
  private passwordValidation() {
    this.password = '';
    this.confirmPassword = '';
    return this.validationMsgAndField(this.passwordField , 'Password and  confirm password does not match', 'Warning');
  }

  private resetPasswordApiCall(payload: { passwordAuthToken: any; newPassword: string; }) {
    this._userService.resetpassword(payload).subscribe(res => {
      const data = res.json();
      if (data.warningFl || data.errorFl) {
        return this.alertService.warning(data.message, 'Warning');
      }  else {
        this.resetPasswordSuccessAction();
        // window.location.reload();
      }
    });
  }

  private resetPasswordSuccessAction() {
    this.password = '';
    this.confirmPassword = '';
    this.alertService.success('Password reset successfully', 'Reset Success');
    this.router.navigate(['/login']);
  }
}

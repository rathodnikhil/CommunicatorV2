import { Component, OnInit , ViewChild , ElementRef, AfterViewInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PasswordService } from '../../services/password.service';
import { AlertService } from '../../services/alert.service';
import { ErrorMessageConstants , TypeOfError, SuccessMessage , StaticLabels} from 'app/shared/errorMessageConstants';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  providers: [PasswordService , AlertService]
})
export class ResetPasswordComponent implements OnInit, AfterViewInit {
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

  ngAfterViewInit(): void {
    this.passwordField.nativeElement.focus();
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
    if ( this.password === null || typeof this.password === StaticLabels.Undefined || this.password.trim() === '') {
        return this.validationMsgAndField(this.passwordField , ErrorMessageConstants.EnterPassword, TypeOfError.Warning);
    } else if (this.confirmPassword === '' || this.confirmPassword === null || typeof this.confirmPassword === StaticLabels.Undefined) {
      return this.validationMsgAndField(this.confirmPasswordField , ErrorMessageConstants.EnterConfirmPassword, TypeOfError.Warning);
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
    return this.validationMsgAndField(this.passwordField , ErrorMessageConstants.PasswordMatch, TypeOfError.Warning);
  }

  private resetPasswordApiCall(payload: { passwordAuthToken: any; newPassword: string; }) {
    this._userService.resetpassword(payload).subscribe(res => {
      const data = res.json();
      if (data.warningFl || data.errorFl) {
        return this.alertService.warning(data.message, TypeOfError.Warning);
      }  else {
        this.resetPasswordSuccessAction();
        // window.location.reload();
      }
    });
  }

  private resetPasswordSuccessAction() {
    this.password = '';
    this.confirmPassword = '';
    this.alertService.success(SuccessMessage.RsetPassword, SuccessMessage.SuccessHeader);
    this.router.navigate(['/login']);
  }
}
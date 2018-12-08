import { Component, OnInit } from '@angular/core';
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
  constructor(public router: Router, userService: UserService, private activatedRoute: ActivatedRoute , public alertService: AlertService,passwordService :PasswordService) {
    this._userService = userService;
    this._passwordService = passwordService;
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.token = params['token'];
      if (!this.token)
        alert("inavlid Url");
      //'ex-lf-er-oc-1534256481089'
      // console.log(this.meetingCode);
    });
  }
  resetPassword() {
    alert(this.token);
    const payload = { token: this.token, password: this._passwordService.encrypted(this.password) }
    if ( this.password === null || typeof this.password === 'undefined' ||this.password.trim() === '') {
        return this.alertService.warning("Enter password","Warning");
    } else if (this.confirmPassword === '' || this.confirmPassword === null || typeof this.confirmPassword === 'undefined') {
      return this.alertService.warning("Enter confirm password","Warning");
    } else if (this.confirmPassword != this.password) {
      return this.alertService.warning("Password and  confirm password does not match","Warning");
    } else {
      this._userService.resetpassword(payload).subscribe(res => {
        const data = res.json();
        if (data.warningFl || data.errorFl) {
          return this.alertService.warning(data.message,"Warning");
        }
        else {
          this.password = '';
          this.confirmPassword = '';
          this.router.navigate(['/login']);
          return this.alertService.success("Password reset successfully","Reset Success");
        }
      });
    }
  }

}

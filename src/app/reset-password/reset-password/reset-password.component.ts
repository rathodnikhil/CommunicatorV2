import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PasswordService } from '../../services/password.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  providers: [PasswordService]
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
  constructor(public router: Router, userService: UserService, private activatedRoute: ActivatedRoute , passwordService :PasswordService) {
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
    const payload = { token: this.token, password: this._passwordService.encrypted(this.password) }
    if (this.password === '' || this.password === null || typeof this.password === 'undefined') {
      this.passwordFlag = true;
      setTimeout(function () {
        this.passwordFlag = false;
      }.bind(this), 5000);
    } else if (this.confirmPassword === '' || this.confirmPassword === null || typeof this.confirmPassword === 'undefined') {
      this.confirmPasswordFlag = true;
      setTimeout(function () {
        this.confirmPasswordFlag = false;
      }.bind(this), 5000);
    } else if (this.confirmPassword != this.password) {
      this.passwordMacthFlag = true;
      setTimeout(function () {
        this.passwordMacthFlag = false;
      }.bind(this), 5000);
    } else {
      this._userService.resetpassword(payload).subscribe(res => {

        const data = res.json();
        if (data.warningFl || data.errorFl) {
          alert(data.message);
        }
        else {
          this.resetSuccessFlag = true;
          this.router.navigate(['/login']);
        }
        this.password = '';
        this.confirmPassword = '';
      });
    }
  }

}

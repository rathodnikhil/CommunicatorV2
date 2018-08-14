import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  emailSuccessFlag : boolean;
    emailValidationFlag : boolean;
    passwordFlag: boolean;
    passwordMacthFlag: boolean;
    resetSuccessFlag: boolean;
    confirmPasswordFlag: boolean;
    _userService : UserService;
    password: any;
    confirmPassword: any;
  constructor(userService: UserService) { 
    this._userService = userService;
  }

  ngOnInit() {
  }
  resetPassword() {
       const payload = { token: 'ex-lf-er-oc-1534256481089' ,password: this.password  }
       if(this.password === '' || this.password === null || typeof this.password === 'undefined') {
        this.passwordFlag = true;
        setTimeout(function () {
            this.passwordFlag = false;
        }.bind(this), 5000);
       }else if(this.confirmPassword === '' || this.confirmPassword === null || typeof this.confirmPassword === 'undefined') {
        this.confirmPasswordFlag = true;
        setTimeout(function () {
            this.confirmPasswordFlag = false;
        }.bind(this), 5000);
       }else if(this.confirmPassword != this.password) {
        this.passwordMacthFlag = true;
        setTimeout(function () {
            this.passwordMacthFlag = false;
        }.bind(this), 5000);
       }else{
      this._userService.resetpassword(payload).subscribe(res => {
        this.resetSuccessFlag = true;
        setTimeout(function () {
            this.resetSuccessFlag = false;
        }.bind(this), 5000);
        this.password = '';
        this.confirmPassword = '';
    });  
  }
}

}

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
    _userService : UserService;
    password: any;
  constructor(userService: UserService) { 
    this._userService = userService;
  }

  ngOnInit() {
  }
  resetPassword() {
       const payload = { token: 'ex-lf-er-oc-1534161572483' ,password: this.password  }
       alert(payload);
      this._userService.resetpassword(payload).subscribe(res => {
  
    });
     
}
}

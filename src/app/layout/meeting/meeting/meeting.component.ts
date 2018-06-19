import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss'],
  providers: [UserService]
})
export class MeetingComponent implements OnInit {
    jwtToken: string;
    userList = [];
    _userService: UserService;
    _loginService: LoginService;
    messageSendTo: any;
    momTo: any;
  constructor(userService: UserService , loginService: LoginService) {
      this._userService = userService;
      this._loginService = loginService;
  }

  ngOnInit() {
      this.messageSendTo = 'Send Message to';
      this.momTo = 'set MOM Duty';
    const payload = {loggedInUserId: 2};

    // to get list of member
    this.jwtToken = this._loginService.getJwtToken();
    this._userService.getUserList(payload).subscribe(data => {
        this.userList = data.json();
    });
 }

 // to set selected send message to
 changeMessageTo(member) {
    this.messageSendTo = member.name + ' ' + member.lastName;
}

// to set selected mom to
changeMomTo(member) {
    this.momTo = member.name + ' ' + member.lastName;
}

}

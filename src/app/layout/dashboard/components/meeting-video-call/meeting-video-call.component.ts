import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-meeting-video-call',
  templateUrl: './meeting-video-call.component.html',
  styleUrls: ['./meeting-video-call.component.scss'],
  providers: [UserService]
})
export class MeetingVideoCallComponent implements OnInit {
    userList = [];
    _userService: UserService;
    messageSendTo: any;
    momTo: any;
  constructor(userService: UserService) {
      this._userService = userService;
  }

  ngOnInit() {
      this.messageSendTo = 'Send Message to';
      this.momTo = 'set MOM Duty';
    const payload = {loggedInUserId: 2};

    //to get list of member
    this._userService.getUserList(payload).subscribe(data => {
        this.userList = data.json();
    });
 }

 //to set selected send message to
 changeMessageTo(member) {
    this.messageSendTo = member.name + ' ' + member.lastName;
}

//to set selected mom to
changeMomTo(member) {
    this.momTo = member.name + ' ' + member.lastName;
}
}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { MeetingService } from '../../../../services/meeting-service';

@Component({
  selector: 'app-meeting-video-call',
  templateUrl: './meeting-video-call.component.html',
  styleUrls: ['./meeting-video-call.component.scss'],
})
export class MeetingVideoCallComponent implements OnInit {
    userList = [];
    _userService: UserService;
    _meetingService: MeetingService;
    messageSendTo: any;
    momTo: any;
  constructor(userService: UserService , meetingService: MeetingService) {
      this._userService = userService;
      this._meetingService = meetingService;
  }

  ngOnInit() {
      this.messageSendTo = 'Send Message to';
      this.momTo = 'set MOM Duty';
    const payload = {meetingId: 'MGDJG43223423'};

    //to get list of member
    this._meetingService.getMeetingAttendee(payload).subscribe(data => {
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

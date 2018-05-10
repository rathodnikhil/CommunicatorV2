import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { MeetingServiceService } from '../../../../services/meeting-service.service';
@Component({
  selector: 'app-default-meeting',
  templateUrl: './default-meeting.component.html',
  styleUrls: ['./default-meeting.component.scss'],
  providers: [MeetingServiceService]
})
export class DefaultMeetingComponent implements OnInit {
   @Output() CurrentRoute = new EventEmitter();
   currentDate: any;
   loggedInUser: any;
   _userService: UserService;
   futureMeetingList = [];
   recentMeeting: any;
   _meetingService: MeetingServiceService;
   constructor(userService: UserService, meetingService: MeetingServiceService) {
       this._userService = userService;
       this._meetingService = meetingService;
    }
  ngOnInit() {
      //loggedInUser Details webservice call
      this.loggedInUser = {};
    const payload = {loggedInUserId: 1};
    this._userService.getLoggedInUSerDetails(payload).subscribe(data => {
        this.loggedInUser = data.json();
    });

    //future meeting list web service call
    this.futureMeetingList = [];
    this._meetingService.getFutureMeetingByUser(payload).subscribe(data => {
        this.futureMeetingList = data.json();
    });

    //recent meeting webservice call
    this.recentMeeting = {};
    this._meetingService.getRecentMeetingByUser(payload).subscribe(data => {
        this.recentMeeting = data.json();
    });

    //current date and time
   this.currentDate = Date.now();
  }
  switchRoute() {
    this.CurrentRoute.emit(1);
  }
  meetingByDate() {
      alert('select date');
  }
}

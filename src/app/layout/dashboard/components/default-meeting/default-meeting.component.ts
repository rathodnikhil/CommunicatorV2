import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
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
   selectDateFlag: boolean;
   constructor(userService: UserService, meetingService: MeetingServiceService) {
       this._userService = userService;
       this._meetingService = meetingService;
    }
  ngOnInit() {
    this.selectDateFlag =  false;
      //loggedInUser Details webservice call
      this.loggedInUser = {
        'id': 2,
        'email': 'b@gmail.com',
        'password': '1235',
        'name': 'sunita',
        'lastName': 'kolhapure',
        'active': 1,
        'teamId': {
            'prime': null,
            'errorFl': false,
            'warningFl': false,
            'message': null,
            'teamId': 1,
            'teamName': 'cfs_pune',
            'status': {
                'statusId': 1,
                'status': 'Active'
            }
        },
        'profileImgPath': null
    };
    const payload = {loggedInUserId: 1};
    this._userService.getLoggedInUSerDetails(payload).subscribe(data => {
        this.loggedInUser = data.json();
    });

    this.getAllFutureMeetingList();

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
  this.selectDateFlag = true;
  }
  serachByDate(fromDate , toDate) {
    alert(fromDate);
  }
  getAllFutureMeetingList() {
  //future meeting list web service call
  const payload = {loggedInUserId: 1};
  this.futureMeetingList = [];
  this._meetingService.getFutureMeetingByUser(payload).subscribe(data => {
      this.futureMeetingList = data.json();
  });
  }
}

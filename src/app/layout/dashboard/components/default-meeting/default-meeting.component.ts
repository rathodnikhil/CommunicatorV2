import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { MeetingServiceService } from '../../../../services/meeting-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-default-meeting',
  templateUrl: './default-meeting.component.html',
  styleUrls: ['./default-meeting.component.scss'],
  providers: [MeetingServiceService]
})
export class DefaultMeetingComponent implements OnInit, AfterViewInit {


   @Output() CurrentRoute = new EventEmitter();
   currentDate: any;
   loggedInUser: any;
   _userService: UserService;
   futureMeetingList = [];
   recentMeeting: any;
   _meetingService: MeetingServiceService;
   selectDateFlag: boolean;
   @ViewChild('chatPanel') chatPanel: ElementRef;
   @ViewChild('chatBody') chatBody: ElementRef;
   constructor(userService: UserService, meetingService: MeetingServiceService, private router: Router) {
       this._userService = userService;
       this._meetingService = meetingService;
    }
  ngOnInit() {
    this.selectDateFlag =  false;
      // loggedInUser Details webservice call
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
    this._userService.getLoggedInUSerDetails().subscribe(data => {
        if (Object.keys(data).length === 0) {
            this.router.navigate(['/login']);
        } else {
            this.loggedInUser = data;
        }
    });

    this.getAllFutureMeetingList();

    // recent meeting webservice call
    this.recentMeeting = {};
    this._meetingService.getRecentMeetingByUser(payload).subscribe(data => {
        const resp = data.json();
        if (resp.errorFl || resp.warningFl) {
            this.recentMeeting  = {};
        } else {
            this.recentMeeting  = resp;
        }
        // this.recentMeeting = data.json();
    });

    // current date and time
   this.currentDate = Date.now();
  }

  ngAfterViewInit(): void {
    // debugger;
     this.chatBody.nativeElement.style.height = (this.chatPanel.nativeElement.offsetHeight
        - (this.chatBody.nativeElement.offsetTop + 30)) + 'px';
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
  // future meeting list web service call
  const payload = {loggedInUserId: 1};
  this.futureMeetingList = [];
  this._meetingService.getFutureMeetingByUser(payload).subscribe(data => {
    //  debugger;
      const resp = data.json();
      if (resp.errorFl || resp.warningFl) {
          this.futureMeetingList = [];
      } else {
          this.futureMeetingList = resp;
      }
  });
  }
}

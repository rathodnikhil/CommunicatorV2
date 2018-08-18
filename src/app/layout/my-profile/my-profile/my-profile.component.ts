import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { MeetingService } from '../../../services/meeting-service';
import { GroupService } from '../../../services/group.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-my-profile',
    templateUrl: './my-profile.component.html',
    styleUrls: ['./my-profile.component.scss'],
    providers: [UserService, MeetingService, GroupService]
})
export class MyProfileComponent implements OnInit {
    loggedInUserObj: any;
    _userService: UserService;
    _meetingservice: MeetingService;
    _groupService: GroupService;
    totalMeetingCount: any;
    totalGroupCount: any;
    constructor(userService: UserService, meetingService: MeetingService, groupService: GroupService, private router: Router) {
        this._userService = userService;
        this._meetingservice = meetingService;
        this._groupService = groupService;
    }
    ngOnInit() {
       
        // get loggedin user
        this._userService.getLoggedInUserObj().subscribe(data => {
            this.loggedInUserObj = data;
        });

        // webservice to get total meeting count
        const payload = { userCode: this.loggedInUserObj.userCode };
        this.totalMeetingCount = {};
        this._meetingservice.getTotalMeetingCountByLoggedInUserId(payload).subscribe(data => {
            this.totalMeetingCount = data.json();
        });

        this.totalGroupCount = {};
        this._groupService.getTotalGroupByLoggedInUserId(payload).subscribe(data => {
            this.totalGroupCount = data.json();
            alert(this.totalGroupCount);
        });
    }

}

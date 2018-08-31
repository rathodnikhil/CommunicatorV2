import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { MeetingService } from '../../../services/meeting-service';
import { GroupService } from '../../../services/group.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-my-profile',
    templateUrl: './my-profile.component.html',
    styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
    _userService: UserService;
    _meetingservice: MeetingService;
    _groupService: GroupService;
    totalMeetingCount: any;
    profileOtherDetails: any;
    loggedInUserObj: any;
    firstName: any;
    lastName: any;
    email: any;
    constructor(userService: UserService, meetingService: MeetingService, groupService: GroupService) {
        this._userService = userService;
        this._meetingservice = meetingService;
        this._groupService = groupService;
    }
    ngOnInit() {
       this.loggedInUserObj = {};
        this._userService.getLoggedInUserObj().subscribe(data => {
            this.loggedInUserObj = data;
             // webservice to get total meeting count
        const payload = { userCode: this.loggedInUserObj.userCode };
        this.profileOtherDetails = {};
        this._groupService.profileOtherDetails(payload).subscribe(data => {
            this.profileOtherDetails = data;
        });
        });
    }
    updateProfile(){
        const payload = {
            firstName : this.firstName,
            lastName : this.lastName,
            email : this.email,
            userCode : this.loggedInUserObj.userCode
        }
        this._userService.updateUserDetails(payload).subscribe(data => {
            this.profileOtherDetails = data;
        });
    }
}

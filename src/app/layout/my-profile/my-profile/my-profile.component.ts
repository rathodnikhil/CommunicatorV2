import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { MeetingService } from '../../../services/meeting-service';
import { GroupService } from '../../../services/group.service';
import { Router } from '@angular/router';
import { AlertPromise } from 'selenium-webdriver';
import { AlertService } from '../../../services/alert.service';

@Component({
    selector: 'app-my-profile',
    templateUrl: './my-profile.component.html',
    styleUrls: ['./my-profile.component.scss'],
    providers: [AlertService]
})
export class MyProfileComponent implements OnInit {
    _userService: UserService;
    _meetingservice: MeetingService;
    _groupService: GroupService;
    profileOtherDetails: any;
    loggedInUserObj: any;
    firstName: any;
    lastName: any;
    email: any;
    constructor(userService: UserService, meetingService: MeetingService, groupService: GroupService,public alertService: AlertService) {
        this._userService = userService;
        this._meetingservice = meetingService;
        this._groupService = groupService;
    }
    ngOnInit() {
        this.loggedInUserObj = {};
        this._userService.getLoggedInUserObj().subscribe(data => {
            if (data.firstName !== undefined && !data.isGuest) {
                this.loggedInUserObj = data;
                // webservice to get total meeting count
                const payload = { userCode: this.loggedInUserObj.userCode };
                this.profileOtherDetails = {};
                this._groupService.profileOtherDetails(payload).subscribe(data => {
                    if(data.errorFl === true || data.warningFl === true){
                        this.profileOtherDetails = {};
                        return this.alertService.warning(data.message, "Warning"); 
                    }else{
                    this.profileOtherDetails = data;
                    }
                });
            }
        });
    }
    updateProfile() {
        const payload = {
            firstName: this.loggedInUserObj.firstName,
            lastName: this.loggedInUserObj.lastName,
            email: this.loggedInUserObj.email,
            userCode: this.loggedInUserObj.userCode
        }
        this._userService.updateUserDetails(payload).subscribe(data => {
            if(data.errorFl === true || data.warningFl === true){
                return this.alertService.warning(data.message, "Warning"); 
            }else{
            return this.alertService.success("User profile has been updated successfully", "Success"); 
            }
        });
    }
}

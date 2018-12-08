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
    currentFirstName : any;
    currentLastName : any;
    currentEmail : any;
    constructor( private router: Router,userService: UserService, meetingService: MeetingService, groupService: GroupService,public alertService: AlertService) {
        this._userService = userService;
        this._meetingservice = meetingService;
        this._groupService = groupService;
    }
    ngOnInit() {
        this.loggedInUserObj = {};
        this._userService.getLoggedInUserObj().subscribe(data => {
            if (data.firstName !== undefined && !data.isGuest) {
                this.loggedInUserObj = data;
                this.currentFirstName = data.firstName;
                this.currentLastName = data.lastName;
                this.currentEmail = data.email;
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
        if (this.loggedInUserObj.firstName === null || typeof this.loggedInUserObj.firstName === "undefined" || this.loggedInUserObj.firstName.trim() === "" ) {
            return this.alertService.warning('Please enter first name', "Warning");
        } else if ( this.loggedInUserObj.lastName === null || typeof this.loggedInUserObj.lastName === "undefined" || this.loggedInUserObj.lastName.trim() === "") {
            return this.alertService.warning('Please enter last name', "Warning");
        }else if ( this.loggedInUserObj.email === null || typeof this.loggedInUserObj.email === "undefined" || this.loggedInUserObj.email.trim() === "") {
            return this.alertService.warning('Please enter email', "Warning");
        }else{
            const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
            if (!EMAIL_REGEXP.test(this.loggedInUserObj.email)) {
              return this.alertService.warning("Please enter valid email","Warning");
            }
        const payload = {
            firstName: this.loggedInUserObj.firstName,
            lastName: this.loggedInUserObj.lastName,
            email: this.loggedInUserObj.email,
            userCode: this.loggedInUserObj.userCode,
           // name: this.loggedInUserObj.name,
           status: {statusId : 1}
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
    cancelUpdate(){
        this.loggedInUserObj.firstName = this.currentFirstName;
        this.loggedInUserObj.lastName =  this.currentLastName
        this.loggedInUserObj.email = this.currentEmail;
        this.router.navigate(['/dashboard']);
    }
}

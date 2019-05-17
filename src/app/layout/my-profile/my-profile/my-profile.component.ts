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
    currentFirstName: any;
    currentLastName: any;
    currentEmail: any;
    currentProfileImg: any;
    onLoadProfileImg: any;
    selectedProfilePictureName: any;
    fileSize: number;
    constructor( private router: Router, userService: UserService, meetingService: MeetingService,
        groupService: GroupService, public alertService: AlertService) {
        this._userService = userService;
        this._meetingservice = meetingService;
        this._groupService = groupService;
    }
    ngOnInit() {
        this.loggedInUserObj = {};
        this._userService.getLoggedInUserObj().subscribe(data => {
            if (data.firstName !== undefined && !data.isGuest) {
                this.setCurrentValueDetails(data);
                this.profileOtherDetails = {};
                this.profileDetailsApiCall();
            }
        });
    }
    private profileDetailsApiCall() {
        this._groupService.profileOtherDetails().subscribe(profileData => {
            if (profileData.errorFl === true || profileData.warningFl === true) {
                this.profileOtherDetails = {};
                return this.alertService.warning(profileData.message, 'Warning');
            } else {
                this.profileOtherDetails = profileData;
            }
        });
    }

    private setCurrentValueDetails(data: any) {
        this.loggedInUserObj = data;
        this.currentFirstName = data.firstName;
        this.currentLastName = data.lastName;
        this.currentEmail = data.email;
        this.currentProfileImg = data.profileImgPath;
        this.onLoadProfileImg = data.profileImgPath;
    }

    updateProfile() {
        // console.log('UPDATE_FILE_Size : ' + this.fileSize);
        if (this.loggedInUserObj.firstName === null ||
            typeof this.loggedInUserObj.firstName === 'undefined' || this.loggedInUserObj.firstName.trim() === '' ) {
            return this.alertService.warning('Please enter first name', 'Warning');
        } else if ( this.loggedInUserObj.lastName === null ||
            typeof this.loggedInUserObj.lastName === 'undefined' || this.loggedInUserObj.lastName.trim() === '') {
            return this.alertService.warning('Please enter last name', 'Warning');
        } else if ( this.loggedInUserObj.email === null ||
            typeof this.loggedInUserObj.email === 'undefined' || this.loggedInUserObj.email.trim() === '') {
            return this.alertService.warning('Please enter email', 'Warning');
        } else {
            const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
            if (!EMAIL_REGEXP.test(this.loggedInUserObj.email)) {
              return this.alertService.warning('Please enter valid email', 'Warning');
        }
        // else if ( this.fileSize >= 700 ) {
        //     return this.alertService.warning('File not supported, please select image below 700KB.', 'Warning');
        // }
        const payload = this.createUpdateUserpayload();
        this.updateUserApiCall(payload);
         }
    }
    private updateUserApiCall(payload: { firstName: any; lastName: any; email: any; userCode: any; profileImgPath: any;
         status: { status: string; }; team: any; meetingPermissionStatus: { status: any; }; }) {
        this._userService.updateUserDetails(payload).subscribe(data => {
            if (data.errorFl === true || data.warningFl === true) {
                return this.alertService.warning(data.message, 'Warning');
            } else {
                return this.alertService.success('User profile has been updated successfully', 'Success');
            }
        });
    }

    private createUpdateUserpayload() {
        return {
            firstName: this.loggedInUserObj.firstName,
            lastName: this.loggedInUserObj.lastName,
            email: this.loggedInUserObj.email,
            userCode: this.loggedInUserObj.userCode,
            profileImgPath: this.loggedInUserObj.profileImgPath,
            status: { status: 'ACTIVE' },
            team: this.loggedInUserObj.team,
            meetingPermissionStatus: { status: this.loggedInUserObj.meetingPermissionStatus.status }
        };
    }

    cancelUpdate() {
        this.loggedInUserObj.firstName = this.currentFirstName;
        this.loggedInUserObj.lastName =  this.currentLastName;
        this.loggedInUserObj.email = this.currentEmail;
        if (this.fileSize >= 700 ) {
        } else {
            this.loggedInUserObj.profileImgPath = this.onLoadProfileImg;
        }
        this.router.navigate(['/dashboard']);
    }
    onProfilePicSelected(e) {
        const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        if (file === '' || file === null || file === undefined) {
            this.loggedInUserObj.profileImgPath = this.currentProfileImg;
        }
        const pattern = /image-*/;
        const reader = new FileReader();
        this.fileSize = Math.round(file.size / 1024);
        if (this.fileSize >= 700 ) {
            this.loggedInUserObj.profileImgPath = this.currentProfileImg;
            return this.alertService.warning('File not supported, please select image below 700KB.', 'Warning');
        } else {
            if (!file.type.match(pattern)) {
                this.loggedInUserObj.profileImgPath = '';
            return this.alertService.warning('Invalid Image format', 'Image Format');
            } else {
                reader.onload = this._onProfilePicSelected.bind(this);
                reader.readAsDataURL(file);
            }
        }
    }
    _onProfilePicSelected(e) {
        const reader = e.target;
        this.loggedInUserObj.profileImgPath = reader.result;
        this.currentProfileImg = reader.result;
    }
}

import { Component, OnInit , ViewChild , ElementRef} from '@angular/core';
import { UserService } from '../../../services/user.service';
import { MeetingService } from '../../../services/meeting-service';
import { GroupService } from '../../../services/group.service';
import { Router } from '@angular/router';
import { AlertService } from '../../../services/alert.service';
import { ErrorMessageConstants , TypeOfError, SuccessMessage , StaticLabels} from 'app/shared/errorMessageConstants';

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
    isUpdateProfile: boolean;
    @ViewChild('firstNameField') firstNameField: ElementRef;
    @ViewChild('lastNameField') lastNameField: ElementRef;
    @ViewChild('emailField') emailField: ElementRef;
    constructor( private router: Router, userService: UserService, meetingService: MeetingService,
        groupService: GroupService, public alertService: AlertService) {
        this._userService = userService;
        this._meetingservice = meetingService;
        this._groupService = groupService;
    }
    ngOnInit() {
        this.isUpdateProfile = false;
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
                return this.alertService.warning(profileData.message, TypeOfError.Warning);
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
        const NAME_REGEXP = /^[a-zA-Z ]+$/i;
        if (this.loggedInUserObj.firstName === null ||
            typeof this.loggedInUserObj.firstName === 'undefined' || this.loggedInUserObj.firstName.trim() === '' ) {
            return this.validationMsgAndField(this.firstNameField , ErrorMessageConstants.FirstName, TypeOfError.Warning);
        } else if (!NAME_REGEXP.test(this.loggedInUserObj.firstName)) {
            return this.validationMsgAndField(this.firstNameField, ErrorMessageConstants.EnterAlphabatesOnly , TypeOfError.Warning);
         } else if ( this.loggedInUserObj.lastName === null ||
            typeof this.loggedInUserObj.lastName === 'undefined' || this.loggedInUserObj.lastName.trim() === '') {
            return this.validationMsgAndField(this.lastNameField , ErrorMessageConstants.LastName , TypeOfError.Warning);
        } else if (!NAME_REGEXP.test( this.loggedInUserObj.lastName)) {
            return this.validationMsgAndField(this.lastNameField , ErrorMessageConstants.EnterAlphabatesOnly , TypeOfError.Warning);
         } else if ( this.loggedInUserObj.email === null ||
            typeof this.loggedInUserObj.email === 'undefined' || this.loggedInUserObj.email.trim() === '') {
            return this.validationMsgAndField(this.emailField , ErrorMessageConstants.Email , TypeOfError.Warning);
        } else {
            const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
            if (!EMAIL_REGEXP.test(this.loggedInUserObj.email)) {
              return this.validationMsgAndField(this.emailField , ErrorMessageConstants.Email , TypeOfError.Warning);
        }
        const payload = this.createUpdateUserpayload();
        this.updateUserApiCall(payload);
         }
    }
    private validationMsgAndField(elementFocus: ElementRef, validationMsg: String, flag: String) {
        elementFocus.nativeElement.focus();
        return this.alertService.warning(validationMsg, flag);
    }
    private updateUserApiCall(payload: { firstName: any; lastName: any; email: any; userCode: any; profileImgPath: any;
         status: { status: string; }; team: any; meetingPermissionStatus: { status: any; }; }) {
        this._userService.updateUserDetails(payload).subscribe(data => {
            this.isUpdateProfile = true;
            if (data.errorFl === true || data.warningFl === true) {
                return this.alertService.warning(data.message, TypeOfError.Warning);
            } else {
                return this.alertService.success(SuccessMessage.UpdateProfile, SuccessMessage.SuccessHeader);
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
            status: { status: StaticLabels.Active },
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
            return this.alertService.warning(ErrorMessageConstants.FileNotSupported, TypeOfError.Warning);
        } else {
            if (!file.type.match(pattern)) {
                this.loggedInUserObj.profileImgPath = '';
            return this.alertService.warning(ErrorMessageConstants.InvalidImgFormat, TypeOfError.Warning);
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
    onDashboardClick() {
        if (this.isUpdateProfile === false) {
            this.loggedInUserObj.profileImgPath = this.onLoadProfileImg;
            this.loggedInUserObj.firstName = this.currentFirstName;
            this.loggedInUserObj.lastName = this.currentLastName;
            this.loggedInUserObj.email = this.currentEmail;
        }
    }
}

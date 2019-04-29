import { UserService } from '../../../services/user.service';
import { PaginationInstance } from 'ngx-pagination';
import { AlertService } from '../../../services/alert.service';
import { Component, OnInit, Output, ViewChild, ViewContainerRef , ElementRef } from '@angular/core';
import { TeamService } from '../../../services/team.service';
import { CustomModalComponent, CustomModalModel } from '../../dashboard/components/custom-modal/custom-modal.component';
import { SpinnerComponent } from 'app/shared/modules/common-components/spinner/spinner.component';
@Component({
  selector: 'app-manage-admin',
  templateUrl: './manage-admin.component.html',
  styleUrls: ['./manage-admin.component.scss'],
  providers: [AlertService, TeamService]
})
export class ManageAdminComponent implements OnInit {
_userService: UserService;
_teamService: TeamService;
searchText: any;
public filter: String = '';
public maxSize: Number = 7;
public directionLinks: Boolean = true;
public autoHide: Boolean = false;
public responsive: Boolean = false;
// public loading: boolean;
public config: PaginationInstance = {
    id: 'usersCode',
    itemsPerPage: 10,
    currentPage: 1
};
public labels: any = {
    previousLabel: 'Previous',
    nextLabel: 'Next',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
};

updatedLastName: any;
updatedFirstName: any;
updatedEmail: any;
allAdminList = [];
selectedAdmin: any;
updatedUserCode: any;
updatedUserStaus: boolean;
updatedTeamName: any;
updatedMeetingPermissionStatus: any;
teamArray = [];
newTeamName: any;
selectedIndex: any;
selectedDefaultTeam: any;
deleteMemberFlag = 1;
  constructor(userService: UserService, public alertService: AlertService , teamService: TeamService) {
    this._userService = userService;
    this._teamService = teamService;
  }
  @ViewChild('updatedEmailField') updatedEmailField: ElementRef;
  @ViewChild('updatedFirstNameField') updatedFirstNameField: ElementRef;
  @ViewChild('updatedLastNameField') updatedLastNameField: ElementRef;
  @ViewChild('manageAdminSpinner') manageAdminSpinnerMod: SpinnerComponent;
  @ViewChild('deleteMemberModal') public deleteMemberModal: CustomModalComponent;
  deleteAdminPop: CustomModalModel = {
      titleIcon: '<i class="fa fa-trash"></i>',
      title: 'Delete Admin',
      smallHeading: 'You can delete admin here',
      body: '',
      Button1Content: '<i class="fa fa-user"></i>&nbsp;Delete Admin',
      Button2Content: ''
  };
  @ViewChild('editMemberModal') public editMemberModal: CustomModalComponent;
  editAdminPop: CustomModalModel = {
      titleIcon: '<i class="fa fa-pencil"></i>',
      title: 'Update Admin',
      smallHeading: 'You can update admin here',
      body: '',
      Button1Content: '<i class="fa fa-user"></i>&nbsp;Update Admin',
      Button2Content: ''
  };
  ngOnInit() {
    // this.loading = true;
  this._userService.getAllAdminList().subscribe(data => {
    if (!data.warningFl && !data.errorFl) {
        this.allAdminList = data;
        this.manageAdminSpinnerMod.hideSpinner();
    }
});

this._teamService.getAllEnableTeams().subscribe(data => {
    if (data.warningFl) {
     return this.alertService.warning(data.json().message, 'Warning');
    } else {
      this.teamArray = data;
     }
  });
  }
  onPageChange(number: number) {
    // console.log('change to page', number);
    this.config.currentPage = number;
}
deleteAdmin(selectedAdmin) {
    if (selectedAdmin.status.status === 'ACTIVE') {
        this.deleteMemberModal.open();
        this.selectedAdmin = selectedAdmin;
        const index = this.allAdminList.indexOf(selectedAdmin);
        this.allAdminList.splice(index, 1);
        this.selectedIndex = index;
    } else {
        return this.alertService.warning('Admin ' + selectedAdmin.firstName + ' ' + selectedAdmin.lastName +
         '  is already inactive', 'Inactive Admin');
    }
}
deleteAdminNow() {
   const payload = {userCode: this.selectedAdmin.userCode};
  this._userService.deleteUser(payload).subscribe(data => {
    if (data.errorFl === true || data.warningFl === true) {
        return this.alertService.warning(data.message, 'Warning');
    } else {
     this.deleteMemberFlag = 2;
     this.closeDeletePopup(1);
  //   const memObj = this.selectedAdminObj(this.selectedAdmin, this.deleteMemberFlag, 1);
   //  this.allAdminList.splice(this.selectedIndex, 0, memObj);
    // this.deleteMemberModal.close();
        return this.alertService.success('Admin ' + data.firstName + ' ' + data.lastName + ' has deleted successfully', 'Delete Admin');
    }
});
}
    private selectedAdminObj(obj , editDeletelag , flag) {
        let statusVal ;
        if (flag === 1 || (editDeletelag === 2 && flag === 2)) {
            statusVal = 'INACTIVE';
            this.deleteMemberFlag = 1;
        } else if (editDeletelag === 1) {
            statusVal = obj.status.status;
        }
        return {
            firstName: obj.firstName, lastName: obj.lastName, email: obj.email,
             meetingPermissionStatus: { status: obj.meetingPermissionStatus.status }, name: obj.name, userCode: obj.userCode,
             status: { status: statusVal }, team: { teamName: obj.team.teamName }
            };
    }

editAdmin(user) {
    if (user.status.status === 'ACTIVE') {
        this.updatedUserStaus = true;
    } else {
        this.updatedUserStaus = false;
    }
    if (user.meetingPermissionStatus.status === 'ACTIVE') {
        this.updatedMeetingPermissionStatus = true;
    } else {
        this.updatedMeetingPermissionStatus = false;
    }
    this.editMemberModal.open();
    this.allAdminList.splice(this.allAdminList.indexOf(user), 1);
    this.updatedFirstName = user.firstName;
    this.updatedLastName = user.lastName;
    this.updatedEmail = user.email;
    this.updatedTeamName = user.team;
    this.updatedUserCode = user.userCode;
    this.selectedDefaultTeam = user.team.teamName;
    this.selectedAdmin = user;
}
updateAdmin() {
    let duplicateUserNameFlag ;
    let exceptionFlag;
    const currentDisplayStatus = this.getStatusByUser(this.updatedUserStaus);
    const currentDisplayMeetingStatus = this.getStatusByUser(this.updatedMeetingPermissionStatus);
    const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if ( this.updatedFirstName === null || typeof this.updatedFirstName === 'undefined' || this.updatedFirstName.trim() === '') {
        this.updatedFirstNameField.nativeElement.focus();
         return this.alertService.warning('Please enter first name', 'Warning');
      } else if ( this.updatedLastName === null || typeof this.updatedLastName === 'undefined' || this.updatedLastName.trim() === '' ) {
        this.updatedLastNameField.nativeElement.focus();
        return this.alertService.warning('Please enter last name', 'Warning');
      } else  if (this.updatedEmail === null || typeof this.updatedEmail === 'undefined' || this.updatedEmail.trim() === '') {
        this.updatedEmailField.nativeElement.focus();
        return this.alertService.warning('Please enter email' , 'Warning');
      } else if (!EMAIL_REGEXP.test(this.updatedEmail)) {
        this.updatedEmailField.nativeElement.focus();
        return this.alertService.warning('Please enter valid email', 'Warning');
    } else {
        const payload = {
            firstName: this.updatedFirstName.substring(0, 1).toUpperCase() + this.updatedFirstName.substring(1),
            lastName: this.updatedLastName.substring(0, 1).toUpperCase() + this.updatedLastName.substring(1),
            email: this.updatedEmail,
            status: {status: currentDisplayStatus},
            userCode: this.updatedUserCode,
            team: {teamName : this.selectedDefaultTeam},
            meetingPermissionStatus: {status: currentDisplayMeetingStatus},
        };
        this._userService.updateUserDetails(payload).subscribe(data => {
            if (duplicateUserNameFlag === true) {
                this.updatedFirstNameField.nativeElement.focus();
                return this.alertService.warning('Username already exist', 'Warning');
              } else if (exceptionFlag === true) {
                this.updatedEmailField.nativeElement.focus();
                return this.alertService.warning(data.message, 'Warning');
              } else {
                duplicateUserNameFlag = data.warningFl;
                exceptionFlag = data.errorFl;
                this.selectedAdmin = data;
                this.teamArray.push(data.team);
              }
        });
      this.editMemberModal.close();
      return this.alertService.success('Admin has updated successfully', 'Success');

    }
}
private getStatusByUser(updatedStaus) {
    let currentDisplayStatus;
    if (updatedStaus === true) {

        currentDisplayStatus = 'ACTIVE';
    } else {
        currentDisplayStatus = 'INACTIVE';
    }
    return currentDisplayStatus;
}


closeEditPopup() {
    const memObj = this.selectedAdminObj(this.selectedAdmin , 1 , 2);
    this.allAdminList.splice(this.selectedIndex , 0 , memObj);
}

// closeDeletePopup(noFlag) {
//         const memObj = this.selectedAdminObj(this.selectedAdmin, this.deleteMemberFlag, noFlag);
//         if (noFlag === 2 && this.deleteMemberFlag === 1) {
//             this.allAdminList.splice(this.selectedIndex, 0, memObj);
//         }
// }
closeDeletePopup(noFlag) {
    if (noFlag === 1) {
        this.deleteMemberModal.close();
    } else {
        const memObj = this.selectedAdminObj(this.selectedAdmin, this.deleteMemberFlag, noFlag);
        this.allAdminList.splice(this.selectedIndex, 0, memObj);
    }
}
}

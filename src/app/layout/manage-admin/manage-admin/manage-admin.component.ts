import { UserService } from '../../../services/user.service';
import { PaginationInstance } from 'ngx-pagination';
import { AlertService } from '../../../services/alert.service';
import { Component, OnInit, ViewChild , ElementRef } from '@angular/core';
import { TeamService } from '../../../services/team.service';
import { CustomModalComponent, CustomModalModel } from '../../dashboard/components/custom-modal/custom-modal.component';
import { SpinnerComponent } from 'app/shared/modules/common-components/spinner/spinner.component';
import { ErrorMessageConstants, TypeOfError , SuccessMessage , StaticLabels} from '../../../shared/errorMessageConstants';
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
        this.getAllAdminApiCall();
        this.getAllEnableTeamCall();
  }
    private getAllEnableTeamCall() {
        this._teamService.getAllEnableTeams().subscribe(data => {
            if (data.warningFl) {
                return this.alertService.warning(data.json().message, TypeOfError.Warning);
            } else {
                this.teamArray = data;
            }
        });
    }

    private getAllAdminApiCall() {
        this._userService.getAllAdminList().subscribe(data => {
            if (!data.warningFl && !data.errorFl) {
                this.allAdminList = data;
                this.manageAdminSpinnerMod.hideSpinner();
            }
        });
    }

  onPageChange(number: number) {
    this.config.currentPage = number;
}
deleteAdmin(selectedAdmin) {
    if (selectedAdmin.status.status === StaticLabels.Active) {
        this.deleteAdminActiveStatusAction(selectedAdmin);
    } else {
        return this.alertService.warning('Admin ' + selectedAdmin.firstName + ' ' + selectedAdmin.lastName +
         '  is already inactive', TypeOfError.Warning);
    }
}
    private deleteAdminActiveStatusAction(selectedAdmin: any) {
        this.deleteMemberModal.open();
        this.selectedAdmin = selectedAdmin;
        const index = this.allAdminList.indexOf(selectedAdmin);
        this.allAdminList.splice(index, 1);
        this.selectedIndex = index;
    }

deleteAdminNow() {
   const payload = {userCode: this.selectedAdmin.userCode};
    this._userService.deleteUser(payload).subscribe(data => {
    if (data.errorFl === true || data.warningFl === true) {
        return this.alertService.warning(data.message, TypeOfError.Warning);
    } else {
     return this.deleteAdminSuccessAction(data);
    }
});
}
    private deleteAdminSuccessAction(data: any) {
        this.deleteMemberFlag = 2;
        this.closeDeletePopup(1);
        return this.alertService.success('Admin ' + data.firstName + ' ' + data.lastName + ' has deleted successfully',
         SuccessMessage.SuccessHeader);
    }

    private selectedAdminObj(obj , editDeletelag , flag) {
        const statusVal = this.setAdminStatusValue(flag, editDeletelag, obj);
        return {
            firstName: obj.firstName, lastName: obj.lastName, email: obj.email,
             meetingPermissionStatus: { status: obj.meetingPermissionStatus.status }, name: obj.name, userCode: obj.userCode,
             status: { status: statusVal }, team: { teamName: obj.team.teamName }
            };
    }

    private setAdminStatusValue(flag: any, editDeletelag: any, obj: any) {
        let statusVal;
        if (flag === 1 || (editDeletelag === 2 && flag === 2)) {
            statusVal = StaticLabels.InActive;
            this.deleteMemberFlag = 1;
        } else if (editDeletelag === 1) {
            statusVal = obj.status.status;
        }
        return statusVal;
    }

editAdmin(user) {
    this.setStatusAndMeetingStatus(user);
    this.editMemberModal.open();
    this.allAdminList.splice(this.allAdminList.indexOf(user), 1);
    this.setUpdatedValueToModel(user);
}
    private setUpdatedValueToModel(user: any) {
        this.updatedFirstName = user.firstName;
        this.updatedLastName = user.lastName;
        this.updatedEmail = user.email;
        this.updatedTeamName = user.team;
        this.updatedUserCode = user.userCode;
        this.selectedDefaultTeam = user.team.teamName;
        this.selectedAdmin = user;
    }

    private setStatusAndMeetingStatus(user: any) {
        if (user.status.status === StaticLabels.Active) {
            this.updatedUserStaus = true;
        } else {
            this.updatedUserStaus = false;
        }
        if (user.meetingPermissionStatus.status === StaticLabels.Active) {
            this.updatedMeetingPermissionStatus = true;
        } else {
            this.updatedMeetingPermissionStatus = false;
        }
    }

updateAdmin() {
    const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    const NAME_REGEXP = /^[a-zA-Z ]+$/i;
    if ( this.updatedFirstName === null || typeof this.updatedFirstName === StaticLabels.Undefined || this.updatedFirstName.trim() === '') {
        return this.validationMsgAndField(this.updatedFirstNameField , ErrorMessageConstants.FirstName, TypeOfError.Warning);
      } else if (!NAME_REGEXP.test(this.updatedFirstName)) {
        this.validationMsgAndField(this.updatedFirstNameField , ErrorMessageConstants.EnterAlphabatesOnly , TypeOfError.Warning);
      }   else if ( this.updatedLastName === null || typeof this.updatedLastName === StaticLabels.Undefined ||
         this.updatedLastName.trim() === '' ) {
        return this.validationMsgAndField(this.updatedLastNameField , ErrorMessageConstants.LastName, TypeOfError.Warning);
      } else if (!NAME_REGEXP.test(this.updatedLastName)) {
        this.validationMsgAndField(this.updatedLastNameField , ErrorMessageConstants.EnterAlphabatesOnly , TypeOfError.Warning);
      } else  if (this.updatedEmail === null || typeof this.updatedEmail === StaticLabels.Undefined || this.updatedEmail.trim() === '') {
        return this.validationMsgAndField(this.updatedEmailField , ErrorMessageConstants.Email , TypeOfError.Warning);
      } else if (!EMAIL_REGEXP.test(this.updatedEmail)) {
        return this.validationMsgAndField( this.updatedEmailField , ErrorMessageConstants.ValidEmail, TypeOfError.Warning);
    } else {
        return this.updateAdminSuccessAction();
    }
}
    private validationMsgAndField(elementFocus: ElementRef , validationMsg: String , flag: String) {
        elementFocus.nativeElement.focus();
        return this.alertService.warning(validationMsg , flag);
    }

    private updateAdminSuccessAction() {
        const currentDisplayStatus = this.getStatusByUser(this.updatedUserStaus);
        const currentDisplayMeetingStatus = this.getStatusByUser(this.updatedMeetingPermissionStatus);
        const payload = this.createUpdateUserPayload(currentDisplayStatus, currentDisplayMeetingStatus);
        this.updateUserDetailsApiCall(payload);
       
    }

    private updateUserDetailsApiCall(payload: { firstName: any; lastName: any; email: any; status: { status: any; };
         userCode: any; team: { teamName: any; }; meetingPermissionStatus: { status: any; }; }) {
        this._userService.updateUserDetails(payload).subscribe(data => {
            if (data.warningFl === true) {
                return this.validationMsgAndField(this.updatedFirstNameField, ErrorMessageConstants.ExistUserName, TypeOfError.Warning);
            } else if (data.errorFl === true) {
                return this.validationMsgAndField(this.updatedEmailField , data.message, TypeOfError.Warning);
            } else {
                this.updateUserDetailsSuccessResponse(data);
            }
        });
    }

    private updateUserDetailsSuccessResponse( data: any) {
        this.selectedAdmin = data;
        this.editMemberModal.close();
        return this.alertService.success(SuccessMessage.AdminUpdate, SuccessMessage.SuccessHeader);
        // this.teamArray.push(data.team);
    }

    private createUpdateUserPayload(currentDisplayStatus: any, currentDisplayMeetingStatus: any) {
        return {
            firstName: this.updatedFirstName.substring(0, 1).toUpperCase() + this.updatedFirstName.substring(1),
            lastName: this.updatedLastName.substring(0, 1).toUpperCase() + this.updatedLastName.substring(1),
            email: this.updatedEmail,
            status: { status: currentDisplayStatus },
            userCode: this.updatedUserCode,
            team: { teamName: this.selectedDefaultTeam },
            meetingPermissionStatus: { status: currentDisplayMeetingStatus },
        };
    }

private getStatusByUser(updatedStaus) {
    let currentDisplayStatus;
    if (updatedStaus === true) {

        currentDisplayStatus = StaticLabels.Active;
    } else {
        currentDisplayStatus = StaticLabels.InActive;
    }
    return currentDisplayStatus;
}


closeEditPopup() {
    const memObj = this.selectedAdminObj(this.selectedAdmin , 1 , 2);
    this.allAdminList.splice(this.selectedIndex , 0 , memObj);
}
closeDeletePopup(noFlag) {
    if (noFlag === 1) {
        this.deleteMemberModal.close();
    } else {
        const memObj = this.selectedAdminObj(this.selectedAdmin, this.deleteMemberFlag, noFlag);
        this.allAdminList.splice(this.selectedIndex, 0, memObj);
    }
}
}

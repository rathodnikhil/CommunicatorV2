import { UserService } from '../../../services/user.service';
import { PaginationInstance } from 'ngx-pagination';
import { AlertService } from '../../../services/alert.service';
import { Component, OnInit, Output, ViewChild, ViewContainerRef ,ElementRef } from '@angular/core';
import { TeamService } from '../../../services/team.service';
import { CustomModalComponent, CustomModalModel } from '../../dashboard/components/custom-modal/custom-modal.component';
@Component({
  selector: 'app-manage-admin',
  templateUrl: './manage-admin.component.html',
  styleUrls: ['./manage-admin.component.scss'],
  providers: [AlertService]
})
export class ManageAdminComponent implements OnInit {
_userService: UserService;
_teamService: TeamService;
searchText: any;
public filter: string = '';
public maxSize: number = 7;
public directionLinks: boolean = true;
public autoHide: boolean = false;
public responsive: boolean = false;
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
updatedUserName: any;
updatedEmail: any;
allAdminList = [];
selectedAdmin : any;
updatedUserCode: any;
updatedUserStaus: boolean;
updatedTeamName: any;
teamArray= [];
newTeamName: any;
  constructor(userService: UserService,public alertService: AlertService , teamService: TeamService) { 
    this._userService = userService;
    this._teamService = teamService;
  }
  @ViewChild("usernameField") usernameField: ElementRef;
  @ViewChild("emailField") emailField: ElementRef;

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
 
  this._userService.getAllAdminList().subscribe(data => {
    if (!data.warningFl && !data.errorFl) {
        this.allAdminList = data;
    }
});

this._teamService.getAllEnableTeams().subscribe(data => {
    if(data.warningFl){
     return this.alertService.warning(data.json().message,"Warning");   
    }else{
      this.teamArray = data;
     }
  });
  }
  onPageChange(number: number) {
    // console.log('change to page', number);
    this.config.currentPage = number;
}
deleteAdmin(selectedAdmin){
    if(selectedAdmin.status.status === "ACTIVE"){
        this.deleteMemberModal.open();
        this.selectedAdmin = selectedAdmin;  
    }else{
        return this.alertService.warning("Admin "+selectedAdmin.firstName +" " + selectedAdmin.lastName +"  has already inactive", 'Inactive Admin');
    }

}
deleteAdminNow(){
   const payload = {userCode: this.selectedAdmin.userCode}
  this._userService.deleteUser(payload).subscribe(data => {
    if (data.errorFl === true || data.warningFl === true) {
        return this.alertService.warning(data.message, 'Warning');
    } else {
        this.deleteMemberModal.close();
        return this.alertService.success("Admin "+data.firstName +" " + data.lastName +" has deleted successfully", 'Delete Admin');
    }
});
}
editAdmin(user){
    if(user.status.status === "ACTIVE"){
        this.updatedUserStaus = true;    
    }else{
        this.updatedUserStaus =false;
    }
    this.editMemberModal.open();
    this.updatedFirstName = user.firstName;
    this.updatedLastName = user.lastName;
    this.updatedUserName = user.name;
    this.updatedEmail = user.email;
    this.updatedTeamName = user.team.teamName;
    this.updatedUserCode = user.userCode;
   
}
updateMember(){
    let duplicateUserNameFlag ;
    let exceptionFlag;
    const payload = {
        firstName : this.updatedFirstName,
        lastName: this.updatedLastName,
        name: this.updatedUserName,
        email: this.updatedEmail,
        team: this.updatedTeamName,
        userCode: this.updatedUserCode
    };
    this._userService.saveUserDetails(payload,this.newTeamName).subscribe(data => {
        duplicateUserNameFlag = data.json().warningFl;
        exceptionFlag = data.json().errorFl;
        if(duplicateUserNameFlag == true) {
          this.usernameField.nativeElement.focus();
          return this.alertService.warning("Username already exist","Warning");
        }else if(exceptionFlag == true) {
          this.emailField.nativeElement.focus();
          return this.alertService.warning(data.json().message,"Warning");
        }else{
         // this.clearAllField();
          this.teamArray.push(data);
          return this.alertService.success("Admin has updated successfully","Success");

        }
    });
}
  //close team modal popup
  closePopup(popupType) {
    switch (popupType) {
        case 'deleteAdmin':
            this.deleteMemberModal.close();
            break;
        case 'editAdmin':
            this.editMemberModal.close();
            break;
    }
}
}

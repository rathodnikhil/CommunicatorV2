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
  providers: [AlertService,TeamService]
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
updatedEmail: any;
allAdminList = [];
selectedAdmin : any;
updatedUserCode: any;
updatedUserStaus: boolean;
updatedTeamName: any;
teamArray= [];
newTeamName: any;
selectedDefaultTeam: any;
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
        this.allAdminList.splice(this.allAdminList.indexOf(selectedAdmin), 1);
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
         let memObj = { firstName:  this.selectedAdmin.firstName, lastName:  this.selectedAdmin.lastName ,email:  this.selectedAdmin.email,
                     name: this.selectedAdmin.name, userCode: this.selectedAdmin.userCode ,status:  {status: 'INACTIVE'}, team:  {teamName: this.selectedAdmin.team.teamName}}
        this.allAdminList.push(memObj);
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
    this.allAdminList.splice(this.allAdminList.indexOf(user), 1);
    this.updatedFirstName = user.firstName;
    this.updatedLastName = user.lastName;
    this.updatedEmail = user.email;
    this.updatedTeamName = user.team;
    this.updatedUserCode = user.userCode;
    this.selectedDefaultTeam = user.team.teamName;
   
}
updateMember(){
    let duplicateUserNameFlag ;
    let exceptionFlag;
    alert(this.updatedTeamName.teamName);
    let currentDisplayStatus = this.getStatusByUser(this.updatedUserStaus);
    const payload = {
        firstName : this.updatedFirstName,
        lastName: this.updatedLastName,
        email: this.updatedEmail,
        status: {status: currentDisplayStatus},
        userCode: this.updatedUserCode,
        team: this.updatedTeamName
        
    };
    this._userService.updateUserDetails(payload).subscribe(data => {
        duplicateUserNameFlag = data.warningFl;
        exceptionFlag = data.errorFl;
        if(duplicateUserNameFlag == true) {
          this.usernameField.nativeElement.focus();
          return this.alertService.warning("Username already exist","Warning");
        }else if(exceptionFlag == true) {
          this.emailField.nativeElement.focus();
          return this.alertService.warning(data.json().message,"Warning");
        }else{
          this.teamArray.push(data.team);
          this.allAdminList.push(data);
          this.editMemberModal.close();
          return this.alertService.success("Admin has updated successfully","Success");

        }
    });
}
private getStatusByUser(updatedStaus) {
    let currentStatus;
    let currentDisplayStatus;
    if (updatedStaus == true) {
        currentStatus = 1;
        currentDisplayStatus = "ACTIVE";
    }
    else {
        currentStatus = 2;
        currentDisplayStatus = "INACTIVE";
    }
    return currentDisplayStatus;
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

import { Component, OnInit, Output, ViewChild, ViewContainerRef ,ElementRef} from '@angular/core';
import { TeamService } from '../../../services/team.service';
import { CustomModalComponent, CustomModalModel } from '../../dashboard/components/custom-modal/custom-modal.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AlertService } from '../../../services/alert.service';
import { PasswordService } from '../../../services/password.service';

@Component({
    selector: 'app-manage-team',
    templateUrl: './manage-team.component.html',
    styleUrls: ['./manage-team.component.scss'],
    providers: [TeamService ,AlertService,PasswordService],
})
export class ManageTeamComponent implements OnInit {
    newTeamName: any;
    memObj: any = {};
    i: number;
    teamCode: string;
    _teamService: TeamService;
    _userService: UserService;
    _passwordService: PasswordService;
    userPermissionList = [];
    userPermissionMemberList = [];
    filterMemberList = [];
    teamList = [];
    selectedTeamName: any;
    user: any = {};
    firstName: any;
    lastName: any;
    userName: any;
    email: any;
    password: any;
    loggedInUser: any;
    selectedTeamObj: any;
    searchText: string;
    searchTeam: any;
    showSelectedTeam: boolean;
    updateTeamName: any;
    selectedUserPermissionObj: any;
    selectedNewTeamObj: any;
    @ViewChild("emailField") emailField: ElementRef;
    @ViewChild('addNewTeamModal') public addNewTeamModal: CustomModalComponent;
    newTeam: CustomModalModel = {
        titleIcon: '<i class="fa fa-user"></i>',
        title: 'New Team',
        smallHeading: 'You can add new team details here',
        body: '',
        Button1Content: '<i class="fa fa-user"></i>&nbsp;Add Team',
        Button2Content: ''
    };
    @ViewChild('addUpdateTeamModal') public addUpdateTeamModal: CustomModalComponent;
    updateTeam: CustomModalModel = {
        titleIcon: '<i class="fa fa-pencil-square-o"></i>',
        title: 'Update Team',
        smallHeading: 'You can update team details here',
        body: '',
        Button1Content: '<i class="fa fa-user"></i>&nbsp;Update Team',
        Button2Content: ''
    };
    @ViewChild('deleteTeamModal') public deleteTeamModal: CustomModalComponent;
    deleteTeam: CustomModalModel = {
        titleIcon: '<i class="fas fa-trash-alt"></i>',
        title: 'Delete Team',
        smallHeading: 'You can delete team details here',
        body: '',
        Button1Content: '<i class="fa fa-user"></i>&nbsp;Delete Team',
        Button2Content: ''
    };
    @ViewChild('addNewMemberModal') public addNewMemberModal: CustomModalComponent;
    newMember: CustomModalModel = {
        titleIcon: '<i class="fa fa-user"></i>',
        title: 'New Member',
        smallHeading: 'You can add new member details here',
        body: '',
        Button1Content: '<i class="fa fa-user"></i>&nbsp;Add Member',
        Button2Content: ''
    };


    constructor(teamService: TeamService, userService: UserService , public alertService: AlertService , passwordService: PasswordService) {
        this._teamService = teamService;
        this._userService = userService;
        this._passwordService = passwordService;
    }

    ngOnInit() {
        this.showSelectedTeam =  false;
        this.selectedTeamObj = null;
        this._userService.getLoggedInUserObj().subscribe(data => {   
            if(data.errorFl === true || data.warningFl === true){
                return this.alertService.warning(data.message, "Warning"); 
            }else{  
            this.loggedInUser = data;  
              //getTeamsByLoggedInUserId webservice call
        const payload = { userCode: this.loggedInUser.userCode };
        this._teamService.getTeamsByLoggedInUserId(payload).subscribe(data => {
            if(data[0].errorFl || data[0].warningFl){
                this.userPermissionList = [];
                return this.alertService.warning(data[0].message, "Warning"); 
            } else{
               this.userPermissionList = data;
            }
        });

        this._teamService.getMemberListByLoggedInUserId(payload).subscribe(data => {
            if(data[0].errorFl || data[0].warningFl){
                this.userPermissionMemberList = [];
                return this.alertService.warning(data[0].message, "Warning"); 
            } else{
               this.userPermissionMemberList = data;
            }
        });
            }   
         });
      
    }
    displayTeamDetails(userPermission) {
        if(userPermission.team.teamCode === "" || userPermission.team.teamCode === null || typeof userPermission.team.teamCode === "undefined"){
            this.selectedTeamObj = this.selectedNewTeamObj ;
        }else{
            this.selectedTeamObj = userPermission.team;
        }
        this.showSelectedTeam = true;
        this.selectedTeamName = userPermission.team.teamName;
        this.filterMemberList = [];
      
        for (this.i = 0; this.i < this.userPermissionMemberList.length; this.i++) {
            if (this.userPermissionMemberList[this.i].team.id == userPermission.team.id) {
                this.filterMemberList.push(this.userPermissionMemberList[this.i]);
            }
        }
        this.selectedUserPermissionObj = userPermission;
    }
    //to open modal popup
    open() {
        this.addNewTeamModal.open();
    }
    openMemberPopup() {
        if(this.selectedTeamObj === "" || this.selectedTeamObj === null || typeof this.selectedTeamObj === "undefined"){
            return this.alertService.warning("Please Select Team ", "Warning"); 
        }else{
            this.addNewMemberModal.open();
        }
    }
    addTeam() {
        if (this.newTeamName === "" || this.newTeamName === null || typeof this.newTeamName === "undefined") {
            return this.alertService.warning("Please Enter Team Name", "Warning");   
        } else {
            const payload = { "teamName": this.newTeamName , "userCode": this.loggedInUser.userCode };
            const team = { team: { teamName: this.newTeamName } };
            this._teamService.saveTeamDetails(payload).subscribe(
                (res) => {
                    if(res.errorFl === true || res.warningFl === true){
                        return this.alertService.warning(res.message, "Warning"); 
                    }else{
                    this.userPermissionList.push(team);
                    this.newTeamName = '';
                    this.selectedNewTeamObj = res;
                   return this.alertService.success("Team has saved successfully ", "Success");   
                    }
                });
        }
    }

    // add new member  
    addMember() {
        if ( this.firstName === null || typeof this.firstName === "undefined" || this.firstName.trim() === "" ) {
            return this.alertService.warning("Please Enter First Name ", "Warning");   
        }else if ( this.lastName === null || typeof this.lastName === "undefined"|| this.lastName.trim() === "" ) {
            return this.alertService.warning("Please Enter Last Name ", "Warning");   
        }  else if (this.email === null || typeof this.email === "undefined" || this.email.trim() === "" ) {
            return this.alertService.warning("Please Enter Email", "Warning");   
        }else if (this.userName === null || typeof this.userName === "undefined" ||this.userName.trim() === "") {
            return this.alertService.warning("Please Enter UserName ", "Warning");   
        } else if (this.password === null || typeof this.password === "undefined" ||this.password.trim() === "") {
            return this.alertService.warning("Please Enter Password ", "Warning");   
        }
       else {
        const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    
        if (!EMAIL_REGEXP.test(this.email)) {
          this.emailField.nativeElement.focus();
          return this.alertService.warning("Please enter valid email","Warning");
        }else{
            const payload = {
                "email": this.email,
                "name": this.userName,
                "password": this._passwordService.encrypted(this.password),
                "lastName": this.lastName,
                "firstName": this.firstName,
                "status.onlineStatus": false,
                "registeredBy": this.loggedInUser.userCode,
                "team": this.selectedTeamObj

            }
            this._userService.saveMemberDetails(payload).subscribe(
                (res) => {
                    if(res.errorFl === true || res.warningFl     === true){
                        return this.alertService.warning(res.message, "Warning"); 
                    }else{
                        this.memObj = { userId: { firstName: this.firstName, lastName: this.lastName } }
                        this.userPermissionMemberList.push(this.memObj);
                        this.filterMemberList.push(this.memObj);
                        this.firstName = '';
                        this.lastName = '';
                        this.userName = '';
                        this.email = '';
                        this.password = '';
                        return this.alertService.success("Member has saved successfully ", "Success");   
                    }
               });
            }
        } 
 }

    //close team modal popup
    closePopup(popupType) {
        switch (popupType) {
            case 'addNewTeam':
                this.addNewTeamModal.close();
                break;
            case 'addNewMember':
                this.addNewMemberModal.close();
                break;
            case 'updateTeam':
                this.addUpdateTeamModal.close();
                break;
            case 'deleteTeam':
                this.deleteTeamModal.close();
                break;
        }
    }
    editTeam(){
        this.addUpdateTeamModal.open();
        this.updateTeamName = this.selectedTeamObj.teamName;
    }
    updateTeamDetails(){
        if (this.updateTeamName === "" || this.updateTeamName === null || typeof this.updateTeamName === "undefined") {
            return this.alertService.warning("Please Enter Team Name", "Warning");   
        } else {
            const payload = { "teamName": this.updateTeamName , "userCode": this.loggedInUser.userCode ,"teamCode": this.selectedTeamObj.teamCode};
            const team = { team: { teamName: this.updateTeamName } };
            this._teamService.saveTeamDetails(payload).subscribe(
                (res) => {
                    if(res.errorFl === true || res.warningFl === true){
                        return this.alertService.warning(res.message, "Warning"); 
                    }else{
                  this.selectedTeamObj.teamName = this.updateTeamName;
                  this.selectedTeamName = this.updateTeamName;
                   this.closePopup('updateTeam');
                   return this.alertService.success("Team has updated successfully ", "Success");   
                    }
                });
        }
    }
    deleteSelectedTeam(){
        this.deleteTeamModal.open();
    }
    deleteTeamDetails(){
        const payload = {"teamCode": this.selectedUserPermissionObj.teamCode};
     
            this._teamService.deleteTeam(payload).subscribe(res => {
                if(res.errorFl === true || res.warningFl === true){
                    return this.alertService.warning(res.message, "Warning"); 
                }else{
               this.closePopup('deleteTeam');
               this.userPermissionList.splice(this.userPermissionList.indexOf(this.selectedUserPermissionObj), 1);
               return this.alertService.success("Team has deleted successfully ", "Success");   
                }
            });
    }
}

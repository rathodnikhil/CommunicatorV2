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
import { PaginationInstance } from 'ngx-pagination';
@Component({
    selector: 'app-manage-team',
    templateUrl: './manage-team.component.html',
    styleUrls: ['./manage-team.component.scss'],
    providers: [TeamService ,AlertService,PasswordService],
})
export class ManageTeamComponent implements OnInit {
    public searchText: string;
    public filter = '';
    public maxSize = 7;
    public directionLinks = true;
    public autoHide = false;
    public responsive = false;
    public config: PaginationInstance = {
        id: 'userCode',
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
    newTeamName: any;
    memObj: any = {};
    i: number;
    teamCode: string;
    searchTableText: string;
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
    searchTeam: any;
    showSelectedTeam: boolean;
    updateTeamName: any;
    selectedUserPermissionObj: any;
    selectedNewTeamObj: any;
    teamArray = [];
    updatedFirstName: any;
    updatedLastName: any;
    updatedEmail;
    updatedTeamName: any;
    updatedUserStaus: boolean;
    updatedUserCode: any;
    selectedMember: any;
    newMemberUserCode: any;
    @ViewChild("emailField") emailField: ElementRef;
    @ViewChild("teamNameField") teamNameField: ElementRef;
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
    @ViewChild('UpdateMemberModal') public UpdateMemberModal: CustomModalComponent;
    updateMember: CustomModalModel = {
        titleIcon: '<i class="fa fa-pencil-square-o"></i>',
        title: 'Update Member',
        smallHeading: 'You can update member details here',
        body: '',
        Button1Content: '<i class="fa fa-user"></i>&nbsp;Update Member',
        Button2Content: ''
    };
    @ViewChild('deleteMemberModal') public deleteMemberModal: CustomModalComponent;
    deleteMember: CustomModalModel = {
        titleIcon: '<i class="fas fa-trash-alt"></i>',
        title: 'Delete member',
        smallHeading: 'You can delete member details here',
        body: '',
        Button1Content: '<i class="fa fa-user"></i>&nbsp;Delete member',
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
                        this.newTeamName = '';
                        return this.alertService.warning(res.message, "Warning"); 
                    }else{
                    this.userPermissionList.push(team);
                    this.newTeamName = '';
                    this.teamNameField.nativeElement.focus();
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
                        this.memObj = { userId: { firstName: this.firstName, lastName: this.lastName ,email: this.email,
                            status: {status: 'ACTIVE'}} , team: this.selectedTeamObj}
                        this.userPermissionMemberList.push(this.memObj);
                        this.filterMemberList.push(this.memObj);
                        this.firstName = '';
                        this.lastName = '';
                        this.userName = '';
                        this.email = '';
                        this.password = '';
                        this.newMemberUserCode = res.userCode;
                        return this.alertService.success("Member has saved successfully ", "Success");   
                    }
               });
            }
        } 
 }
    editTeam(){
        this.addUpdateTeamModal.open();
        this.updateTeamName = this.selectedUserPermissionObj.team.teamName;
        this.userPermissionList.splice(this.userPermissionList.indexOf(this.selectedUserPermissionObj), 1);
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
                   this.userPermissionList.push(team
                );
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
               this.filterMemberList = [];
               this.showSelectedTeam = false;
               return this.alertService.success("Team has deleted successfully ", "Success");   
                }
            });
    }
   
    editMember(member){
        this.filterMemberList.splice(this.filterMemberList.indexOf(member), 1);
        if(member.userId.status.status === "ACTIVE"){
            this.updatedUserStaus = true;    
        }else{
            this.updatedUserStaus =false;
        }
        this.UpdateMemberModal.open();
        this.updatedFirstName = member.userId.firstName;
        this.updatedLastName = member.userId.lastName;
        this.updatedEmail = member.userId.email;
        this.updatedUserCode = member.userId.userCode;
        if(this.updatedUserCode === null || typeof this.updatedUserCode === "undefined" || this.updatedUserCode.trim() === "" ){
            this.updatedUserCode = this.newMemberUserCode;
        }
    }
        updateMemberDetails(){
      let currentDisplayStatus = this.getStatusByUser(this.updatedUserStaus);
            const payload = {
                firstName : this.updatedFirstName,
                lastName: this.updatedLastName,
                email: this.updatedEmail,
                userCode: this.updatedUserCode,
                status: {status: currentDisplayStatus}
            };
          this._userService.updateUserDetails(payload).subscribe(data => {
            if (data.errorFl === true || data.warningFl === true) {
                return this.alertService.warning(data.message, 'Warning');
            } else {
                this.memObj = { userId: { firstName: this.updatedFirstName, lastName: this.updatedLastName ,email: this.updatedEmail,
                    status: {status: currentDisplayStatus}} , team: this.selectedTeamObj};
                this.UpdateMemberModal.close();
                this.filterMemberList.push(this.memObj);
                return this.alertService.success("Member "+data.firstName +" " + data.lastName +" has edited successfully", 'Update Member');
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

        deleteMemberPopup(member){
            if(member.userId.status.status === "ACTIVE"){
                this.deleteMemberModal.open();
            this.selectedMember = member;
            }else{
                return this.alertService.warning("Member "+member.userId.firstName +" " + member.userId.lastName +"  has already inactive", 'Inactive Member');
            }
        }
      
        deleteMemberDetails(){
            if(this.selectedMember.userId.userCode === null || typeof this.selectedMember.userId.userCode === "undefined" || this.selectedMember.userId.userCode.trim() === "" ){
                this.selectedMember.userId.userCode = this.newMemberUserCode;
            }
               const payload = {userCode: this.selectedMember.userId.userCode};
              this._userService.deleteUser(payload).subscribe(data => {
                if (data.errorFl === true || data.warningFl === true) {
                    return this.alertService.warning(data.message, 'Warning');
                } else {
                    this.filterMemberList.splice(this.filterMemberList.indexOf(this.selectedMember), 1);
                    this.deleteMemberModal.close();
                    this.memObj = { userId: { firstName:  this.selectedMember.userId.firstName, lastName:  this.selectedMember.userId.lastName ,email:  this.selectedMember.userId.email,
                        status: {status: 'INACTIVE'}} , team: this.selectedTeamObj}
                    this.filterMemberList.push( this.memObj);
                    return this.alertService.success("Member "+data.firstName +" " + data.lastName +" has deleted successfully", 'Delete Member');
                }
            });
            }

    onPageChange(number: number) {
        this.config.currentPage = number;
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
            case 'updateMember':
                this.UpdateMemberModal.close();
                break;
            case 'deleteMember':
                this.deleteMemberModal.close();
                break;
        }
    }
}

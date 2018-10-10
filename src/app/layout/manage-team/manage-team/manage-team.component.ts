import { Component, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { TeamService } from '../../../services/team.service';
import { CustomModalComponent, CustomModalModel } from '../../dashboard/components/custom-modal/custom-modal.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AlertService } from '../../../services/alert.service';

@Component({
    selector: 'app-manage-team',
    templateUrl: './manage-team.component.html',
    styleUrls: ['./manage-team.component.scss'],
    providers: [TeamService ,AlertService],
})
export class ManageTeamComponent implements OnInit {
    newTeamName: any;
    memObj: any = {};
    i: number;
    teamCode: string;
    _teamService: TeamService;
    _userService: UserService;
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

    @ViewChild('addNewTeamModal') public addNewTeamModal: CustomModalComponent;
    newTeam: CustomModalModel = {
        titleIcon: '<i class="fa fa-user"></i>',
        title: 'New Team',
        smallHeading: 'You can add new team details here',
        body: '',
        Button1Content: '<i class="fa fa-user"></i>&nbsp;Add Team',
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


    constructor(teamService: TeamService, userService: UserService , public alertService: AlertService) {
        this._teamService = teamService;
        this._userService = userService;
    }

    ngOnInit() {
        this.showSelectedTeam =  false;
        this.selectedTeamObj = null;
        this._userService.getLoggedInUserObj().subscribe(data => {   
            if(data.errorFl === true || data.warningFl === true){
                return this.alertService.warning(data.message, "Warning"); 
            }else{  
            this.loggedInUser = data;  
            }   
         });
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
    displayTeamDetails(team) {
        this.showSelectedTeam = true;
        this.selectedTeamName = team.teamName;
        this.selectedTeamObj = team;
        this.filterMemberList = [];
      
        for (this.i = 0; this.i < this.userPermissionMemberList.length; this.i++) {
            if (this.userPermissionMemberList[this.i].team.id == team.id) {
                this.filterMemberList.push(this.userPermissionMemberList[this.i]);
            }
        }
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
                   return this.alertService.success("Team has been saved successfully ", "Success");   
                    }
                });
        }
    }

    // add new member  
    addMember() {
        if (this.firstName === "" || this.firstName === null || typeof this.firstName === "undefined") {
            return this.alertService.warning("Please Enter First Name ", "Warning");   
        }else if (this.lastName === "" || this.lastName === null || typeof this.lastName === "undefined") {
            return this.alertService.warning("Please Enter Last Name ", "Warning");   
        }  else if (this.email === "" || this.email === null || typeof this.email === "undefined") {
            return this.alertService.warning("Please Enter Email", "Warning");   
        }else if (this.userName === "" || this.userName === null || typeof this.userName === "undefined") {
            return this.alertService.warning("Please Enter UserName ", "Warning");   
        } else if (this.password === "" || this.password === null || typeof this.password === "undefined") {
            return this.alertService.warning("Please Enter Password ", "Warning");   
        }
       else {
            const payload = {
                "email": this.email,
                "password": this.password,
                "name": this.userName,
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
                        return this.alertService.success("Member has been saved successfull ", "Success");   
                    }
               });
            
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
        }
    }
}

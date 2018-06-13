import { Component, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { TeamService } from '../../../services/team.service';
import { CustomModalComponent, CustomModalModel } from '../../dashboard/components/custom-modal/custom-modal.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UserService } from '../../../services/user.service';
@Component({
    selector: 'app-manage-team',
    templateUrl: './manage-team.component.html',
    styleUrls: ['./manage-team.component.scss'],
    providers: [TeamService],
})
export class ManageTeamComponent implements OnInit {
    newTeamName: any = ' ';
    showAddTeam: boolean = false;
    showAddTeamSuccess: boolean = false;
    showAddMemberFirstName: boolean = false;
    showAddMemberUserName: boolean = false;
    showAddMemberSuccess: boolean = false;
    showAddMemberPassword: boolean = false;
    showAddMemberEmail: boolean = false;
    memObj: any = {};
    i: number;
    _teamService: TeamService;
    _userService: UserService;
    userPermissionList = [];
    userPermissionMemList = [];
    filterMemberList = [];
    selectedTeamName: any;
    user: any = {};
    firstName: any;
    lastName: any;
    userName: any;
    email: any;
    password: any;

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

   

    constructor(teamService: TeamService , userService: UserService) {
        this._teamService = teamService;
        this._userService = userService;
    }

    ngOnInit() {
        //getTeamsByLoggedInUserId webservice call
        this.userPermissionList = [];
        const payload = { email: 'rohit@coreflexsolutions.com' };
        this._teamService.getTeamsByLoggedInUserId(payload).subscribe(data => {
            this.userPermissionList = data.json();
            this.selectedTeamName = this.userPermissionList[1].team.teamName;
        });

        //getMembersByTeamId webservice call
        this.userPermissionMemList = [];
        const teamPayload = { team: 1 };
        this._teamService.getMembersByTeam(teamPayload).subscribe(data => {
            this.userPermissionMemList = data.json();
        });
    }
    displayTeamDetails(teamCode, teamName ,team) {
        this.selectedTeamName = teamName;
        this.userPermissionMemList = [];
        const teamPayload = { teamCode: teamCode };
        this._teamService.getMembersByTeam(teamPayload).subscribe(data => {
            this.userPermissionMemList = data.json();
        });
        for(this.i=0; this.i<this.userPermissionList.length; this.i++) {
            alert(team.id);
            if(this.userPermissionList[1] == team) {
                this.filterMemberList.push(this.userPermissionList[this.i]);
            }
        }
        alert(this.filterMemberList.length);
    }
    //to open modal popup
    open() {
        this.addNewTeamModal.open();
    }
    openMemberPopup() {
        this.addNewMemberModal.open();
    }
    addTeam(newTeamName) {
        if(newTeamName === "" || newTeamName === null || typeof newTeamName === "undefined"){
            this.showAddTeam = true;
            setTimeout(function() {
                this.showAddTeam = false;
            }.bind(this), 5000);
        } else{
            this.showAddTeam = false;
            const payload = { "teamName": newTeamName  };
              //  const payload = {firstName,lastName};
                this._teamService.saveTeamDetails(payload).subscribe(
                  (res) => {
                   
                     // saveAs(res, payload.firstName,payload.lastName); 
                  });
                  const team = { team: { teamName: newTeamName } };
                  this.userPermissionList.push(team);
                  this.newTeamName = '';
                  this.showAddTeamSuccess = true;
                  setTimeout(function() {
                      this.showAddTeamSuccess = false;
                  }.bind(this), 5000);
              }
           
        }
       
    //focus on team name text field
      typeTeamNameFocus() {
       this.showAddTeam = false;
        }
     // add new member  
    addMember(firstName ,lastName,userName,password,email) {
        if(firstName === "" || firstName === null || typeof firstName === "undefined"){
            this.showAddMemberFirstName = true;
            setTimeout(function() {
                this.showAddMemberFirstName = false;
            }.bind(this), 5000);
        } else  if(userName === "" || userName === null || typeof userName === "undefined"){
            this.showAddMemberUserName = true;
            setTimeout(function() {
                this.showAddMemberUserName = false;
            }.bind(this), 5000);
        } else  if(password === "" || password === null || typeof password === "undefined"){
            this.showAddMemberPassword = true;
            setTimeout(function() {
                this.showAddMemberPassword = false;
            }.bind(this), 5000);
        }else  if(email === "" || email === null || typeof email === "undefined"){
            this.showAddMemberEmail = true;
            setTimeout(function() {
                this.showAddMemberEmail = false;
            }.bind(this), 5000);
        }
        else{
            this.showAddMemberFirstName = false;
            this.showAddMemberUserName = false;
            this.showAddMemberPassword = false;
            this.showAddMemberEmail = false;
            this.showAddMemberSuccess = true;
            setTimeout(function() {
                this.edited = false;
                console.log(this.showAddMemberSuccess);
            }.bind(this), 5000);
          
        
           const payload =  {
            "email": this.email,
            "password": this.password,
            "name": this.userName,
            "lastName": this.lastName,
            "firstName": this.firstName,
            "status.onlineStatus": false,
            
        }
           this._userService.saveUserDetails(payload).subscribe(
            (res) => {
             
               // saveAs(res, payload.firstName,payload.lastName); 
            });
            this.memObj = {user: {firstName: firstName , lastName : lastName }}
            this.userPermissionMemList.push(this.memObj);
        }
            this.firstName = ' ';
            this.lastName = '';
            this.userName = '';
            this.email = '';
            this.password = '';
    }

    //focus on member name text field
    typeMemberNameFocus() {
        this.showAddMemberFirstName = false;
        this.showAddMemberUserName = false;
        this.showAddMemberPassword = false;
        this.showAddMemberEmail = false;
  }
    //close team modal popup
    closeTeamPopup(popupType) {
        switch (popupType) {
            case 'addNewTeam':
                this.addNewTeamModal.close();
                break;
        }
    }

     //close member modal popup
     closeMemberPopup(popupType) {
        switch (popupType) {
            case 'addNewMember':
                this.addNewMemberModal.close();
                break;
        }
    }
}

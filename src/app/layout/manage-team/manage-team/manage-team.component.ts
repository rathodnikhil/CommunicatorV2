import { Component, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { TeamService } from '../../../services/team.service';
import { CustomModalComponent, CustomModalModel } from '../../dashboard/components/custom-modal/custom-modal.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
    selector: 'app-manage-team',
    templateUrl: './manage-team.component.html',
    styleUrls: ['./manage-team.component.scss'],
    providers: [TeamService],
})
export class ManageTeamComponent implements OnInit {
    newTeamName: any = ' ';
    newMemberName: any = ' ';
    showAddTeam: boolean = false;
    showAddTeamSuccess: boolean = false;
    showAddMemberFirstName: boolean = false;
    showAddMemberLastName: boolean = false;
    showAddMemberSuccess: boolean = false;
    memObj: any = {};
    _teamService: TeamService;
    userPermissionList = [];
    userPermissionMemList = [];
    selectedTeamName: any;
    user: any = {}
    @ViewChild('addNewTeamModal') public addNewTeamModal: CustomModalComponent;
    newTeam: CustomModalModel = {
        titleIcon: '<i class="fa fa-user"></i>',
        title: 'New Team',
        smallHeading: 'You can add new team details here',
        body: '<div class="row"><div class="col-md-3"><label>Team Name</label></div><div><input placeholder="Type Name Here.."/>' +
            '</div></div>',
        Button1Content: '<i class="fa fa-user"></i>&nbsp;Add Team',
        Button2Content: ''
    };

    @ViewChild('addNewMemberModal') public addNewMemberModal: CustomModalComponent;
    newMember: CustomModalModel = {
        titleIcon: '<i class="fa fa-user"></i>',
        title: 'New Member',
        smallHeading: 'You can add new member details here',
        body: '<div class="row"><div class="col-md-3"><label>Member Name</label></div><div><input placeholder="Type Name Here.."/>' +
            '</div></div>',
        Button1Content: '<i class="fa fa-user"></i>&nbsp;Add Member',
        Button2Content: ''
    };

   

    constructor(teamService: TeamService) {
        this._teamService = teamService;
    }

    ngOnInit() {
        //getTeamsByLoggedInUserId webservice call
        this.userPermissionList = [];
        const payload = { loggedInUserId: 1 };
        this._teamService.getTeamsByLoggedInUserId(payload).subscribe(data => {
            this.userPermissionList = data.json();
            this.selectedTeamName = this.userPermissionList[1].teamId.teamName;
        });

        //getMembersByTeamId webservice call
        this.userPermissionMemList = [];
        const teamPayload = { teamId: 1 };
        this._teamService.getMembersByTeam(teamPayload).subscribe(data => {
            this.userPermissionMemList = data.json();
        });

    }
    displayTeamDetails(teamId, teamName) {
        this.selectedTeamName = teamName;
        this.userPermissionMemList = [];
        const teamPayload = { teamId: teamId };
        this._teamService.getMembersByTeam(teamPayload).subscribe(data => {
            this.userPermissionMemList = data.json();
        });
    }
    //to open modal popup
    open() {
        this.addNewTeamModal.open();
    }
    openMemberPopup() {
        this.addNewMemberModal.open();
    }
    addTeam(newTeamName) {
        alert(newTeamName);
        if(newTeamName === "" || newTeamName === null || typeof newTeamName === "undefined"){
            alert('1');
            this.showAddTeam = true;
        } else{
            alert('2');
            this.showAddTeam = false;
            this.showAddTeamSuccess = true;
            this._teamService.saveTeamDetails(newTeamName).subscribe(data => {
                alert('1');
               // add a check to add to list only in case of success
                const team = { teamId: { teamName: newTeamName } };
                this.userPermissionList.push(team);
                this.newTeamName = ' ';
                this.addNewTeamModal.close();
            });
            const team = { teamId: { teamName: newTeamName } };
            this.userPermissionList.push(team);
        }
       }
    //focus on team name text field
      typeTeamNameFocus() {
       this.showAddTeam = false;
        }
     // add new member  
    addMember(newMemberName,newMemberLastName) {
        if(newMemberName === "" || newMemberName === null || typeof newMemberName === "undefined"){
            this.showAddMemberFirstName = true;
        } else  if(newMemberLastName === "" || newMemberLastName === null || typeof newMemberLastName === "undefined"){
            this.showAddMemberLastName = true;
        }
        else{
            this.showAddMemberFirstName = false;
            this.showAddMemberLastName = false;
            this.showAddMemberSuccess = true;
            alert(newMemberName);
           this.memObj = {user: {name: newMemberName , lastName : newMemberLastName }}
            this.userPermissionMemList.push(this.memObj);
        }
           // this.newMemberName = ' ';
    }

    //focus on member name text field
    typeMemberNameFocus() {
        this.showAddMemberFirstName = false;
        this.showAddMemberLastName = false;
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

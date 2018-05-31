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

    _teamService: TeamService;
    userPermissionList = [];
    userPermissionMemList = [];
    selectedTeamName: any;

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
    CreateTeam(newTeamName) {
            alert(newTeamName);
            this.newTeamName = ' ';
            this.userPermissionList.push(newTeamName);
            const teamPayload = {"teamName" : 'new Team' }
            this._teamService.saveTeamDetails(teamPayload).subscribe(data => {
              alert('1');
            });    
       }
    createMember(newMemberName) {
        alert(newMemberName);
            this.newMemberName = ' ';
    }
    close(popupType) {
        switch (popupType) {
            case 'AddNewTeam':
                this.addNewTeamModal.close();
                break;
        }
    }
}

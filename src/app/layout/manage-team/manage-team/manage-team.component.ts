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
    teamCode: string;
    _teamService: TeamService;
    _userService: UserService;
    userPermissionList = [];
    userPermissionMemberList = [];
    filterMemberList = [];
    teamList = [];
    selectedTeamName: any;
    user: any = {};
    // firstName: any;
    // lastName: any;
    // userName: any;
    // email: any;
    // password: any;

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


    constructor(teamService: TeamService, userService: UserService) {
        this._teamService = teamService;
        this._userService = userService;
    }

    ngOnInit() {

        //getTeamsByLoggedInUserId webservice call
        const payload = { email: 'rohit@coreflexsolutions.com' };
        this._teamService.setTeamsByLoggedInUserId(payload);
        this._teamService.getTeamListByLoggedInUserId().subscribe(data => {
            this.userPermissionList = data;
        });

        this._teamService.setMembersByLoggedInUserId(payload);
        this._teamService.getMemberListByLoggedInUserId().subscribe(data => {
            this.userPermissionMemberList = data;
        });
       
    }
    displayTeamDetails(team) {
        this.selectedTeamName = team.teamName;
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
        this.addNewMemberModal.open();
    }
    addTeam(newTeamName) {
        if (newTeamName === "" || newTeamName === null || typeof newTeamName === "undefined") {
            this.showAddTeam = true;
            setTimeout(function () {
                this.showAddTeam = false;
            }.bind(this), 5000);
        } else {
            this.showAddTeam = false;
            const payload = { "teamName": newTeamName };
            const team = { team: { teamName: newTeamName } };
            //  const payload = {firstName,lastName};
            this._teamService.saveTeamDetails(payload).subscribe(
                (res) => {
                    this.userPermissionList.push(team);
                    this.newTeamName = '';
                    this.showAddTeamSuccess = true;
                    setTimeout(function () {
                        this.showAddTeamSuccess = false;
                    }.bind(this), 5000);
                });
        }
    }

    //focus on team name text field
    typeTeamNameFocus() {
        this.showAddTeam = false;
    }
    // add new member  
    addMember() {
    
        // if (this.firstName === "" || this.firstName === null || typeof this.firstName === "undefined") {
        //     this.showAddMemberFirstName = true;
        //     setTimeout(function () {
        //         this.showAddMemberFirstName = false;
        //     }.bind(this), 5000);
        // } else if (this.userName === "" || this.userName === null || typeof this.userName === "undefined") {
        //     this.showAddMemberUserName = true;
        //     setTimeout(function () {
        //         this.showAddMemberUserName = false;
        //     }.bind(this), 5000);
        // } else if (this.password === "" || this.password === null || typeof this.password === "undefined") {
        //     this.showAddMemberPassword = true;
        //     setTimeout(function () {
        //         this.showAddMemberPassword = false;
        //     }.bind(this), 5000);
        // } else if (this.email === "" || this.email === null || typeof this.email === "undefined") {
        //     this.showAddMemberEmail = true;
        //     setTimeout(function () {
        //         this.showAddMemberEmail = false;
        //     }.bind(this), 5000);
        // }
      //  else {
        //  alert(newTeamName);
            this.showAddMemberFirstName = false;
            this.showAddMemberUserName = false;
            this.showAddMemberPassword = false;
            this.showAddMemberEmail = false;
            this.showAddMemberSuccess = true;
            setTimeout(function () {
                this.edited = false;
                console.log(this.showAddMemberSuccess);
            }.bind(this), 5000);


            // const payload = {
            //     "email": email,
            //     "password": password,
            //     "name": userName,
            //     "lastName": lastName,
            //     "firstName": firstName,
            //     "status.onlineStatus": false,

            // }
            // this._userService.saveUserDetails(payload).subscribe(
            //     (res) => {
                    alert('Member has been saved successfully');
                    // saveAs(res, payload.firstName,payload.lastName); 
                    // this.firstName = ' ';
                    // this.lastName = '';
                    // this.userName = '';
                    // this.email = '';
                    // this.password = '';
                  //  this.memObj = { userId: { firstName: firstName, lastName: lastName } }
                    this.userPermissionMemberList.push(this.memObj);
          //      });
          
      //  }
    
    }

    //focus on member name text field
    typeMemberNameFocus() {
        this.showAddMemberFirstName = false;
        this.showAddMemberUserName = false;
        this.showAddMemberPassword = false;
        this.showAddMemberEmail = false;
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

    //close member modal popup
    closeMemberPopup(popupType) {
        switch (popupType) {
            case 'addNewMember':
                this.addNewMemberModal.close();
                break;
        }
    }
}

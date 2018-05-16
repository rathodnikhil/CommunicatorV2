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

    @ViewChild('inviteAttendeesModal') public inviteAttendeesModal: CustomModalComponent;
    InviteAttendees: CustomModalModel = {
        titleIcon: '<i class="fa fa-user"></i>',
        title: 'Profile Details',
        smallHeading: 'You can change your profile details here',
        body: '<div class="row"><div class="col-md-4"><label>Display Name</label></div><div class="col-md-5"> Chetan Patwardhan</div>'
           +  '<div class="col-md-3"><a>Change</a></div></div><div class="row"><div class="col-md-4">'
            + 'Display Picture</div>'
             + '<div class="col-md-3">'
            + '<i class="fa fa-user" style="font-size:200px;"></i></div>'
            + '<div class="col-md-5"><a style="text-decoration : underline">Change Picture</a><br><a>Remove Picture</a></div>'
            + '<hr></div>',
        Button1Content: '<i class="fa fa-user"></i>&nbsp;Add team',
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
    const payload = {loggedInUserId: 1};
    this._teamService.getTeamsByLoggedInUserId(payload).subscribe(data => {
        this.userPermissionList = data.json();
        this.selectedTeamName = this.userPermissionList[1].teamId.teamName;
    });

    //getMembersByTeamId webservice call
this.userPermissionMemList = [];
const teamPayload = {teamId: 1};
    this._teamService.getMembersByTeam(teamPayload).subscribe(data => {
         this.userPermissionMemList = data.json();
     });

  }
displayTeamDetails(teamId , teamName) {
   this.selectedTeamName = teamName;
    this.userPermissionMemList = [];
    const teamPayload = {teamId: teamId};
        this._teamService.getMembersByTeam(teamPayload).subscribe(data => {
             this.userPermissionMemList = data.json();
         });
}
//to open modal popup
open() {
  alert();
    this.inviteAttendeesModal.open();
}
updateProfileevent(event) {

}


}

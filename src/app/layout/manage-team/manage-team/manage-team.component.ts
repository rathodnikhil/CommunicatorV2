import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../../services/team.service';

@Component({
  selector: 'app-manage-team',
  templateUrl: './manage-team.component.html',
  styleUrls: ['./manage-team.component.scss'],
  providers: [TeamService]
})
export class ManageTeamComponent implements OnInit {
_teamService: TeamService;
userPermissionList = [];
userPermissionMemList = [];
  constructor(teamService: TeamService) {
      this._teamService = teamService;
   }

  ngOnInit() {
      //getTeamsByLoggedInUserId webservice call
    this.userPermissionList = [];
    const payload = {loggedInUserId: 1};
    this._teamService.getTeamsByLoggedInUserId(payload).subscribe(data => {
        this.userPermissionList = data.json();
    });

    //getMembersByTeamId webservice call
this.userPermissionMemList = [];
const teamPayload = {teamId: 1};
    this._teamService.getMembersByTeam(teamPayload).subscribe(data => {
         this.userPermissionMemList = data.json();
     });

  }
displayTeamDetails(teamId) {
alert(teamId);
}
}

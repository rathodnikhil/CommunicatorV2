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
  constructor(teamService: TeamService) {
      this._teamService = teamService;
   }

  ngOnInit() {
    this.userPermissionList = [];
    const payload = {loggedInUserId: 1};
    this._teamService.getTeamsByLoggedInUserId(payload).subscribe(data => {
       // debugger;
        this.userPermissionList = data.json();
    });

  }

}

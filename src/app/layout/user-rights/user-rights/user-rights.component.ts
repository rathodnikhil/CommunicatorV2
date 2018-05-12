import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../../services/team.service';

@Component({
  selector: 'app-user-rights',
  templateUrl: './user-rights.component.html',
  styleUrls: ['./user-rights.component.scss'],
  providers: [TeamService]
})
export class UserRightsComponent implements OnInit {
_teamService: TeamService;
userPermissionList = [];
userPermissionMemberList = [];
  constructor(teamService: TeamService) {
      this._teamService = teamService;
   }

  ngOnInit() {
    this.userPermissionList = [];
    const payload = {loggedInUserId: 1};
    this._teamService.getTeamsByLoggedInUserId(payload).subscribe(data => {
         this.userPermissionList = data.json();
         alert(this.userPermissionList.length);
     });
     this._teamService.getMembersByLoggedInUserId(payload).subscribe(data => {
        this.userPermissionMemberList = data.json();
        alert(this.userPermissionMemberList.length);
    });
  }

}

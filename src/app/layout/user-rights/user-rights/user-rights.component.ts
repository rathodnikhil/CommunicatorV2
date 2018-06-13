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
payloadSearch: any;
  constructor(teamService: TeamService) {
      this._teamService = teamService;
   }

  ngOnInit() {
    this.userPermissionList = [];
    const payload = {email: 'rohit@coreflexsolutions.com'};
    this._teamService.getTeamsByLoggedInUserId(payload).subscribe(data => {
         this.userPermissionList = data.json();
     });
     this._teamService.getMembersByLoggedInUserId(payload).subscribe(data => {
        this.userPermissionMemberList = data.json();
    });
  }
  filterMemberByTeam(event , selectedTeamId) {
    this.payloadSearch = {teamId: selectedTeamId};
      if (event.target.checked) {
        this._teamService.getMembersByTeam(this.payloadSearch).subscribe(data => {
            this.userPermissionMemberList = data.json();
        });
      } else {
        alert('checkbox is unchecked');
      }
  }
}

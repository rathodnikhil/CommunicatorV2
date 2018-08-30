import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../../services/team.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-rights',
  templateUrl: './user-rights.component.html',
  styleUrls: ['./user-rights.component.scss'],
  providers: [TeamService]
})
export class UserRightsComponent implements OnInit {
_teamService: TeamService;
_userService: UserService;
userPermissionList = [];
userPermissionMemberList = [];
payloadSearch: any;
loggedInUser: any;
  constructor(teamService: TeamService , userService: UserService) {
      this._teamService = teamService;
      this._userService = userService;
   }

  ngOnInit() {
    this._userService.getLoggedInUserObj().subscribe(data => {     
      this.loggedInUser = data;     
   });
    this.userPermissionList = [];
    const payload = {userCode: this.loggedInUser.userCode};
    this._teamService.getTeamsByLoggedInUserId(payload).subscribe(data => {
         this.userPermissionList = data;
     });

     this._teamService.getMemberListByLoggedInUserId(payload).subscribe(data => {
          this.userPermissionMemberList = data;
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
  sceduleMeetingRight(){
    alert('this.sceduleMeetingRight clicked');
  }
}

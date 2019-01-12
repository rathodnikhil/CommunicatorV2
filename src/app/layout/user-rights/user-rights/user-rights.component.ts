import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../../services/team.service';
import { UserService } from '../../../services/user.service';
import { PaginationInstance } from 'ngx-pagination';
import { AlertService } from '../../../services/alert.service';
import { MeetingService } from '../../../services/meeting-service';
@Component({
  selector: 'app-user-rights',
  templateUrl: './user-rights.component.html',
  styleUrls: ['./user-rights.component.scss'],
  providers: [TeamService , AlertService]
})
export class UserRightsComponent implements OnInit {
_teamService: TeamService;
_userService: UserService;
_meetingService: MeetingService;

public filter: string = '';
public maxSize: number = 7;
public directionLinks: boolean = true;
public autoHide: boolean = false;
public responsive: boolean = false;
public config: PaginationInstance = {
    id: 'userCode',
    itemsPerPage: 3,
    currentPage: 1
};
public labels: any = {
    previousLabel: 'Previous',
    nextLabel: 'Next',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
};
loggedInUser: any;
searchText: string;

userPermissionList = [];
userPermissionMemberList = [];
meetingPermissionList = [];
payloadSearch: any;

  constructor(teamService: TeamService , userService: UserService ,public alertService: AlertService , meetingService: MeetingService) {
      this._teamService = teamService;
      this._userService = userService;
      this._meetingService = meetingService;
   }

  ngOnInit() {
    this._userService.getLoggedInUserObj().subscribe(data => {     
      this.loggedInUser = data;     
   });
    this.userPermissionList = [];
    const payload = {userCode: this.loggedInUser.userCode};
    this._teamService.getTeamsByLoggedInUserId(payload).subscribe(data => {
         if(data[0].errorFl || data[0].warningFl){
          this.userPermissionList = [];
          return this.alertService.warning(data[0].message, "Warning"); 
      } else{
        this.userPermissionList = data;
      }
     });

     this._teamService.getMemberListByLoggedInUserId(payload).subscribe(data => {
          if(data[0].errorFl || data[0].warningFl){
            this.userPermissionMemberList = [];
            return this.alertService.warning(data[0].message, "Warning"); 
        } else{
          this.userPermissionMemberList = data;
        }
      });
   
  }

  scheduleMeetingRight(user , event){
    let statusFlag = null;
   if(event.target.checked === true){
       statusFlag = {status : "ACTIVE"};
   }else{
    statusFlag = {status : "INACTIVE"};
   }
    let object = {user : user , meetingFlag: statusFlag}
    this.meetingPermissionList.push(object);
  }
  onPageChange(number: number) {
    // console.log('change to page', number);
    this.config.currentPage = number;
}
assignMeetingPermission(){
  this._meetingService.saveMeetingPermission(this.meetingPermissionList).subscribe(data => {
    if(data.errorFl || data.warningFl){
      //this.userPermissionMemberList = [];
      return this.alertService.warning(data.message, "Warning"); 
  } else{
    return this.alertService.warning("Meeting Permission has saved successfully", "Warning"); 
  }
});
}
}

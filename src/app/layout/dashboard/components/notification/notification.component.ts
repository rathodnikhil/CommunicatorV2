import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { GroupService } from '../../../../services/group.service';
import { LoginService } from '../../../../services/login.service';
@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
    joinMeeting: boolean;
    activeStatus: boolean;
    meetingMember: boolean;
    jwtToken: string;
    userList = [];
    groupList = [];
    _userService: UserService;
    _groupService: GroupService;
    _loginService: LoginService;
    constructor(userService: UserService , groupService: GroupService , loginService: LoginService) {
        this._userService = userService;
        this._groupService = groupService;
        this._loginService = loginService;
    }
    ngOnInit() {
        this.activeStatus = true;
        this.joinMeeting = true;
        this.meetingMember = true;
const payload = {
	"name":"asdd"
};
      //  const payload = {email: 'rohit@coreflexsolutions.com' };
        // this.jwtToken = this._loginService.getJwtToken();
        //  this._userService.getUserList(payload,this.jwtToken).subscribe(data => {
        //     // this.userList = data.json();
        // });
        this._userService.getUserList(payload,this.jwtToken);
        //to fetch group list
    //     const payloadGroup = {id: 1 };
    //     this._groupService.getGroupByLoggedInUserId(payloadGroup).subscribe(data => {
    //         this.groupList = data.json();
    //     });
     }
    viewMemeberDetails(user) {
        // alert('Selected Memeber is : ' + user.name + user.lastName);
        this._userService.setSelectedUser(user);
    }
}

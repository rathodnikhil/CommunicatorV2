import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { GroupService } from '../../../../services/group.service';
import { LoginService } from '../../../../services/login.service';
import { Router } from '@angular/router';
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
    loggedInUser: any;
    constructor(userService: UserService, groupService: GroupService, loginService: LoginService, private router: Router) {
        this._userService = userService;
        this._groupService = groupService;
        this._loginService = loginService;
    }
    ngOnInit() {
        this.activeStatus = true;
        this.joinMeeting = true;
        this.meetingMember = true;
        this._userService.getLoggedInUserObj().subscribe(data => {     
            this.loggedInUser = data;     
         });
        const payload = { userCode:  this.loggedInUser.userCode};
        this._userService.setUserList(payload);
        this._userService.getUserList().subscribe(data => {            
            this.userList = data;            
        }, err => {
            // alert(err);
            this.router.navigate(['/login']);
         });
         
        this._groupService.setGroupList(payload);
        this._groupService.getGroupList().subscribe(data => {            
            this.groupList = data;     
        }, err => {
            // alert(err);
            this.router.navigate(['/login']);
         });
    }
    viewMemeberDetails(user) {
        this._userService.setSelectedUser(user);
    }
}

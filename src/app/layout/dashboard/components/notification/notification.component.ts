import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { GroupService } from '../../../../services/group.service';
@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
    joinMeeting: boolean;
    activeStatus: boolean;
    meetingMember: boolean;
    userList = [];
    groupList = [];
    _userService: UserService;
    _groupService: GroupService;
    constructor(userService: UserService , groupService: GroupService) {
        this._userService = userService;
        this._groupService = groupService;
    }
    ngOnInit() {
        this.activeStatus = true;
        this.joinMeeting = true;
        this.meetingMember = true;

        const payload = { id: 2 };
        this._userService.getUserList(payload).subscribe(data => {
            this.userList = data.json();
        });

        //to fetch group list
        this._groupService.getGroupByLoggedInUserId(payload).subscribe(data => {
            this.groupList = data.json();
        });
    }
    viewMemeberDetails(user) {
        // alert('Selected Memeber is : ' + user.name + user.lastName);
        this._userService.setSelectedUser(user);
    }
}

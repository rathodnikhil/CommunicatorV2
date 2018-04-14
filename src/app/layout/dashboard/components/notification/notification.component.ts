import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
    joinMeeting: boolean;
    activeStatus: boolean;
    meetingMember: boolean;
    memberArray = ['Mahadev Mandale', 'Kuldeep Kulkarni', 'Martina Makasare', 'Avinash Prachand'];
    userList = [];
    _userService: UserService;
    constructor(userService: UserService) {
        this._userService = userService;
     }
    ngOnInit() {
        this.activeStatus = true;
        this.joinMeeting = true;
        this.meetingMember = true;

        const payload = {loggedInUserId: 2};
        this._userService.getUserList(payload).subscribe(data => {
            // debugger;
            this.userList = data.json();
        });
     }
}

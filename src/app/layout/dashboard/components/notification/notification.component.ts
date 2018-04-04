import { Component, OnInit } from '@angular/core';
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
    constructor() { }
    ngOnInit() {
        this.activeStatus = true;
        this.joinMeeting = true;
        this.meetingMember = true;
     }
}

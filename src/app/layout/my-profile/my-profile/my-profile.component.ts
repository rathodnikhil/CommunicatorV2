import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { MeetingServiceService } from '../../../services/meeting-service.service';
import { GroupService } from '../../../services/group.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-my-profile',
    templateUrl: './my-profile.component.html',
    styleUrls: ['./my-profile.component.scss'],
    providers: [UserService, MeetingServiceService, GroupService]
})
export class MyProfileComponent implements OnInit {
    loggedInUser: any;
    _userService: UserService;
    _meetingservice: MeetingServiceService;
    _groupService: GroupService;
    totalMeetingCount: any;
    totalGroupCount: any;
    constructor(userService: UserService, meetingService: MeetingServiceService, groupService: GroupService, private router: Router) {
        this._userService = userService;
        this._meetingservice = meetingService;
        this._groupService = groupService;
    }
    ngOnInit() {
        // webservice to get profile details
        this.loggedInUser = {
            'id': 2,
            'email': 'b@gmail.com',
            'password': '1235',
            'name': 'sunita',
            'lastName': 'kolhapure',
            'active': 1,
            'teamId': {
                'prime': null,
                'errorFl': false,
                'warningFl': false,
                'message': null,
                'teamId': 1,
                'teamName': 'cfs_pune',
                'status': {
                    'statusId': 1,
                    'status': 'Active'
                }
            },
            'profileImgPath': null
        };
        const payload = { id: 2 };
        this._userService.getLoggedInUSerDetails().subscribe(data => {
            if (Object.keys(data).length === 0) {
                this.router.navigate(['/login']);
            } else {
                this.loggedInUser = data;
            }
        });
        // webservice to get total meeting count

        this.totalMeetingCount = {};
        this._meetingservice.getTotalMeetingCountByLoggedInUserId(payload).subscribe(data => {
            this.totalMeetingCount = data.json();
        });

        this.totalGroupCount = {};
        this._groupService.getTotalGroupByLoggedInUserId(payload).subscribe(data => {
            this.totalGroupCount = data.json();
            alert(this.totalGroupCount);
        });
    }

}

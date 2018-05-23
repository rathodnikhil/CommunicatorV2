import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
@Component({
    selector: 'app-default-chat',
    templateUrl: './default-chat.component.html',
    styleUrls: ['./default-chat.component.scss']
})
export class DefaultChatComponent implements OnInit {

    loggedInUser: any;
    _userService: UserService;
    constructor(userService: UserService) {
        this._userService = userService;
    }
    ngOnInit() {
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
        const payload = { loggedInUserId: 2 };
        this._userService.getLoggedInUSerDetails(payload).subscribe(data => {
            this.loggedInUser = data.json();
        });
    }

}

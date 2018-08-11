import { Component, OnInit, AfterViewInit, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { UserService } from '../../../../services/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-video-call',
    templateUrl: './video-call.component.html',
    styleUrls: ['./video-call.component.scss']
})
export class VideoCallComponent implements OnInit, AfterViewInit {
    loggedInUser: any;
    selectedUser: any;
    _userService: UserService;
    constructor(@Inject(DOCUMENT) private document, private elementRef: ElementRef, userService: UserService, private router: Router) {
        this._userService = userService;
    }
    ngAfterViewInit(): void {
        // const s = document.createElement('script');
        // s.type = 'text/javascript';
        // s.innerHTML = 'console.log(\'done\');'; // inline script
        // s.src = '../../../assets/scripts/meetingTest.js';

        // const s = this.document.createElement('script');
        // s.type = 'text/javascript';
        // s.src = '../../../assets/scripts/meetingPeer.js';
        // const __this = this; // to store the current instance to call
        // // afterScriptAdded function on onload event of
        // // script.
        // s.onload = function () { __this.afterScriptAdded(); };
        // this.elementRef.nativeElement.appendChild(s);
    }


    ngOnInit() {
        // this.loggedInUser = {
        //     'id': 2,
        //     'email': 'b@gmail.com',
        //     'password': '1235',
        //     'name': 'sunita',
        //     'lastName': 'kolhapure',
        //     'active': 1,
        //     'teamId': {
        //         'prime': null,
        //         'errorFl': false,
        //         'warningFl': false,
        //         'message': null,
        //         'teamId': 1,
        //         'teamName': 'cfs_pune',
        //         'status': {
        //             'statusId': 1,
        //             'status': 'Active'
        //         }
        //     },
        //     'profileImgPath': null
        // };
        // localStorage.setItem('loggedInuserName', this.loggedInUser.name + ' ' + this.loggedInUser.lastName);
        // this._userService.getLoggedInUSerDetails().subscribe(data => {
        //     debugger;
        //     if (Object.keys(data).length === 0) {
        //         this.router.navigate(['/login']);
        //     } else {
        //         this.loggedInUser = data;
        //     }
        // });
        this._userService.getLoggedInUserObj().subscribe(data => {
            this.loggedInUser = data;
        });
        this._userService.getSelectedUser().subscribe(data => {
            if (data == null || data === undefined || data.length === 0) {
                this.router.navigate(['/dashboard/default']);
            } else {
                this.selectedUser = data;
            }
        });
    }
    afterScriptAdded() {
        debugger;
        // const meetingName = this.document.getElementById('meeting-name');

        // meetingName.value = 'p2p_' + this.loggedInUser.name + ' ' + this.loggedInUser.lastName + '_'
        //     + this.selectedUser.firstName + ' ' + this.selectedUser.lastName;
        // this.document.getElementById('setup-meeting').click();
        // const params = {
        //     width: '350px',
        //     height: '420px',
        // };
        // if (typeof (window['functionFromExternalScript']) === 'function') {
        //     window['functionFromExternalScript'](params);
        // }
    }

}

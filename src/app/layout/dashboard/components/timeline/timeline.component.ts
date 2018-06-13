import { Component, OnInit, EventEmitter, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { CustomModalComponent, CustomModalModel } from '../custom-modal/custom-modal.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../../../services/user.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
    @ViewChild('viewProfileModal') public viewProfileModal: CustomModalComponent;
    viewProfile: CustomModalModel = {
        titleIcon: '<i class="fa fa-user"></i>',
        title: 'Profile Details',
        smallHeading: 'User profile details',
        body: '',
        Button1Content: '<i class="fa fa-user"></i>&nbsp;Update Profile',
        Button2Content: ''
    };
    selectedUser: any;
    loggedInUser: any;
    _userService: UserService;
    // router: Router;
    constructor(userService: UserService, private router: Router) {
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
        const payload = { id: 2 };
        // this._userService.getLoggedInUSerDetails().subscribe(data => {
        //     debugger;
        //     if (Object.keys(data).length === 0) {
        //         this.router.navigate(['/login']);
        //     } else {
        //         this.loggedInUser = data;
        //     }
        // });
        this._userService.getSelectedUser().subscribe(data => {
            if (data == null || data === undefined || data.length === 0) {
                this.router.navigate(['/dashboard/default']);
            } else {
                this.selectedUser = data;
            }
        });
    }
    open() {
        // alert(loggedInUser.name + loggedInUser.lastName);
        this.viewProfileModal.open();
    }
    updateProfile(event) {
        alert('copy text');
    }

    closeviewProfilePopup(popupType){
            switch (popupType) {
                case 'viewProfile':
                    this.viewProfileModal.close();
                    break;
            }
        }
}

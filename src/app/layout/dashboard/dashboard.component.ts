
import { routerTransition } from '../../router.animations';
import { AlertComponent } from 'app/layout/bs-component/components';
import { Component, OnInit, EventEmitter, Output, ViewChild, ViewContainerRef, AfterViewInit, ElementRef, Inject } from '@angular/core';
import { CustomModalComponent, CustomModalModel } from './components/custom-modal/custom-modal.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { GroupService } from '../../services/group.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { DOCUMENT } from '../../../../node_modules/@angular/common';
import { AlertService } from '../../services/alert.service';
import { MeetingService } from '../../services/meeting-service';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()],
    providers: [GroupService, AlertService]
})
export class DashboardComponent implements OnInit, AfterViewInit {
    _groupService: GroupService;
    _userService: UserService;
    _meetingService: MeetingService;
    createGroupsVal = '';
    broadcastMessage = '';
    userList = [];
    groupList = [];
    groupArray = [];
    array = [];
    i = 0;
    loggedInUserObj: any;
    loggedInUserRole: any;
    signUpflag: boolean;
    selectedUser: any;

    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    currentRoute = 0;

    @ViewChild('broadcastMsgModal') public broadcastMsgModal: CustomModalComponent;
    broadcastMsgContent: CustomModalModel = {
        titleIcon: '<i class="fa fa-user"></i>',
        title: 'New Member',
        smallHeading: 'You can add new member details here',
        body: '',
        Button1Content: '<i class="fa fa-user"></i>&nbsp;Add Member',
        Button2Content: ''
    };


    constructor(@Inject(DOCUMENT) private document, private elementRef: ElementRef,
        private groupService: GroupService, userService: UserService,
        meetingService: MeetingService, private router: Router, public alertService: AlertService) {
        this._groupService = groupService;
        this._userService = userService;
        this._meetingService = meetingService;
        this.sliders.push(
            {
                imagePath: 'assets/images/slider1.jpg',
                label: 'First slide label',
                text:
                    'Nulla vitae elit libero, a pharetra augue mollis interdum.'
            },
            {
                imagePath: 'assets/images/slider2.jpg',
                label: 'Second slide label',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                imagePath: 'assets/images/slider3.jpg',
                label: 'Third slide label',
                text:
                    'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            },
            {
                id: 2,
                type: 'warning',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            }
        );
    }

    ngOnInit() {
        this.signUpflag = false;
        // get loggedin user
        this._userService.getLoggedInUserObj().subscribe(data => {
            if (data.errorFl === true || data.warningFl === true) {
                return this.alertService.warning(data.message, 'Warning');
            } else {
                this.loggedInUserObj = data;
                const payload = { userCode: this.loggedInUserObj.userCode };
                this._groupService.setGroupList(payload);
                this._userService.setUserList(payload);
                this._groupService.setGroupListObjByLoggedInUserId(payload);
                this._userService.setUserList(payload);
                this._meetingService.setFutureMeetimgList(payload);
                this._meetingService.setRecentMeetingByUser(payload);
                this._userService.getSelectedUser().subscribe(res => {
                    // debugger
                    if (res) {
                        this.selectedUser = res;
                    }
                });
            }
        });

        let userRoleArray = [];
        userRoleArray = this.loggedInUserObj.roles;
        let roleArray = [];
        for (let i = 0; i < userRoleArray.length; i++) {
            roleArray.push(userRoleArray[i].role);
        }
        if (roleArray.indexOf('ADMINISTRATOR') === -1) {
            this.signUpflag = false;
        } else {
            this.signUpflag = true;
        }
    }
    ngAfterViewInit(): void {
        const s = this.document.createElement('script');
        s.type = 'text/javascript';
        s.src = '../../../assets/scripts/meetingPeer.js';
        const __this = this; // to store the current instance to call
        // afterScriptAdded function on onload event of
        // script.
        s.onload = function () { __this.afterScriptAdded(); };
        this.elementRef.nativeElement.appendChild(s);
    }
    afterScriptAdded() {
        // this.document.getElementById('setup-meeting').click();
    }
    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
    switchRoute(newRoute) {
        this.currentRoute = newRoute;
    }

    openMemberPopup() {
        this.broadcastMsgModal.open();
    }
    // save broadcast message
    broadcastMessages() {
        if (this.broadcastMessage === '' || this.broadcastMessage === null || typeof this.broadcastMessage === 'undefined') {
            return this.alertService.warning('Please enter message', 'Warning');
        } else {
            const payload = { 'broadcastMessage': this.broadcastMessage, generatedBy: this.loggedInUserObj };
            this._groupService.saveBroadcastMessage(payload).subscribe(data => {
                if (data.errorFl === true || data.warningFl === true) {
                    return this.alertService.warning(data.message, 'Warning');
                } else {
                    return this.alertService.success('Message has been broadcast successfully', 'Success');
                }
            });
        }
        this.broadcastMessage = ' ';
    }

    resetMsg(event) {
        alert('text reset');
    }

    // close create group modal popup
    closePopup(popupType) {
        switch (popupType) {
            case 'broadcastMessageModal':
                this.broadcastMsgModal.close();
                break;
        }
    }

}

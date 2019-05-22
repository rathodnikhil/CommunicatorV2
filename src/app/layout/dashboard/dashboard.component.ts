
import { routerTransition } from '../../router.animations';
import { Component, OnInit , ViewChild, AfterViewInit, ElementRef, Inject } from '@angular/core';
import { CustomModalComponent, CustomModalModel } from './components/custom-modal/custom-modal.component';
import { GroupService } from '../../services/group.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { DOCUMENT } from '../../../../node_modules/@angular/common';
import { AlertService } from '../../services/alert.service';
import { MeetingService } from '../../services/meeting-service';
import { ErrorMessageConstants, TypeOfError , SuccessMessage , StaticLabels} from '../../shared/errorMessageConstants';
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
    isAdministrator = false;
    i = 0;
    loggedInUserObj: any;
    loggedInUserRole: any;
    selectedUser: any;
    manageGroupFlag: boolean;
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    isUserSelected = false;
    @ViewChild('broadcastMsgModal') public broadcastMsgModal: CustomModalComponent;
    broadcastMsgContent: CustomModalModel = {
        titleIcon: '<i class="fa fa-bullhorn"></i>',
        title: 'Broadcast Message',
        smallHeading: 'You can send broadcast message from here.',
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
    }

    ngOnInit() {
        // get loggedin user
        this.loggedInUserObjApiCall();
        this.isAdministrator = this.loggedInUserObj.roles.find(x => x.role === 'ADMINISTRATOR') !== undefined;
    }
    private loggedInUserObjApiCall() {
        this._userService.getLoggedInUserObj().subscribe(data => {
            if (data.errorFl === true || data.warningFl === true) {
                return this.alertService.warning(data.message, TypeOfError.Warning);
            }  else {
                this.setLoggedInUserobjSuccessAction(data);
            }
        });
    }

    private setLoggedInUserobjSuccessAction(data: any) {
        this.loggedInUserObj = data;
        this._groupService.setGroupList();
        this._userService.setUserList();
        this.isAdministrator = this.loggedInUserObj.roles.find(x => x.role === 'ADMINISTRATOR') !== undefined;
        this.setSelectedUserApiCall();
    }

    private setSelectedUserApiCall() {
        this._userService.getSelectedUser().subscribe(res => {
            if (res) {
                this.selectedUser = res;
            }
        });
    }

    ngAfterViewInit(): void {
        (<any>window).customAlertService = this.alertService;
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

    openMemberPopup() {
        this.broadcastMsgModal.open();
    }
    // save broadcast message
    broadcastMessages() {
        if (this.broadcastMessage === '' || this.broadcastMessage === null || typeof this.broadcastMessage === StaticLabels.Undefined) {
            return this.alertService.warning(ErrorMessageConstants.EnterMsg, TypeOfError.Warning);
        } else {
            const payload = { 'broadcastMessage': this.broadcastMessage, generatedBy: this.loggedInUserObj };
            this.saveBroadcastMsgApiCall(payload);
        }
        this.broadcastMessage = ' ';
    }

    private saveBroadcastMsgApiCall(payload: { 'broadcastMessage': string; generatedBy: any; }) {
        this._groupService.saveBroadcastMessage(payload).subscribe(data => {
            if (data.errorFl === true || data.warningFl === true) {
                return this.alertService.warning(data.message, TypeOfError.Warning);
            } else {
                return this.alertService.success(SuccessMessage.broadcastMsg, SuccessMessage.SuccessHeader);
            }
        });
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
    logout() {
        const payload = { userCode: this.loggedInUserObj.userCode };
        this._userService.logoutApplication(payload).subscribe(data => {
            if (data.errorFl === true) {
                return this.alertService.warning(data.message, TypeOfError.Warning);
            } else {
                this.reloadPage();
            }
        });
    }
    private reloadPage() {
        this.router.navigate(['/login']);
        window.location.reload();
    }

    SetIsUserSelected(event) {
        this.isUserSelected = event;
    }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { GroupService } from '../../../../services/group.service';
import { LoginService } from '../../../../services/login.service';
import { Router } from '@angular/router';
import { ChatService } from '../../../../services/chat.service';
import { AlertService } from '../../../../services/alert.service';
@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss'],
    providers: [AlertService]
})
export class NotificationComponent implements OnInit {
    _userService: UserService;
    _groupService: GroupService;
    _loginService: LoginService;
    _chatService: ChatService;
    joinMeeting: boolean;
    activeStatus: boolean;
    meetingMember: boolean;
    jwtToken: string;
    selectedUser: any;
    selectedGroup: any;
    userList = [];
    searchWholeMemberList = [];
    groupList = [];
    loggedInUser: any;
    searchText: string;
    broadcastMsgList = [];
    constructor(userService: UserService, groupService: GroupService, chatService: ChatService, loginService: LoginService, 
        private router: Router,public alertService: AlertService) {
        this._userService = userService;
        this._groupService = groupService;
        this._loginService = loginService;
        this._chatService = chatService;
    }
    ngOnInit() {
        this.activeStatus = true;
        this.joinMeeting = true;
        this.meetingMember = true;
        this._userService.getLoggedInUserObj().subscribe(data => {
            if(data.errorFl === true || data.warningFl === true){
                this.loggedInUser = {};
                return this.alertService.warning(data.message, "Warning"); 
            }else{ 
            this.loggedInUser = data;
            }
        });
        this._userService.getUserList().subscribe(data => {
            // if(data[0].errorFl === true || data[0].warningFl === true){
            //     this.userList = [];
            //     return this.alertService.warning(data[0].message, "Warning"); 
            // } else{
                this.userList = data;
         //   }
        });

        this._groupService.getGroupList().subscribe(data => {
            // if(data[0].errorFl || data[0].warningFl){
            //     this.groupList = [];
            //     return this.alertService.warning(data[0].message, "Warning"); 
            // } else{
                this.groupList = data;
           // }
        });
    }
    viewMemeberDetails(user) {
        this._userService.setSelectedUser(user);
        this.getChattingHistoryBySelectedUser();
    }

    viewGroupDetails(group) {
        this._userService.setSelectedGroup(group);
        this.getChattingHistoryBySelectedGroup();
    }
    getChattingHistoryBySelectedUser() {
        this._userService.getSelectedUser().subscribe(data => {
            if (data == null || data === undefined || data.length === 0) {
                this.router.navigate(['/dashboard/default']);
            } else {
                this.selectedUser = data;
            }
        }, err => {
            // alert(err);
            this.router.navigate(['/login']);
        });
        const payload = { userFrom: this.loggedInUser.userCode, userTo: this.selectedUser.userCode };
        this._chatService.setChattingHistoryList(payload);
        this._chatService.setBroadcastMsgByLoggedInuserId(payload);

    }

    getChattingHistoryBySelectedGroup() {
        this._userService.getSelectedGroup().subscribe(data => {
            if (data == null || data === undefined || data.length === 0) {
                this.router.navigate(['/dashboard/default']);
            } else {
                this.selectedGroup = data;
            }
        });
        const payload = { userFrom: this.loggedInUser.userCode, groupCode: this.selectedGroup.groupId.groupId };
        this._chatService.setChattingHistoryList(payload);
    }
    searchInWholeMemberList() {
        if (this.searchText === "" || this.searchText === null || typeof this.searchText === "undefined") {

        } else {
            const payload = { searchText: this.searchText };
            this._userService.searchWholememberList(payload).subscribe(data => {
                if(data[0].errorFl || data[0].warningFl){
                    this.searchWholeMemberList = [];
                    return this.alertService.warning(data[0].message, "Warning"); 
                } else{
                this.searchWholeMemberList = data;
                }
            });
        }
    }
    addNewMembersInList(user) {
        const payload = {teamCode: this.loggedInUser.team.teamCode ,
             team : this.loggedInUser.team ,
             userId: user,
            createdBy: this.loggedInUser.userCode }
        this.viewMemeberDetails(user);
        this.userList.push(user);
        this.searchWholeMemberList.splice(this.searchWholeMemberList.indexOf(user), 1);
        this._userService.SaveUserPermission(payload).subscribe(data => {  
            if(data.errorFl === true || data.warningFl === true){
            return this.alertService.warning(data.message, "Warning"); 
        }else{ 
          return this.alertService.success('User has been added successfully',"Success");
        }
        });
    }
}

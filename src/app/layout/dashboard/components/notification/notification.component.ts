import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { GroupService } from '../../../../services/group.service';
import { LoginService } from '../../../../services/login.service';
import { Router } from '@angular/router';
import { ChatService } from '../../../../services/chat.service';
@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
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
    broadcastMsgList= [];
    constructor(userService: UserService, groupService: GroupService,chatService: ChatService, loginService: LoginService,  private router: Router) {
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
            this.loggedInUser = data;     
         });
        const payload = { userCode:  this.loggedInUser.userCode};
        this._userService.setUserList(payload);
        this._userService.getUserList().subscribe(data => {            
            this.userList = data;            
        }, err => {
            // alert(err);
            this.router.navigate(['/login']);
         });
         
        this._groupService.setGroupList(payload);
        this._groupService.getGroupList().subscribe(data => {            
            this.groupList = data;     
        }, err => {
            // alert(err);
            this.router.navigate(['/login']);
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
         const  payload = {userFrom: this.loggedInUser.userCode , userTo: this.selectedUser.userCode};
       this._chatService.setChattingHistoryList(payload);
       const broadcastMsgPayload = {userCode: this.selectedUser.userCode};
       this._chatService.setBroadcastMsgByLoggedInuserId(broadcastMsgPayload);

    }

    getChattingHistoryBySelectedGroup() {
            this._userService.getSelectedGroup().subscribe(data => {
                if (data == null || data === undefined || data.length === 0) {
                    this.router.navigate(['/dashboard/default']);
                } else {
                    this.selectedGroup = data;
                }
            }, err => {
                // alert(err);
                this.router.navigate(['/login']);
             });
             const  payload = {userFrom: this.loggedInUser.userCode , groupCode: this.selectedGroup.groupId.groupId};
       this._chatService.setChattingHistoryList(payload);
    }
    searchInWholeMemberList(){
        if (this.searchText === "" || this.searchText === null || typeof this.searchText === "undefined") {
         
        } else {
            const payload = {searchText : this.searchText};
            this._userService.searchWholememberList(payload).subscribe(data => {
                 this.searchWholeMemberList = data;
               });
        }
    }
    addNewMembersInList(user){
        this.viewMemeberDetails(user);
        this.userList.push(user);
        alert(this.searchWholeMemberList.indexOf(user));
        this.searchWholeMemberList.splice(this.searchWholeMemberList.indexOf(user), 1);
    }
}

import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { GroupService } from '../../../../services/group.service';
import { LoginService } from '../../../../services/login.service';
import { Router } from '@angular/router';
import { ChatService } from '../../../../services/chat.service';
import { AlertService } from '../../../../services/alert.service';
import { SpinnerComponent } from 'app/shared/modules/common-components/spinner/spinner.component';
import { ɵELEMENT_PROBE_PROVIDERS, ɵDomEventsPlugin } from '@angular/platform-browser';
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
    membersList = [];
    membersEmailList = [];
    loggedInUser: any;
    searchGroupText: string;
    searchMemText: string;
    searchAllText: string;
    broadcastMsgList = [];
    chattingHistoryList = [];
    viewAllMemFl = false;
    @Output() isUserSelected = new EventEmitter();
    @ViewChild('notificationSpinner') notificationSpinnerMod: SpinnerComponent;
    constructor(userService: UserService, groupService: GroupService, chatService: ChatService, loginService: LoginService,
        private router: Router, public alertService: AlertService) {
        this._userService = userService;
        this._groupService = groupService;
        this._loginService = loginService;
        this._chatService = chatService;
    }
    ngOnInit() {
        this.activeStatus = true;
        this.joinMeeting = true;
        this.meetingMember = true;
        this.chattingHistoryList = [];
        this._userService.getLoggedInUserObj().subscribe(data => {
            if (data.errorFl === true || data.warningFl === true) {
                this.loggedInUser = {};
                return this.alertService.warning(data.message, 'Warning');
            } else {
                this.loggedInUser = data;
                this._userService.getUserList().subscribe(userData => {
                    if (userData !== undefined && userData.length > 0) {
                        this.userList = userData;
                        this.notificationSpinnerMod.hideSpinner();
                        // alert('List size : ' + this.userList.length);
                    } else {
                        this.userList = [];
                    }
                });

                this._groupService.getGroupList().subscribe(groupData => {
                    // if ( this.loading = false) {
                    //     this.loading = true;
                    // }
                    if (groupData !== undefined && groupData.length > 0) {
                        this.groupList = groupData;
                        // this.loading = false;
                    } else {
                        this.groupList = [];
                        // this.loading = false;
                        if (groupData[0] !== undefined && groupData[0].message !== undefined) {
                            return this.alertService.warning(data[0].message, 'Warning');
                        }
                    }
                });
            }
        });

    }
    viewMemeberDetails(user) {
        this._userService.setSelectedUser(user);
        this.getChattingHistoryBySelectedUser();
        this.isUserSelected.emit(true);
    }

    viewGroupDetails(group) {
        this.chattingHistoryList = [];
        this.membersList = [];
        this.membersEmailList = [];
        this._userService.setSelectedGroup(group);
        this.getChattingHistoryBySelectedGroup();
        this.getMembersEmailList(group);
        this.isUserSelected.emit(true);
    }
    getMembersEmailList(group) {
        const payload = { groupId: group.groupId};
        this._groupService.getMemberByLocalgroup(payload).subscribe(memberData => {
            if (memberData[0] === undefined) {
                return false;
            }
            if (memberData[0].errorFl === true || memberData[0].warningFl === true) {
                return this.alertService.warning(memberData[0].message, 'Warning');
            } else {
                this.membersList = memberData;
                for (let index = 0; index < this.membersList.length; index++) {
                    this.membersEmailList.push(this.membersList[index].email);
                }
            }
        });
    }
    getChattingHistoryBySelectedUser() {
        this._userService.getSelectedUser().subscribe(data => {
            if (data == null || data === undefined || data.length === 0) {
                this.router.navigate(['/dashboard/default']);
            } else {
                if (this.selectedUser != null && this.selectedUser.userCode !== data.userCode) {
                    this.selectedUser = data;
                    const payload = { userFrom: this.loggedInUser.userCode, userTo: this.selectedUser.userCode, chatMsg: null };
                    this._chatService.getChattingHistoryList(payload);
                    this._chatService.setBroadcastMsgByLoggedInuserId(payload);
                }
            }
        });
    }

    getChattingHistoryBySelectedGroup() {
        this._userService.getSelectedGroup().subscribe(data => {
            if (data == null || data === undefined || data.length === 0) {
                this.router.navigate(['/dashboard/default']);
            } else {
                if (this.selectedUser != null && this.selectedGroup.groupId.groupId !== data.groupId.groupId) {
                    this.selectedGroup = data;
                    const payload = { userFrom: this.loggedInUser.userCode, groupCode: this.selectedGroup.groupId.groupId };
                    this._chatService.getChattingHistoryList(payload);
                }
            }
        });

    }
    searchInWholeMemberList() {
        if (this.searchAllText === '' || this.searchAllText === null || typeof this.searchAllText === 'undefined') {

        } else {
            const payload = { searchText: this.searchAllText};
            this._userService.searchWholememberList(payload).subscribe(data => {
                if (data[0].errorFl || data[0].warningFl) {
                    this.searchWholeMemberList = [];
                    return this.alertService.warning(data[0].message, 'Warning');
                } else {
                   // this.allMemFl = true;
                    this.searchWholeMemberList = data;
                    this.viewAllMemFl = true;
                }
            });
        }
    }
    onKeyUp(event) {
        if (event.key === 'Delete') {
            this.clearSerchList();
        }
    }
    clearSerchList() {
    if (this.searchAllText.length === 1 || this.searchAllText === '' || this.searchAllText === null) {
        this.searchAllText = '';
        this.viewAllMemFl = false;
   }
    }
    onKeyUpBackspace(event) {
        this.clearSerchList();
      }
    addNewMembersInList(user) {
        const payload = {
            teamCode: this.loggedInUser.team.teamCode,
            team: this.loggedInUser.team,
            userId: user,
            createdBy: this.loggedInUser.userCode
        };

        this._userService.addNewMemberFromWholeList(payload).subscribe(data => {
            if (data.errorFl === true || data.warningFl === true) {
                return this.alertService.warning(data.message, 'Warning');
            } else {
                this.searchAllText = '';
                this.userList.push(user);
                this.searchWholeMemberList.splice(this.searchWholeMemberList.indexOf(user), 1);
                return this.alertService.success('User has been added successfully', 'Success');
            }
        });
    }
}

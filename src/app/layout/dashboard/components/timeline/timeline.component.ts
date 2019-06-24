import { Component, OnInit, Inject, ElementRef, AfterViewInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { Router } from '@angular/router';
import { ChatService } from '../../../../services/chat.service';
import { AlertService } from '../../../../services/alert.service';
import { DOCUMENT } from '@angular/common';
import { TypeOfError , StaticLabels } from '../../../../shared/errorMessageConstants';
@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss'],
    providers: [AlertService]
})
export class TimelineComponent implements OnInit, AfterViewInit {

    selectedUser: any;
    selectedGroup: any;
    loggedInUser: any;
    _userService: UserService;
    _chatService: ChatService;
    enterMsgFlag: boolean;
    chattingHistoryList = [];
    chattingHistoryObj: any;
    emptyHistoryFlag: boolean;
    broadcastMsgList = [];
    chatMsg: any;
    currentTab = 'chat';
    isMute = false;
    isMeetingStarted = false;
    isScreenSharingStarted = false;
    isVideoEnabled = false;
    toggleMeeting: any;
    momTxt: any;
    muteBtnTitle = StaticLabels.Mute;
    videoBtnTitle = StaticLabels.VideoOn;
    isCallInProcess = false;
    constructor(@Inject(DOCUMENT) private document, private elementRef: ElementRef,
        userService: UserService, private router: Router, chatService: ChatService, public alertService: AlertService) {
        this._userService = userService;
        this._chatService = chatService;
    }

    ngOnInit() {
        this.selectedUser = {};
        this.getSelecteduserApiCall();
        this.setLoggedInUserApiCall();
    }
    private setLoggedInUserApiCall() {
        this._userService.getLoggedInUserObj().subscribe(data => {
            if (data.errorFl === true || data.warningFl === true) {
                this.loggedInUser = {};
                return this.alertService.warning(data.message, TypeOfError.Warning);
            } else {
                this.getLoggedInUserSuccessAction(data);
            }
        });
    }

    private getLoggedInUserSuccessAction(data: any) {
        this.loggedInUser = data;
        this.chattingHistoryList = [];
        const payload = { userFrom: this.loggedInUser.userCode, userTo: this.selectedUser.userCode, chatMsg: null };
        this._chatService.getChattingHistoryList(payload).subscribe(chatList => {
            if (!chatList[0].errorFl || chatList[0].warningFl) {
                this.chattingHistoryList = chatList;
            }
        });
        this.broadcastMsgList = [];
        this.broadcastmsgByloggedInUserApiCall();
    }

    private broadcastmsgByloggedInUserApiCall() {
        this._chatService.getBroadcastMsgByLoggedInuserId().subscribe(broadcastData => {
            if (broadcastData.length > 0) {
                if (broadcastData[0].errorFl || broadcastData[0].warningFl) {
                    this.broadcastMsgList = [];
                    return this.alertService.warning(broadcastData[0].message, TypeOfError.Warning);
                }  else {
                    this.broadcastMsgList = broadcastData;
                }
            }  else {
                this.broadcastMsgList = [];
            }
        });
    }

    // private setChattingHistoryApiCall() {
    //     this._chatService.setChattingHistoryList().subscribe(chatHistoryData => {
    //         if (chatHistoryData.length > 0) {
    //             if (chatHistoryData[0].errorFl || chatHistoryData[0].warningFl) {
    //                 this.chattingHistoryList = [];
    //                 return this.alertService.warning(chatHistoryData[0].message, TypeOfError.Warning);
    //             }  else {
    //                 this.chattingHistoryList = chatHistoryData;
    //             }
    //         } else {
    //             this.chattingHistoryList = [];
    //         }
    //     });
    // }

    private getSelecteduserApiCall() {
        this._userService.getSelectedUser().subscribe(res => {
            if (res == null || res === undefined || res.length || res.length === 0) {
                this.router.navigate(['/dashboard/default']);
            } else {
                if (res.userCode === undefined) {
                    this.router.navigate(['/dashboard/default']);
                }  else {
                    this.selectedUser = res;
                }
            }
        });
    }

    ngAfterViewInit(): void {
        const s = this.document.createElement('script');
        s.type = 'text/javascript';
        s.src = '../../../assets/scripts/PeerChat.js';
        const __this = this; // to store the current instance to call
        // afterScriptAdded function on onload event of
        // script.
        s.onload = function () { __this.afterScriptAdded(); };
        this.elementRef.nativeElement.appendChild(s);
    }
    afterScriptAdded() {
        // this.document.getElementById('setup-meeting').click();
        const ifMeetingWasInitiated = localStorage.getItem('P2PChatInitiated');
        if (ifMeetingWasInitiated != null && ifMeetingWasInitiated.indexOf(this.selectedUser) >= 0) {
            this.document.getElementById('room-id').value = localStorage.getItem('P2PChatInitiated');
        } else {
            this.document.getElementById('room-id').value = 'Peer2PeerMeet_' + localStorage.getItem('loggedInuserName');
        }
    }

    sendMessage() {
        const payload = {
            userFrom: this.loggedInUser.userCode,
            userTo: this.selectedUser.userCode,
            chatMsg: this.chatMsg
        };
        if (this.chatMsg === '' || this.chatMsg === null || typeof this.chatMsg === 'undefined') {
            this.alertService.warning('Enter Message', TypeOfError.Warning);
        } else {
            this._chatService.saveChat(payload).subscribe(data => {
                if (data.errorFl === true || data.warningFl === true) {
                    return this.alertService.warning(data.message, TypeOfError.Warning);
                }
            });
        }
    }
    onKey(event) {
        this.sendMessage();
    }
    onFinished() {
        this.alertService.warning('Meeting time has lapsed.', 'Meeting time over!');
        this.document.getElementById('btn-end-meeting').click();
        this.alertService.warning('Your session will be over in 3 minutes.Kindly save the mom before that!', 'Session about to get over!');
        setTimeout(() => {
            this.router.navigate(['/login']);
            window.location.reload();
        }, 180000);
    }
    onNotify() {
        this.alertService.warning('Meeting will end in 5 mins and you will be redirected to login page.', 'Meeting about to end!');
    }
    switchTab(tab) {
        this.currentTab = tab;
        this.toggleMeeting = true;
    }
    closeToggle() {
        this.toggleMeeting = false;
    }
    mute() {
        this.isMute = !this.isMute;
    }
    shareScreen() {
        this.isScreenSharingStarted = !this.isScreenSharingStarted;
    }
    viewVideo() {
        this.isVideoEnabled = !this.isVideoEnabled;
    }
    exitMeeting() {

    }
}

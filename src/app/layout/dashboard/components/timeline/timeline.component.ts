import { Component, OnInit, Inject, ElementRef, AfterViewInit, ViewChild, } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { Router } from '@angular/router';
import { ChatService } from '../../../../services/chat.service';
import { AlertService } from '../../../../services/alert.service';
import { DOCUMENT } from '@angular/common';
import { TypeOfError, StaticLabels } from '../../../../shared/errorMessageConstants';
import { CustomModalComponent, CustomModalModel } from 'app/layout/dashboard/components/custom-modal/custom-modal.component';
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
    isMessageExist = false;
    hour = 0;
    minute = 0;
    second = 0;
    tick = 0;
    actualMeetingTime: any;
    constructor(@Inject(DOCUMENT) private document, private elementRef: ElementRef,
        userService: UserService, private router: Router, chatService: ChatService, public alertService: AlertService) {
        this._userService = userService;
        this._chatService = chatService;
    }
    @ViewChild('exitMeetingConfirmModal') public exitMeetingConfirmModal: CustomModalComponent;
    leaveMeeting: CustomModalModel = {
        titleIcon: '<i class="fas fa-sign-out-alt"></i>',
        title: 'End Call',
        smallHeading: 'You can end call here',
        body: '',
        Button1Content: '',
        Button2Content: ''
    };
    ngOnInit() {
        this.selectedUser = {};
        this.chattingHistoryList = [];
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
        debugger;
        this.loggedInUser = data;
        this.chattingHistoryList = [];
        this.isMessageExist = false;
        const payload = { userFrom: this.loggedInUser.userCode, userTo: this.selectedUser.userCode, chatMsg: null };
        this._chatService.getChattingHistoryList(payload).subscribe(chatList => {
            // if (!chatList[0].errorFl || !chatList[0].warningFl) {
                this.chattingHistoryList = chatList;
                this.isMessageExist = this.chattingHistoryList[0].warningFl;
         // }
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
                } else {
                    this.broadcastMsgList = broadcastData;
                }
            } else {
                this.broadcastMsgList = [];
            }
        });
    }
    private getSelecteduserApiCall() {
        this._userService.getSelectedUser().subscribe(res => {
            if (res == null || res === undefined || res.length || res.length === 0) {
                this.router.navigate(['/dashboard/default']);
            } else {
                if (res.userCode === undefined) {
                    this.router.navigate(['/dashboard/default']);
                } else {
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
            this.document.getElementById('room-id').value = 'Peer2PeerMeet_' + localStorage.getItem('loggedInUserCode');
        }
    }
    sendMessage() {
        if (typeof this.chatMsg === 'undefined' || this.chatMsg.trim() === '' || this.chatMsg.trim() === null) {
            this.alertService.warning('Enter Message', TypeOfError.Warning);
        } else {
            const payload = {
                userFrom: this.loggedInUser.userCode,
                userTo: this.selectedUser.userCode,
                chatMsg: this.chatMsg
            };
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
    // onNotify() {
    //     this.alertService.warning('Meeting will end in 5 mins and you will be redirected to login page.', 'Meeting about to end!');
    // }
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
        if (this.isCallInProcess) {
            this.exitMeetingConfirmModal.open();
        } else {
            this.router.navigate(['/dashboard']);
        }
    }
    exit() {
        this.exitMeetingConfirmModal.close();
    }
    completeExit() {
        this.exit();
        this.isCallInProcess = false;
        this.closeRmainigMeetingActivity();
    }
    downloadFile() {
        const meetingDate = new Date();
        const momHeader = 'Date: ' + new Date().toString().slice(0, 24);
        const fileType = 'text/json';
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.setAttribute('style', 'display: none');
        a.setAttribute('href', `data:${fileType};charset=utf-8,${encodeURIComponent(momHeader + '\r\n\r\n' +
        'Notes: ' + '\r\n\r\n' + this.momTxt)}`);
        // a.href = url;
        a.download = 'MOM' + '(' + meetingDate.toString().slice(0, 24) + ').txt';
        a.click();
        // window.URL.revokeObjectURL(url);
        a.remove(); // remove the element
    }

    private closeRmainigMeetingActivity() {
        if (this.momTxt !== null || this.momTxt !== '') {
            if (this.momTxt !== undefined) {
                this.downloadFile();
            }
        }
        this.stopTimer();
        this.router.navigate(['/dashboard']);
        document.getElementById('btn-leave-room').click();
    }

    stopTimer() {
        clearInterval(this.actualMeetingTime);
    }
    startTimer() {
        this.actualMeetingTime = setInterval(() => { this.calculateTimeSpan(); }, 1000);
    }
    calculateTimeSpan() {
        if (this.second === 59) {
            if (this.minute === 59) {
                this.hour += 1;
                this.minute = 0;
            } else {
                this.minute += 1;
            }
            this.second = 0;
        } else {
            this.second += 1;
        }
        this.tick++;
    }
}

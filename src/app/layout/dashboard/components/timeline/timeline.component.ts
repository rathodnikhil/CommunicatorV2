import { Component, OnInit, Inject, ElementRef, AfterViewInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { Router } from '@angular/router';
import { ChatService } from '../../../../services/chat.service';
import { AlertService } from '../../../../services/alert.service';
import { DOCUMENT } from '@angular/common';
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
    constructor(@Inject(DOCUMENT) private document, private elementRef: ElementRef,
        userService: UserService, private router: Router, chatService: ChatService, public alertService: AlertService) {
        this._userService = userService;
        this._chatService = chatService;
    }

    ngOnInit() {
        this.selectedUser = {};
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
        this._userService.getLoggedInUserObj().subscribe(data => {
            if (data.errorFl === true || data.warningFl === true) {
                this.loggedInUser = {};
                return this.alertService.warning(data.message, 'Warning');
            } else {
                this.loggedInUser = data;
                this.chattingHistoryList = [];
                this._chatService.setChattingHistoryList().subscribe(chatHistoryData => {
                    if (chatHistoryData.length > 0) {
                        if (chatHistoryData[0].errorFl || chatHistoryData[0].warningFl) {
                            this.chattingHistoryList = [];
                            return this.alertService.warning(chatHistoryData[0].message, 'Warning');
                        } else {
                            this.chattingHistoryList = chatHistoryData;
                        }
                    } else {
                        this.chattingHistoryList = [];
                    }
                });
                this.broadcastMsgList = [];
                this._chatService.getBroadcastMsgByLoggedInuserId().subscribe(broadcastData => {
                    if (broadcastData.length > 0) {
                        if (broadcastData[0].errorFl || broadcastData[0].warningFl) {
                            this.broadcastMsgList = [];
                            return this.alertService.warning(broadcastData[0].message, 'Warning');
                        } else {
                            this.broadcastMsgList = broadcastData;
                        }
                    } else {
                        this.broadcastMsgList = [];
                    }
                });
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
    }

    sendMessage() {
        const payload = {
            userFrom: this.loggedInUser.userCode,
            userTo: this.selectedUser.userCode,
            chatMsg: this.chatMsg
        };
        if (this.chatMsg === '' || this.chatMsg === null || typeof this.chatMsg === 'undefined') {
            this.alertService.warning('Enter Message', 'Warning');
        } else {
            this._chatService.saveChat(payload).subscribe(data => {
                if (data.errorFl === true || data.warningFl === true) {
                    return this.alertService.warning(data.message, 'Warning');
                }
            });

        }
    }
    onKey(chatMessage) {
        this.sendMessage();
    }
}

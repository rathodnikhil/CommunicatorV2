import { Component, OnInit, EventEmitter, Output, ViewChild, ViewContainerRef, Inject, ElementRef, AfterViewInit } from '@angular/core';
import { CustomModalComponent, CustomModalModel } from '../custom-modal/custom-modal.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
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
            if (res) {
                this.selectedUser = res;
            }
        });
        this._userService.getLoggedInUserObj().subscribe(data => {
            if (data.errorFl === true || data.warningFl === true) {
                this.loggedInUser = {};
                return this.alertService.warning(data.message, 'Warning');
            } else {
                this.loggedInUser = data;
            }
        });
        this.chattingHistoryList = [];
        this._chatService.getChattingHistoryList().subscribe(data => {
            if (data.length > 0) {
                if (data[0].errorFl || data[0].warningFl) {
                    this.chattingHistoryList = [];
                    return this.alertService.warning(data[0].message, 'Warning');
                } else {
                    this.chattingHistoryList = data;
                }
            } else {
                this.chattingHistoryList = [];
            }
        });
        this.broadcastMsgList = [];
        this._chatService.getBroadcastMsgByLoggedInuserId().subscribe(data => {
            if (data.length > 0) {
                if (data[0].errorFl || data[0].warningFl) {
                    this.broadcastMsgList = [];
                    return this.alertService.warning(data[0].message, 'Warning');
                } else {
                    this.broadcastMsgList = data;
                }
            } else {
                this.broadcastMsgList = [];
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
    open() {
        this.viewProfileModal.open();
    }
    closeviewProfilePopup(popupType) {
        switch (popupType) {
            case 'profileDetails':
                this.viewProfileModal.close();
                break;
        }
    }
    sendMessage(chatMessag) {
        let payload = { userFrom: this.loggedInUser.userCode, userTo: this.selectedUser.userCode, chatMsg: chatMessag };
        if (chatMessag === '' || chatMessag === null || typeof chatMessag === 'undefined') {
            this.alertService.warning('Enter Message', 'Warning');
        } else {
            alert('else');
            this._chatService.saveChat(payload).subscribe(data => {
                if (data.errorFl === true || data.warningFl === true) {
                    return this.alertService.warning(data.message, 'Warning');
                } else {
                    this.chatMsg = '';
                    // this.chattingHistoryObj = data;
                    // alert(this.chattingHistoryObj.chatmsg);
                    // this.chattingHistoryList.push(this.chattingHistoryObj);
                }
            });

        }
    }
    onKey(event, chatMessag) {
        if (event.key == 'Enter') { this.sendMessage(chatMessag); }
    }
    closeTeamPopup(popupType) {
        switch (popupType) {
            case 'profileDetails':
                this.viewProfileModal.close();
                break;
        }
    }
}

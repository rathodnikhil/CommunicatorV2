import { Component, OnInit, EventEmitter, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { CustomModalComponent, CustomModalModel } from '../custom-modal/custom-modal.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../../../services/user.service';
import { Router } from '@angular/router';
import { ChatService } from '../../../../services/chat.service';
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
    constructor(userService: UserService, private router: Router, chatService: ChatService) {
        this._userService = userService;
        this._chatService = chatService;
    }

    ngOnInit() {
        this.selectedUser={};
        this._userService.getSelectedUser().subscribe(res => {
            debugger;
            if (res)
                this.selectedUser = res;
        });
        this._userService.getLoggedInUserObj().subscribe(data => {
            this.loggedInUser = data;
            
        });
        this.chattingHistoryList = [];
        this._chatService.getChattingHistoryList().subscribe(data => {
            this.chattingHistoryList = data;
        });
        this.broadcastMsgList = [];
        this._chatService.getBroadcastMsgByLoggedInuserId().subscribe(data => {
            this.broadcastMsgList = data;
          }); 
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
        if (chatMessag === "" || chatMessag === null || typeof chatMessag === "undefined") {
            this.enterMsgFlag = true;
            setTimeout(function () {
                this.enterMsgFlag = false;
            }.bind(this), 5000);
        } else {
            alert('elase');
            this._chatService.saveChat(payload).subscribe(data => {
                this.chatMsg = "";
                // this.chattingHistoryObj = data;
                // alert(this.chattingHistoryObj.chatmsg);
                // this.chattingHistoryList.push(this.chattingHistoryObj);
            });

        }
    }
    onKey(event,chatMessag) {
        if (event.key == "Enter") { this.sendMessage(chatMessag); }
    }
}

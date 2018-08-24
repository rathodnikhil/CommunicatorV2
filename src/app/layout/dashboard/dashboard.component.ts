
import { routerTransition } from '../../router.animations';
import { AlertComponent } from 'app/layout/bs-component/components';
import { Component, OnInit, EventEmitter, Output, ViewChild, ViewContainerRef, AfterViewInit, ElementRef, Inject } from '@angular/core';
import { CustomModalComponent, CustomModalModel } from './components/custom-modal/custom-modal.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { GroupService } from '../../services/group.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { DOCUMENT } from '../../../../node_modules/@angular/common';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()],
    providers: [GroupService]
})
export class DashboardComponent implements OnInit, AfterViewInit {
    _groupService: GroupService;
    _userService: UserService;
    createGroupsVal = '';
    broadcastMessage = '';
    showtypeMessage = false;
    showNewGroup = false;
    showNewGroupSuccess = false;
    showBroadcastMessageSuccess = false;
    duplicateGroup = false;
    userList = [];
    groupList = [];
    groupArray = [];
    array = [];
    i = 0;
    loggedInUserObj: any;
    loggedInUserRole: any;
    signUpflag: boolean;

    @ViewChild('braodcastMessageModal') public broadcastMessageModal: CustomModalComponent;
    broadcastMessagecontent: CustomModalModel = {
        titleIcon: '<i class="fa fa-bullhorn"></i>',
        title: 'Broadcast Message',
        smallHeading: 'Send Message to everyone',
        body: '',
        Button1Content: '<i class="fa fa-comments"></i>&nbsp;Send Message',
        Button2Content: '<i class="fa fa-refresh"></i>&nbsp;Cancel'
    };
  
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    currentRoute = 0;

    constructor(@Inject(DOCUMENT) private document, private elementRef: ElementRef,
        private groupService: GroupService, userService: UserService, private router: Router) {
        this._groupService = groupService;
        this._userService = userService;
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
        this._userService.getUserList().subscribe(data => {
            this.userList = data;
        });
        this._groupService.getGroupList().subscribe(data => {
            this.groupList = data;
        });

        // get loggedin user
        this._userService.getLoggedInUserObj().subscribe(data => {
            this.loggedInUserObj = data;
        });

        let userRoleArray = [];
        userRoleArray = this.loggedInUserObj.roles;
        let roleArray = [];
        for (let i = 0; i < userRoleArray.length; i++) {
            roleArray.push(userRoleArray[i].role);
       }
        if(roleArray.indexOf('ADMINISTRATOR') === -1){
            this.signUpflag = false;
        }else{
            this.signUpflag = true;
        }
    }
    ngAfterViewInit(): void {
        // const s = document.createElement('script');
        // s.type = 'text/javascript';
        // s.innerHTML = 'console.log(\'done\');'; // inline script
        // s.src = '../../../assets/scripts/meetingTest.js';

        const s = this.document.createElement('script');
        s.type = 'text/javascript';
        s.src = '../../../assets/scripts/meetingTest.js';
        const __this = this; // to store the current instance to call
        // afterScriptAdded function on onload event of
        // script.
        s.onload = function () { __this.afterScriptAdded(); };
        this.elementRef.nativeElement.appendChild(s);
    }
    afterScriptAdded() { }
    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
    switchRoute(newRoute) {
        this.currentRoute = newRoute;
    }
    open() {
        //   debugger;
        this.broadcastMessageModal.open();
    }
  
    //save broadcast message
    broadcastMessages(broadcastMessage) {
        if (broadcastMessage === "" || broadcastMessage === null || typeof broadcastMessage === "undefined") {
            this.showtypeMessage = true;
            setTimeout(function () {
                this.showtypeMessage = false;
            }.bind(this), 5000);
        } else {
            const payload = { "broadcastMessage": broadcastMessage };
            this._groupService.saveBroadcastMessage(payload).subscribe(res => {
                this.showtypeMessage = false;
                this.showBroadcastMessageSuccess = true;
                setTimeout(function () {
                    this.showBroadcastMessageSuccess = false;
                }.bind(this), 5000);
            });
        }
        this.broadcastMessage = ' ';
    }
    typeBroadcastMessageFocus() {
        this.showtypeMessage = false;
    }

    resetMsg(event) {
        alert('text reset');
    }
  
    //close create group modal popup
    closePopup(popupType) {
        switch (popupType) {
            case 'addBroadcastMsg':
                this.broadcastMessageModal.close();
                break;
        }
    }
    addMember() {
        alert('addGroupMember');
    }
}


import { routerTransition } from '../../router.animations';
import { AlertComponent } from 'app/layout/bs-component/components';
import { Component, OnInit, EventEmitter, Output, ViewChild , ViewContainerRef} from '@angular/core';
import { CustomModalComponent, CustomModalModel } from './components/custom-modal/custom-modal.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { GroupService } from '../../services/group.service';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()],
    providers: [GroupService]
})
export class DashboardComponent implements OnInit {
    createGroupsVal:string = '';
    broadcastMessage:string = '';
    showtypeMessage: boolean = false;
    showNewGroup: boolean = false;
    showNewGroupSuccess: boolean = false;
    showBroadcastMessageSuccess: boolean = false;
    _groupService: GroupService;
    
    @ViewChild('braodcastMessageModal') public braodcastMessageModal: CustomModalComponent;
    broadcastMessagecontent: CustomModalModel = {
        titleIcon: '<i class="fa fa-bullhorn"></i>',
        title: 'Broadcast Message',
        smallHeading: 'Send Message to everyone',
        body: '',
        Button1Content: '<i class="fa fa-comments"></i>&nbsp;Send Message',
        Button2Content: '<i class="fa fa-refresh"></i>&nbsp;Cancel'
    };
    @ViewChild('createGroupModal') public createGroupModal: CustomModalComponent;
    createGroups: CustomModalModel = {
        titleIcon: '<i class="fa fa-bullhorn"></i>',
        title: 'Create Group',
        smallHeading: 'Create groups to have communication',
        body: '',
        Button1Content: '<i class="fa fa-comments"></i>&nbsp;Send Message',
        Button2Content: '<i class="fa fa-refresh"></i>&nbsp;Cancel'
    };
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    currentRoute: number = 0;

    constructor(private groupService: GroupService) {
        this._groupService = groupService;
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
       
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
    switchRoute(newRoute) {
        this.currentRoute = newRoute;
    }
    open() {
        //   debugger;
          this.braodcastMessageModal.open();
      }
      openCreateGroupPopup() {
        this.createGroupModal.open();
    }
    broadcastMessages(broadcastMessage) {

        if(broadcastMessage === "" || broadcastMessage === null || typeof broadcastMessage === "undefined"){
            this.showtypeMessage = true;
            setTimeout(function() {
                this.showtypeMessage = false;
            }.bind(this), 5000);
        } else{
            alert();
            this.showtypeMessage = false;
            this.showBroadcastMessageSuccess = true;
            setTimeout(function() {
                this.showBroadcastMessageSuccess = false;
            }.bind(this), 5000);
            const payload = { "broadcastMessage": broadcastMessage };
              this._groupService.saveBroadcastMessage(payload).subscribe(
                (res) => {
                   // saveAs(res, payload.firstName,payload.lastName); 
                });
        }
        this.broadcastMessage = ' ';
      }
      typeBroadcastMessageFocus() {
            this.showtypeMessage = false;
      }

      groupNameFocus() {
         this.showNewGroup = false; 
      }
      resetMsg(event) {
        alert('text reset');
      }
      createGroup(createGroupsVal){
        //alert(createGroupsVal);
        if(createGroupsVal === "" || createGroupsVal === null || typeof createGroupsVal === "undefined"){
            this.showNewGroup = true;
            setTimeout(function() {
                this.showNewGroup = false;
            }.bind(this), 5000);
        } else{
            this.showNewGroup = false;
            this.showNewGroupSuccess =true;
            setTimeout(function() {
                this.showNewGroupSuccess = false;
            }.bind(this), 5000);
            const payload = { "groupName": createGroupsVal  };
              this._groupService.saveGroupDetails(payload).subscribe(
                (res) => {
            });     
            }
        
      this.createGroupsVal = ' ';
      }

         //close create group modal popup
     closeGroupPopup(popupType) {
        switch (popupType) {
            case 'addCreateGroup':
                this.createGroupModal.close();
                break;
        }
    }
        //close create group modal popup
        closeBroadcastPopup(popupType) {
            switch (popupType) {
                case 'addBroadcastMsg':
                    this.braodcastMessageModal.close();
                    break;
            }
        }
}

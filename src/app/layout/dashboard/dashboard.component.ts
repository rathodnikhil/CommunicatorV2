
import { routerTransition } from '../../router.animations';
import { AlertComponent } from 'app/layout/bs-component/components';
import { Component, OnInit, EventEmitter, Output, ViewChild , ViewContainerRef} from '@angular/core';
import { CustomModalComponent, CustomModalModel } from './components/custom-modal/custom-modal.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    @ViewChild('inviteAttendeesModal') public inviteAttendeesModal: CustomModalComponent;
    InviteAttendees: CustomModalModel = {
        titleIcon: '<i class="fa fa-bullhorn"></i>',
        title: 'Broadcast Message',
        smallHeading: 'Send Message to everyone',
        body: '<div class="row"><div class="col-md-4"><label>Type Message</label></div><div class="col-md-8"><textarea type="text">'
            + '</textarea></div></div>',
        Button1Content: '<i class="fa fa-comments"></i>&nbsp;Send Message',
        Button2Content: '<i class="fa fa-refresh"></i>&nbsp;Cancel'
    };
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    currentRoute: number = 0;

    constructor() {
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

    ngOnInit() {}

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
    switchRoute(newRoute) {
        this.currentRoute = newRoute;
    }
    open() {
        //   debugger;
          this.inviteAttendeesModal.open();
      }
      broadcastMsg(event) {
       alert('broadcast msg');
      }
      resetMsg(event) {
        alert('text reset');
      }
}

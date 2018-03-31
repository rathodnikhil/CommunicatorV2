import { Component, OnInit, EventEmitter, Output, ViewChild , ViewContainerRef} from '@angular/core';
import { CustomModalComponent, CustomModalModel } from '../custom-modal/custom-modal.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-schedule-meeting',
  templateUrl: './schedule-meeting.component.html',
  styleUrls: ['./schedule-meeting.component.scss']
})
export class ScheduleMeetingComponent implements OnInit {
    @Output() CurrentRoute = new EventEmitter();
    @ViewChild('inviteAttendeesModal') public inviteAttendeesModal: CustomModalComponent;
    InviteAttendees: CustomModalModel = {
        title: 'Invite Attendees',
        smallHeading: 'Copy and paste to your calendar or share with your attendees',
        body: '<div style="text-align: center; font-weight: bold;">custom</div>',
        Button1Content: '<i class="fa fa-envelope"></i> Outlook',
        Button2Content: '<i class="fa fa-copy"></i> Copy'
    };
    meeting: any = {
        meridianTime : {hour: 13, minute: 30},
        meridian : true,
        datePicker: {}
    };
    durationArray = ['15 Min', '30 Min', '45 Min', '60 Min (1 Hour)' , '90 Min (1.5 Hour)' , '120 Min (2 Hour)', '150 Min (2.5 Hour)',
    '180 Min (3 Hour)', '240 Min (4 Hour)', '300 Min (5 Hour)', '360 Min (6 Hour)', '420 Min (7 Hour)', '480 Min (8 Hour)'];
    timeZoneArray = ['(GMT)  Greenwich Mean Time',
    '(GMT)  Universal Coordinated Time',
    '(GMT+1:00)  European Central Time',
    '(GMT+2:00)  Eastern European Time',
    '(GMT+2:00)  (Arabic) Egypt Standard Time',
    '(GMT+3:00)  Eastern African Time',
    '(GMT+3:30)  Middle East Time',
    '(GMT+4:00)  Near East Time',
    '(GMT+5:00)  Pakistan Lahore Time',
    '(GMT+5:30)  India Standard Time',
    '(GMT+6:00)  Bangladesh Standard Time',
    '(GMT+7:00)  Vietnam Standard Time',
    '(GMT+8:00)  China Taiwan Time',
    '(GMT+9:00)  Japan Standard Time',
    '(GMT+9:30)  Australia Central Time',
    '(GMT+10:00)  Australia Eastern Time',
    '(GMT+11:00)  Solomon Standard Time',
    '(GMT+12:00)  New Zealand Standard Time',
    '(GMT-11:00)  Midway Islands Time',
    '(GMT-10:00)  Hawaii Standard Time',
    '(GMT-9:00)  Alaska Standard Time',
    '(GMT-8:00)  Pacific Standard Time',
    '(GMT-7:00)  Phoenix Standard Time',
    '(GMT-7:00)  Mountain Standard Time',
    '(GMT-6:00)  Central Standard Time',
    '(GMT-5:00)  Eastern Standard Time',
    '(GMT-5:00)  Indiana Eastern Standard Time',
    '(GMT-4:00)  Puerto Rico and US Virgin Islands Time',
    '(GMT-3:30)  Canada Newfoundland Time',
    '(GMT-3:00)  Argentina Standard Time',
    '(GMT-3:00)  Brazil Eastern Time',
    '(GMT-1:00)  Central African Time'];

    constructor(private viewContainerRef: ViewContainerRef) {
    }

    ngOnInit() {
    }
    switchRoute() {
        this.CurrentRoute.emit(0);
      }
      open() {
        //   debugger;
          this.inviteAttendeesModal.open();
      }
      copyToOutLook(event) {
        const a = document.createElement('a');
        a.href = 'mailto:?subject=Schedule meeting';
        document.body.appendChild(a);
        // start download
        a.click();
        document.body.removeChild(a);
      }
      copytoClipBoard(event) {

      }
}


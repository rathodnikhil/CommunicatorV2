import { Component, OnInit, EventEmitter, Output, ViewChild , ViewContainerRef} from '@angular/core';
import { CustomModalComponent } from '../custom-modal/custom-modal.component';

@Component({
  selector: 'app-schedule-meeting',
  templateUrl: './schedule-meeting.component.html',
  styleUrls: ['./schedule-meeting.component.scss']
})
export class ScheduleMeetingComponent implements OnInit {
    @Output() CurrentRoute = new EventEmitter();
    @ViewChild('childModal') childModal: CustomModalComponent;
    meeting: any = {
        meridianTime : {hour: 13, minute: 30},
        meridian : true,
        datePicker: {}
    };
    durationArray = ['15 Min', '30 Min', '45 Min', '60 Min (1 Hour)' , '90 Min (1.5 Hour)' , '120 Min (2 Hour)', '150 Min (2.5 Hour)',
    '180 Min (3 Hour)', '240 Min (4 Hour)', '300 Min (5 Hour)', '360 Min (6 Hour)', '420 Min (7 Hour)', '480 Min (8 Hour)'];

    constructor(private viewContainerRef: ViewContainerRef) {
    }

    ngOnInit() {
    }
    switchRoute() {
        this.CurrentRoute.emit(0);
      }
}


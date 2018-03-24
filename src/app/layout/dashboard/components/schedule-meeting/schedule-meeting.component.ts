import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-schedule-meeting',
  templateUrl: './schedule-meeting.component.html',
  styleUrls: ['./schedule-meeting.component.scss']
})
export class ScheduleMeetingComponent implements OnInit {
    @Output() CurrentRoute = new EventEmitter();
    meeting: any = {
        meridianTime : {hour: 13, minute: 30},
        meridian : true,
        datePicker: {}
    };

    ngOnInit() {
    }
    switchRoute() {
        this.CurrentRoute.emit(0);
      }
}

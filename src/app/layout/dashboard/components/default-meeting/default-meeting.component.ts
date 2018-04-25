import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-default-meeting',
  templateUrl: './default-meeting.component.html',
  styleUrls: ['./default-meeting.component.scss']
})
export class DefaultMeetingComponent implements OnInit {
   @Output() CurrentRoute = new EventEmitter();
    constructor() {}
  ngOnInit() { }
  switchRoute() {
    this.CurrentRoute.emit(1);
  }

}

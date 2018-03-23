import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-meeting',
  templateUrl: './default-meeting.component.html',
  styleUrls: ['./default-meeting.component.scss']
})
export class DefaultMeetingComponent implements OnInit {
    isActive = false;
  constructor() { }

  ngOnInit() {
  }

}

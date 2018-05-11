import { Component, OnInit } from '@angular/core';
import { MeetingServiceService } from '../../../services/meeting-service.service';

@Component({
  selector: 'app-past-meetings',
  templateUrl: './past-meetings.component.html',
  styleUrls: ['./past-meetings.component.scss'],
  providers: [MeetingServiceService]
})
export class PastMeetingsComponent implements OnInit {
    pastMeetingList = [];
    _meetingService: MeetingServiceService;
  constructor(meetingService: MeetingServiceService) {
    this._meetingService = meetingService;
   }

  ngOnInit() {
//past meeting list web service call
this.pastMeetingList = [];
const payload = {loggedInUserId: 1};
this._meetingService.getFutureMeetingByUser(payload).subscribe(data => {
    this.pastMeetingList = data.json();
});
  }
  //download chat and mom file
downloadFile() {
    alert('File Downloaded successfully');
}
//download recording
downloadRecording() {
    alert('downloadRecording successfully');
}
}

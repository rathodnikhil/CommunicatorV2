import { Component, OnInit } from '@angular/core';
import { MeetingService } from '../../../services/meeting-service';
// import * as fileSaver from 'file-saver';
@Component({
  selector: 'app-past-meetings',
  templateUrl: './past-meetings.component.html',
  styleUrls: ['./past-meetings.component.scss'],
})
export class PastMeetingsComponent implements OnInit {
    fileName: String;
    pastMeetingList = [];
    _meetingService: MeetingService;
    payloadSearch = {loggedInUserId: 2};
  constructor(meetingService: MeetingService) {
    this._meetingService = meetingService;
   }
momByMe: boolean;
scheduledByMe: boolean;
  ngOnInit() {
      this.momByMe = false;
//past meeting list web service call
this.pastMeetingList = [];
const payload = {id: 2};
this._meetingService.getPastMeetingsByUser(payload).subscribe(data => {
    this.pastMeetingList = data.json();
});
  }
  //download chat and mom file
downloadFile() {
  this._meetingService.downloadPdfReportFile();
}

//scheduledByMe is checked
scheduleByLoggedInUserId(event) {
    this.scheduledByMe = true;
if (event.target.checked) {
    if (this.momByMe === true) {
        this.getPastMeetingsByuser();
    } else {
        this.getPastMeetingsScheduledByUser();
    }
} else {
    this.scheduledByMe = false;
    if (this.momByMe === true) {
        this.getMeetingsMomByUser();
    } else {
          this.getPastMeetingsByuser();
    }
}
}
//momByMe is checked
momByLoggedInuser(event) {
this.momByMe = true;
    if (event.target.checked) {
        if (this.scheduledByMe === true) {
                this.getPastMeetingsByuser();
        } else {
            this.getMeetingsMomByUser();
        }
    } else {
        this.momByMe = false;
        if (this.scheduledByMe === true) {
            this.getPastMeetingsScheduledByUser();
        } else {
            this.getPastMeetingsByuser();
        }
    }
}
getPastMeetingsByuser() {
    const payload = {loggedInUserId: 2};
        this._meetingService.getPastMeetingsByUser(payload).subscribe(data => {
            this.pastMeetingList = data.json();
        });
}
getPastMeetingsScheduledByUser() {
    this._meetingService.getPastMeetingsScheduledByUser(this.payloadSearch).subscribe(data => {
        this.pastMeetingList = data.json();
      });
}
getMeetingsMomByUser() {
    this._meetingService.getMeetingsMomByUser(this.payloadSearch).subscribe(data => {
        this.pastMeetingList = data.json();
    });
}

download() {

    this.fileName = ' ';
    const payload = {fileName: 'test.docx' };

    this._meetingService.filedownload(payload).subscribe(
      (res) => {
          alert();
        //  saveAs(res, payload.fileName);
      }
  );

  }

}

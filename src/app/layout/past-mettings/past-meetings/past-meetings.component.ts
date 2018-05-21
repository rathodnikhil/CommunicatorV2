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
    payloadSearch = {loggedInUserId: 2};
  constructor(meetingService: MeetingServiceService) {
    this._meetingService = meetingService;
   }
momByMe: boolean;
scheduledByMe: boolean;
  ngOnInit() {
      this.momByMe = false;
//past meeting list web service call
this.pastMeetingList = [];
const payload = {loggedInUserId: 2};
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
    alert();
    // this._meetingService.download().subscribe(data => {
    //     //data.json();
    //     alert('1');
    // });
    const ajax = new XMLHttpRequest();
    const URL = "http://localhost:8080/download/abc";

       ajax.open("GET", URL);
       // xhr.overrideMimeType("application/octet-stream");
       //  xhr.send();

       ajax.responseType = 'blob';
       ajax.send();
       ajax.onreadystatechange = function () {
         if (this.readyState == 4) {

           console.log(typeof this.response);
           var blob = new Blob([this.response], { type: "application/octet-stream" });

           window.open(location.href = window.URL.createObjectURL(blob), '_blank');

         }
       };

}
}

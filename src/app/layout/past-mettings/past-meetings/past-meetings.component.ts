import { Component, OnInit } from '@angular/core';
import { MeetingService } from '../../../services/meeting-service';
import { UserService } from '../../../services/user.service';
import { PaginationInstance } from 'ngx-pagination';
// import * as fileSaver from 'file-saver';
@Component({
    selector: 'app-past-meetings',
    templateUrl: './past-meetings.component.html',
    styleUrls: ['./past-meetings.component.scss'],
})
export class PastMeetingsComponent implements OnInit {
    public filter: string = '';
    public maxSize: number = 7;
    public directionLinks: boolean = true;
    public autoHide: boolean = false;
    public responsive: boolean = false;
    public config: PaginationInstance = {
        id: 'meetingCode',
        itemsPerPage: 2,
        currentPage: 1
    };
    public labels: any = {
        previousLabel: 'Previous',
        nextLabel: 'Next',
        screenReaderPaginationLabel: 'Pagination',
        screenReaderPageLabel: 'page',
        screenReaderCurrentLabel: `You're on page`
    };
    _userService: UserService
    fileName: String;
    loggedInUser: any;
    pastMeetingList = [];
    _meetingService: MeetingService;
    payloadSearch = { loggedInUserId: 2 };
    constructor(meetingService: MeetingService, userService: UserService) {
        this._meetingService = meetingService;
        this._userService = userService;
    }
    momByMe: boolean;
    scheduledByMe: boolean;
    ngOnInit() {
        this.momByMe = false;

        //loggedInuser Object webservice call
        this._userService.getLoggedInUserObj().subscribe(data => {
            this.loggedInUser = data;
            this.getPastMeetingsByuser();
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
        const payload = { userCode: this.loggedInUser.userCode };
        this._meetingService.getPastMeetingsByUser(payload).subscribe(data => {
            // if (data[0].errorFl || data[0].warningFl)
            //     this.pastMeetingList = [];
            // else
            this.pastMeetingList = data;
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

    downloadMom(meetingCode) {

      //  const payload = { meetingCode: meetingCode };
        const payload = { fileName: "java-tutorial.pdf" };
        
        this._meetingService.downloadMom(payload).subscribe(
            (res) => {
                alert();
                //  saveAs(res, payload.fileName);
            }
        );

    }
    onPageChange(number: number) {
        // console.log('change to page', number);
        this.config.currentPage = number;
    }
}

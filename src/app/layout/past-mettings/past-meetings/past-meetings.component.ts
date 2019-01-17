import { Component, OnInit, ViewChild } from '@angular/core';
import { MeetingService } from '../../../services/meeting-service';
import { UserService } from '../../../services/user.service';
import { PaginationInstance } from 'ngx-pagination';
import { AlertService } from '../../../services/alert.service';
import { CustomModalComponent, CustomModalModel } from '../../dashboard/components/custom-modal/custom-modal.component';
@Component({
    selector: 'app-past-meetings',
    templateUrl: './past-meetings.component.html',
    styleUrls: ['./past-meetings.component.scss'],
    providers: [AlertService]
})
export class PastMeetingsComponent implements OnInit {
    _meetingService: MeetingService;
    _userService: UserService;
    public filter: string = '';
    public maxSize: number = 7;
    public directionLinks: boolean = true;
    public autoHide: boolean = false;
    public responsive: boolean = false;
    public config: PaginationInstance = {
        id: 'meetingCode',
        itemsPerPage: 10,
        currentPage: 1
    };
    public labels: any = {
        previousLabel: 'Previous',
        nextLabel: 'Next',
        screenReaderPaginationLabel: 'Pagination',
        screenReaderPageLabel: 'page',
        screenReaderCurrentLabel: `You're on page`
    };

    fileName: String;
    loggedInUser: any;
    pastMeetingList = [];
    searchText: string;
    attendeeListByMeeting = [];
    constructor(meetingService: MeetingService, userService: UserService, public alertService: AlertService) {
        this._meetingService = meetingService;
        this._userService = userService;
    }
    @ViewChild('viewAttendeeModal') public viewAttendeeModal: CustomModalComponent;
    attendee: CustomModalModel = {
        titleIcon: '<i class="fa fa-user"></i>',
        title: 'New Team',
        smallHeading: 'You can add new team details here',
        body: '',
        Button1Content: '<i class="fa fa-user"></i>&nbsp;Add Team',
        Button2Content: ''
    };
    ngOnInit() {
        // loggedInuser Object webservice call
        this._userService.getLoggedInUserObj().subscribe(data => {
            if (data.errorFl === true || data.warningFl === true) {
                return this.alertService.warning(data.message, 'Warning');
            } else {
                this.loggedInUser = data;
                this.getPastMeetingsByuser();
            }
        });
    }

    getPastMeetingsByuser() {
        const payload = { userCode: this.loggedInUser.userCode };
        this._meetingService.getPastMeetingsByUser(payload).subscribe(data => {
            if (data[0].errorFl || data[0].warningFl) {
                this.pastMeetingList = [];
                return this.alertService.warning(data[0].message, 'Warning');
            } else {
                this.pastMeetingList = data;
            }
        });
    }

    downloadMom(data) {
        if (data.mom === '' || data.mom === null || typeof data.mom === 'undefined') {
            return this.alertService.warning('No MOM for this meeting has been added', 'Warning');
        } else {
            const payload = { meetingCode: data.meetingCode };
            this._meetingService.getMeetingAttendee(payload).subscribe(resp => {
                if (resp.errorFl) {
                    this.alertService.warning(resp.message, 'Warning');
                } else {
                    this.attendeeListByMeeting = resp;
                }
            });
            //   let attendeeList = this.getAttendeeList(data);
            data.mom.momDescription = data.mom.momDescription.split('\n');
            data.mom.momDescription = data.mom.momDescription.join('\r\n ');
            const momHeader = 'Date of Meeting: ' + data.meetingDate + '\r\n\r\n' + 'Subject: ' + data.subject + '\r\n\r\n' +
            'Attendees : ' + this.attendeeListByMeeting + '\r\n\r\n';
            const fileType = 'text/json';

            const a = document.createElement('a');
            document.body.appendChild(a);
            a.setAttribute('style', 'display: none');
            a.setAttribute('href', `data:${fileType};charset=utf-8,${encodeURIComponent(momHeader + data.mom.momDescription)}`);
            // a.href = url;
            a.download = 'MOM_' + data.meetingDate + '(' + new Date().toLocaleString('en-us', { weekday: 'long' }) + ').txt';
            a.click();
            // window.URL.revokeObjectURL(url);
            a.remove(); // remove the element
            this.alertService.success('File has been downloaded.', 'MOM Download');
        }

    }
    onPageChange(number: number) {
        this.config.currentPage = number;
    }
    replaceLineBreak(s: string) {
        return s && s.replace('meetNowFlag', '');
    }
    viewAttendee(meeting) {
        const payload = { meetingCode: meeting.meetingCode };
        this._meetingService.getMeetingAttendee(payload).subscribe(resp => {
            if (resp.errorFl) {
                this.alertService.warning(resp.message, 'Warning');
            } else {
                this.attendeeListByMeeting = resp;
                this.viewAttendeeModal.open();
            }
        });

    }

    closePopup() {
        this.viewAttendeeModal.close();
    }
}

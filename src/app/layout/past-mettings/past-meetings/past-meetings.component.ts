import { Component, OnInit, ViewChild } from '@angular/core';
import { MeetingService } from '../../../services/meeting-service';
import { UserService } from '../../../services/user.service';
import { PaginationInstance } from 'ngx-pagination';
import { AlertService } from '../../../services/alert.service';
import { CustomModalComponent, CustomModalModel } from '../../dashboard/components/custom-modal/custom-modal.component';
import { SpinnerComponent } from 'app/shared/modules/common-components/spinner/spinner.component';
@Component({
    selector: 'app-past-meetings',
    templateUrl: './past-meetings.component.html',
    styleUrls: ['./past-meetings.component.scss'],
    providers: [AlertService ]
})
export class PastMeetingsComponent implements OnInit {
    _meetingService: MeetingService;
    _userService: UserService;
    public filter: String = '';
    public maxSize: Number = 7;
    public directionLinks: Boolean = true;
    public autoHide: Boolean = false;
    public responsive: Boolean = false;
    lastMeetingYear: any;
    lastMeetingMonth: any;
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
    @ViewChild('pastMeetingSpinner') pastMeetingSpinnerMod: SpinnerComponent;
    @ViewChild('viewAttendeeModal') public viewAttendeeModal: CustomModalComponent;
    attendee: CustomModalModel = {
        titleIcon: '<i class="fa fa-user"></i>',
        title: 'Meeting Attendee',
        smallHeading: 'You can view meeting attendees',
        body: '',
        Button1Content: '',
        Button2Content: ''
    };
    ngOnInit() {
        // loggedInuser Object webservice call
        this._userService.getLoggedInUserObj().subscribe(data => {
            if (data.errorFl === true || data.warningFl === true) {
                this.pastMeetingSpinnerMod.hideSpinner();
                return this.alertService.warning(data.message, 'Warning');
            } else {
                this.loggedInUser = data;
                this.lastMeetingYear = new Date().getFullYear();
                this.lastMeetingMonth = new Date().getUTCMonth() + 1;
                this.loadMore();
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
                      //   let attendeeList = this.getAttendeeList(data);
            data.mom.momDescription = data.mom.momDescription.split('\n');
            data.mom.momDescription = data.mom.momDescription.join('\r\n ');
            const meetingDate = new Date();
            meetingDate.setTime(data.meetingStartDateTime);
            const momHeader = 'Date of Meeting: ' + meetingDate.toString().slice(0, 24) + '\r\n\r\n' + 'Subject: ' + data.subject +
                '\r\n\r\n' + 'Attendees: ' + this.attendeeListByMeeting;
            const fileType = 'text/json';

            const a = document.createElement('a');
            document.body.appendChild(a);
            a.setAttribute('style', 'display: none');
            a.setAttribute('href', `data:${fileType};charset=utf-8,${encodeURIComponent(momHeader + '\r\n\r\n' +
             'Meetings Notes:' + '\r\n\r\n' + data.mom.momDescription)}`);
            // a.href = url;
            a.download = 'MOM' + '(' + meetingDate.toString().slice(0, 24) + ').txt';
            a.click();
            // window.URL.revokeObjectURL(url);
            a.remove(); // remove the element
            this.alertService.success('File has been downloaded.', 'MOM Download');
                }
            });
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
            if (resp.warningFl) {
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

    loadMore() {
        const payload = { lastMeetingYear: this.lastMeetingYear ,
             lastMeetingMonth: this.lastMeetingMonth};
        this.pastMeetingSpinnerMod.showSpinner();
        this._meetingService.getPastMeetingsByMonth(payload).subscribe(data => {
            this.lastMeetingMonth = new Date((data[data.length - 1].meetingStartDateTime)).getUTCMonth();
            if (this.lastMeetingMonth === 0) {
                this.lastMeetingYear = this.lastMeetingYear - 1;
                this.lastMeetingMonth = 12;
            }
            if (data[0].errorFl || data[0].warningFl) {
                this.alertService.warning(data[0].message, 'Warning');
            } else {
                this.pastMeetingList = this.pastMeetingList.concat(data);
            }
            this.pastMeetingSpinnerMod.hideSpinner();
        });
    }
}

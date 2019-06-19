import { Component, OnInit, ViewChild } from '@angular/core';
import { MeetingService } from '../../../services/meeting-service';
import { UserService } from '../../../services/user.service';
import { PaginationInstance } from 'ngx-pagination';
import { AlertService } from '../../../services/alert.service';
import { CustomModalComponent, CustomModalModel } from '../../dashboard/components/custom-modal/custom-modal.component';
import { SpinnerComponent } from 'app/shared/modules/common-components/spinner/spinner.component';
import { ErrorMessageConstants , TypeOfError, SuccessMessage , StaticLabels} from 'app/shared/errorMessageConstants';
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
    pastMeetingMonth: any;
    currentMonth: any;
    monthNames: any[];
    toMeetingYear: any;
    fromMeetingYear: any;
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
        this.monthNames  = ['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
                ];
        // loggedInuser Object webservice call
        this.getLoggedInUserApiCall();
    }
    private getLoggedInUserApiCall() {
        this._userService.getLoggedInUserObj().subscribe(data => {
            if (data.errorFl === true || data.warningFl === true) {
                this.pastMeetingSpinnerMod.hideSpinner();
                return this.alertService.warning(data.message, TypeOfError.Warning);
            }  else {
                this.loggedInUser = data;
                this.loadMore(new Date().getFullYear(), new Date().getUTCMonth() + 1);
                // this.currentMonth = this.monthNames[new Date().getMonth()];
                // this.pastMeetingMonth = this.monthNames[new Date().getMonth()];
            }
        });
    }

    downloadMom(data) {
        if (data.mom === '' || data.mom === null || typeof data.mom === StaticLabels.Undefined) {
            return this.alertService.warning(ErrorMessageConstants.NoMom, TypeOfError.Warning);
        } else {
            const payload = { meetingCode: data.meetingCode };
            this.getAttendeeApiCall(payload, data);
        }
    }
    private getAttendeeApiCall(payload: { meetingCode: any; }, data: any) {
        this._meetingService.getMeetingAttendee(payload).subscribe(resp => {
            if (resp.errorFl) {
                this.alertService.warning(resp.message, TypeOfError.Warning);
            } else {
                this.displayMomDetailsAction(resp, data);
            }
        });
    }

    private displayMomDetailsAction(resp: any, data: any) {
        const { momHeader, meetingDate } = this.setMomFileContent(resp, data);
        this.generateTxtFile(momHeader, data, meetingDate);
        this.alertService.success(SuccessMessage.DownloadMom, SuccessMessage.SuccessHeader);
    }

    private setMomFileContent(resp: any, data: any) {
        this.attendeeListByMeeting = resp;
        data.mom.momDescription = data.mom.momDescription.split('\n');
        data.mom.momDescription = data.mom.momDescription.join('\r\n ');
        const meetingDate = new Date();
        meetingDate.setTime(data.meetingStartDateTime);
        const momHeader = 'Date of Meeting: ' + meetingDate.toString().slice(0, 24) + '\r\n\r\n' + 'Subject: ' + data.subject +
            '\r\n\r\n' + 'Attendees: ' + this.attendeeListByMeeting;
        return { momHeader, meetingDate };
    }

    private generateTxtFile(momHeader: string, data: any, meetingDate: Date) {
        const fileType = 'text/json';
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.setAttribute('style', 'display: none');
        a.setAttribute('href', `data:${fileType};charset=utf-8,${encodeURIComponent(momHeader + '\r\n\r\n' +
            'Meetings Notes:' + '\r\n\r\n' + data.mom.momDescription)}`);
        a.download = 'MOM' + '(' + meetingDate.toString().slice(0, 24) + ').txt';
        a.click();
        a.remove();
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
                this.alertService.warning(resp.message, TypeOfError.Warning);
            } else {
                this.attendeeListByMeeting = resp;
                this.viewAttendeeModal.open();
            }
        });
    }

    closePopup() {
        this.viewAttendeeModal.close();
    }

    loadMore(year, month) {
        const payload = { lastMeetingYear: year,
             lastMeetingMonth: month, calendarFl: false};
            //  this.hideSpinner();
        this.pastMeetingSpinnerMod.showSpinner();
        this.pastmeetingApiCall(payload, month, year);
    }

    private pastmeetingApiCall(payload: { lastMeetingYear: any; lastMeetingMonth: any; calendarFl: boolean; }, month: any, year: any) {
        this._meetingService.getPastMeetingsByMonth(payload).subscribe(data => {
            this.setMonthAndYear(year, month);
            this.toMeetingYear = new Date().getFullYear();
            this.fromMeetingYear = year;
            this.currentMonth = this.monthNames[new Date().getMonth()];
            this.pastMeetingMonth = this.monthNames[month - 1];
            if (data[0].errorFl || data[0].warningFl) {
                this.alertService.warning(data[0].message, TypeOfError.Warning);
            } else {
                this.pastMeetingList = this.pastMeetingList.concat(data);
            }
            this.hideSpinner();
        });
    }

    private hideSpinner() {
        this.pastMeetingSpinnerMod.hideSpinner();
    }

    private setMonthAndYear(year: any, month: any) {
        if (month === 1) {
            this.lastMeetingYear = year - 1;
            this.lastMeetingMonth = 12;
        } else {
            this.lastMeetingYear = year;
            this.lastMeetingMonth = month - 1;
        }
    }
}

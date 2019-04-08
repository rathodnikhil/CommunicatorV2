import { Component, OnInit, ViewChild , Output , EventEmitter, ElementRef, TemplateRef} from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { UserService } from '../../../services/user.service';
import { MeetingService } from '../../../services/meeting-service';
import { Router } from '@angular/router';
import { AlertService } from '../../../services/alert.service';
import { CustomModalComponent, CustomModalModel } from '../../dashboard/components/custom-modal/custom-modal.component';
// import { NgxSpinnerService } from 'ngx-spinner';
// import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
    selector: 'app-my-calendar',
    templateUrl: './my-calendar.component.html',
    styleUrls: ['./my-calendar.component.scss'],
    providers: [AlertService ]
})
export class MyCalendarComponent implements OnInit {
    loggedInUserObj: any;
    public loading: boolean;
    allMeetingByLoggedInUserList = [];
    meetingList = [];
    meetingDetails = {
        meetingCode : '',
        subject : '',
        meetingStartDateTime : '',
        duration: '',
        createdBy: {
            firstName : '',
            lastName : ''
        },
        timeZone: ''
    };
    calendarOptions: Options;
    displayEvent: any;
    dateObj = new Date();
    yearMonth = this.dateObj.getUTCFullYear() +
        '-' +
        (this.dateObj.getUTCMonth() + 1);
    MeetingData: any = [
        {
            title: 'All Day Event',
            start: this.yearMonth + '-01'
        }
    ];
    @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
    @ViewChild('meetingDetailsModal') public meetingDetailsModal: CustomModalComponent;
    meetingModalDetails: CustomModalModel = {
        titleIcon: '<i class="fa fa-calendar-check-o"></i>',
        title: 'View Meeting',
        smallHeading: 'You can view meeting details here',
        body: '',
        Button1Content: '',
        Button2Content: ''
    };
    _meetingService: MeetingService;
    _userService: UserService;
    loggedInUser: any;

    // private spinner: NgxSpinnerService,  private ngxService: NgxUiLoaderService
    constructor(meetingService: MeetingService, userService: UserService, private router: Router, public alertService: AlertService) {
        this._meetingService = meetingService;
        this._userService = userService;
    }

    ngOnInit() {
        // this.spinner.show();
        // setTimeout(() => {
        //     this.spinner.hide();
        // }, 5000);
        this.loading = true;
        // get loggedin user
        this._userService.getLoggedInUserObj().subscribe(data => {
            this.loggedInUserObj = data;
        });
        const payload = { userCode: this.loggedInUserObj.userCode };
        this._meetingService.getAllMeetingsbyLoggedInUserId(payload).subscribe(data => {
            if (data[0].errorFl || data[0].warningFl) {
                this.loading = false;
                return this.alertService.warning(data[0].message, 'Warning');
            } else {
                data.forEach(element => {
                    const endTime = new Date(new Date(element.meetingStartDateTime).getTime()
                    + parseInt(element.duration.split(' Min')[0]) * 60000);
                    const meeting = {
                        title: element.subject + '(' + element.meetingCode + ')',
                        // url: '#/meeting?meetingCode=' + element.meetingCode,
                        start: new Date(element.meetingStartDateTime),
                        end: endTime
                    };
                    this.ucCalendar.fullCalendar('renderEvent', meeting, true);
                    // this.calendarOptions.events.render()
                });
                this.loading = false;
                this.meetingList = data;
             //   this._spinnerService.hide();
            }
        });
        this.calendarOptions = {
            // theme: true,
            editable: true,
            eventLimit: true,
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay,listMonth'
            },
            events: this.MeetingData
        };
    }
    clickButton(model: any) {
        this.displayEvent = model;
    }
    eventClick(model: any) {
        model = {
            event: {
                id: model.event.id,
                start: model.event.start,
                end: model.event.end,
                title: model.event.title,
                allDay: model.event.allDay
                // other params
            },
            duration: {}
        };
        const id = model.event.title.split('(')[1].split(')')[0];
        this.meetingDetails = this.meetingList.find(x => x.meetingCode === id);
        this.displayEvent = model;
        this.meetingDetailsModal.open();
    }
    updateEvent(model: any) {
        model = {
            event: {
                id: model.event.id,
                start: model.event.start,
                end: model.event.end,
                title: model.event.title
                // other params
            },
            duration: {
                _data: model.duration._data
            }
        };
        this.displayEvent = model;
    }
    exit() {
        this.meetingDetailsModal.close();
    }
}

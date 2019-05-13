import { Component, OnInit, ViewChild , Output , EventEmitter, ElementRef, TemplateRef} from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { UserService } from '../../../services/user.service';
import { MeetingService } from '../../../services/meeting-service';
import { Router } from '@angular/router';
import { AlertService } from '../../../services/alert.service';
import { CustomModalComponent, CustomModalModel } from '../../dashboard/components/custom-modal/custom-modal.component';
import { SpinnerComponent } from 'app/shared/modules/common-components/spinner/spinner.component';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-my-calendar',
    templateUrl: './my-calendar.component.html',
    styleUrls: ['./my-calendar.component.scss'],
    providers: [AlertService ]
})
export class MyCalendarComponent implements OnInit {
    loggedInUserObj: any;
    public clickedType: any;
    lastMeetingStartTime: any;
    // allMeetingByLoggedInUserList = [];
    meetingList = [];
    hovertext: any;
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
    meetingMonth: any;
    meetingYear: any;
    @ViewChild('calenderMeetingSpinner') calenderMeetingSpinnerMod: SpinnerComponent;
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

    constructor(meetingService: MeetingService, userService: UserService, private router: Router, public alertService: AlertService) {
        this._meetingService = meetingService;
        this._userService = userService;
    }

    ngOnInit() {
        // get loggedin user
        this._userService.getLoggedInUserObj().subscribe(data => {
            this.loggedInUserObj = data;
            // this.meetingYear = new Date().getFullYear();
            // this.meetingMonth = new Date().getUTCMonth() + 1;
            this.loadMore(new Date().getFullYear(), new Date().getUTCMonth() + 1);
        });
        // const payload = { userCode: this.loggedInUserObj.userCode };
        // this._meetingService.getAllMeetingsbyLoggedInUserId(payload).subscribe(data => {
        //     if (data[0].errorFl || data[0].warningFl) {
        //         // this.calenderMeetingSpinnerMod.hideSpinner();
        //         return this.alertService.warning(data[0].message, 'Warning');
        //     } else {
        //         // this.lastMeetingStartTime = data[data.length - 1].meetingStartDateTime;
        //         // this.lastMeetingStartTime = new Date(this.lastMeetingStartTime);
        //         // console.log('CHECK : ' + this.lastMeetingStartTime);
        //         data.forEach(element => {
        //             const endTime = new Date(new Date(element.meetingStartDateTime).getTime()
        //             + parseInt(element.duration.split(' Min')[0]) * 60000);
        //             const meeting = {
        //                 title: element.subject + '(' + element.meetingCode + ')',
        //                 // url: '#/meeting?meetingCode=' + element.meetingCode,
        //                 start: new Date(element.meetingStartDateTime),
        //                 end: endTime
        //             };
        //             this.ucCalendar.fullCalendar('renderEvent', meeting, true);
        //             // this.calendarOptions.events.render()
        //         });
        //         this.calenderMeetingSpinnerMod.hideSpinner();
        //         this.meetingList = data;
        //         // this._spinnerService.hide();
        //     }
        // });
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
        if (model.buttonType === 'prev' || model.buttonType === 'next') {
            this.clickedType = model.buttonType;
            this.loadMore(this.meetingYear, this.meetingMonth);
        }
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
        // this.hovertext = model.event.title;
    }

    hover(model: any) {
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
        this.hovertext = model.event.title;
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
        this.hovertext = model.title;
    }
    exit() {
        this.meetingDetailsModal.close();
    }
    loadMore(year, month) {
        if (this.clickedType !== undefined) {
            if (this.clickedType === 'prev') {
                if (month === 1) {
                    year = year - 1;
                    month = 12;
                } else {
                    month = month - 1;
                }
            } else if (this.clickedType === 'next') {
                if (month === 12) {
                    month = 1;
                    year = year + 1;
                } else {
                    month = month + 1;
                }
            }
        }
        const payload = { lastMeetingYear: year, lastMeetingMonth: month, calendarFl: true};
        this.calenderMeetingSpinnerMod.showSpinner();
        this._meetingService.getPastMeetingsByMonth(payload).subscribe(data => {
            this.meetingYear = year;
            this.meetingMonth = month;
            if (data[0].errorFl || data[0].warningFl) {
                this.calenderMeetingSpinnerMod.hideSpinner();
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
                    console.log('Check : ' + this.ucCalendar);
                });
                this.calenderMeetingSpinnerMod.hideSpinner();
                this.meetingList = [];
                this.meetingList = data;
            }
            this.calenderMeetingSpinnerMod.hideSpinner();
        });
    }
}

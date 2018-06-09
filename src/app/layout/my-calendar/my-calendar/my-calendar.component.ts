import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { UserService } from '../../../services/user.service';
import { MeetingServiceService } from '../../../services/meeting-service.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-my-calendar',
    templateUrl: './my-calendar.component.html',
    styleUrls: ['./my-calendar.component.scss']
})
export class MyCalendarComponent implements OnInit {
    calendarOptions: Options;
    displayEvent: any;
    dateObj = new Date();
    yearMonth = this.dateObj.getUTCFullYear() +
        '-' +
        (this.dateObj.getUTCMonth() + 1);
    data: any = [
        {
            title: 'All Day Event',
            start: this.yearMonth + '-01'
        },
        {
            title: 'Long Event',
            start: this.yearMonth + '-07',
            end: this.yearMonth + '-10'
        },
        {
            id: 999,
            title: 'Repeating Event',
            start: this.yearMonth + '-09T16:00:00'
        },
        {
            id: 999,
            title: 'Repeating Event',
            start: this.yearMonth + '-16T16:00:00'
        },
        {
            title: 'Conference',
            start: this.yearMonth + '-11',
            end: this.yearMonth + '-13'
        },
        {
            title: 'Meeting',
            start: this.yearMonth + '-12T10:30:00',
            end: this.yearMonth + '-12T12:30:00'
        },
        {
            title: 'Lunch',
            start: this.yearMonth + '-12T12:00:00'
        },
        {
            title: 'Meeting',
            start: this.yearMonth + '-12T14:30:00'
        },
        {
            title: 'Happy Hour',
            start: this.yearMonth + '-12T17:30:00'
        },
        {
            title: 'Dinner',
            start: this.yearMonth + '-12T20:00:00'
        },
        {
            title: 'Birthday Party',
            start: this.yearMonth + '-13T07:00:00'
        },
        {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: this.yearMonth + '-28'
        }
    ];
    @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
    _meetingService: MeetingServiceService;
    _userService: UserService;
    loggedInUser: any;
    constructor(meetingService: MeetingServiceService,userService:UserService, private router: Router) {
        this._meetingService = meetingService;
        this._userService=userService;
    }

    ngOnInit() {
        this._userService.getLoggedInUSerDetails().subscribe(data => {
            if (Object.keys(data).length === 0) {
                this.router.navigate(['/login']);
            } else {
                debugger;
                this.loggedInUser = data;
                this._meetingService.getAllMeetingsbyLoggedInUserId(this.loggedInUser.id).subscribe(data => { 
                    const cal= data.json();
                    
                });
            }
        });
        
        this.calendarOptions = {
            // theme: true,
            editable: true,
            eventLimit: false,
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay,listMonth'
            },
            events: this.data
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
        this.displayEvent = model;
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
}

import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { MeetingService } from '../../../../services/meeting-service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-default-meeting',
    templateUrl: './default-meeting.component.html',
    styleUrls: ['./default-meeting.component.scss'],
})
export class DefaultMeetingComponent implements OnInit, AfterViewInit {


    @Output() CurrentRoute = new EventEmitter();
    currentDate = new Date();
    loggedInUser: any;
    _userService: UserService;
    futureMeetingList = [];
    filteredFutureMeetingList = [];
    recentMeeting: any;
    _meetingService: MeetingService;
    selectDateFlag: boolean;
    selectedDate: Date;
    selectedfromDate: any;
    selectedtoDate: any;
    @ViewChild('chatPanel') chatPanel: ElementRef;
    @ViewChild('chatBody') chatBody: ElementRef;
    constructor(userService: UserService, meetingService: MeetingService, private router: Router) {
        this._userService = userService;
        this._meetingService = meetingService;
    }
    ngOnInit() {
        this.selectDateFlag = true;
        // loggedInUser Details webservice call
        this.loggedInUser = {
            'id': 2,
            'email': 'b@gmail.com',
            'password': '1235',
            'name': 'sunita',
            'lastName': 'kolhapure',
            'active': 1,
            'teamId': {
                'prime': null,
                'errorFl': false,
                'warningFl': false,
                'message': null,
                'teamId': 1,
                'teamName': 'cfs_pune',
                'status': {
                    'statusId': 1,
                    'status': 'Active'
                }
            },
            'profileImgPath': null
        };
         const payload = { id: 1 };
        // this._userService.getLoggedInUSerDetails().subscribe(data => {
        //     if (Object.keys(data).length === 0) {
        //         this.router.navigate(['/login']);
        //     } else {
        //         this.loggedInUser = data;
        //     }
        // });

       // this.getAllFutureMeetingList();

        // recent meeting webservice call
        this.recentMeeting = {};
        // this._meetingService.getRecentMeetingByUser(payload).subscribe(data => {
        //     const resp = data.json();
        //     if (resp.errorFl || resp.warningFl) {
        //         this.recentMeeting = {};
        //     } else {
        //         this.recentMeeting = resp;
        //     }
        //     // this.recentMeeting = data.json();
        // });

        // current date and time
        // this.currentDate = Date.now();
    }

    ngAfterViewInit(): void {
        // debugger;
        this.chatBody.nativeElement.style.height = (this.chatPanel.nativeElement.offsetHeight
            - (this.chatBody.nativeElement.offsetTop + 30)) + 'px';
    }
    switchRoute() {
        this.CurrentRoute.emit(1);
    }

    serachMeetingByDate(fromDate, toDate) {
        debugger;
        // this.selectedDate = new Date(
        //     fromDate.getFullYear(),
        //     fromDate.getMonth() + 2,
        //     fromDate.getDate()
        //   );
        //fromDate = fromDate.
        alert(fromDate);
    }
    getAllFutureMeetingList() {
        // future meeting list web service call
        const payload = { id: 1 };
        this.futureMeetingList = [];
        this._meetingService.getFutureMeetingByUser(payload).subscribe(data => {
            //  debugger;
            const resp = data.json();
            if (resp.errorFl || resp.warningFl) {
                this.futureMeetingList = [];
            } else {
                this.futureMeetingList = resp;
                this.filteredFutureMeetingList = this.futureMeetingList;
            }
        });
    }
    selectMeetingFilterDate() {
        this.selectDateFlag = !this.selectDateFlag;
    }
    closeDropdown() {
        this.selectDateFlag = false;
    }
    filterMeetingByDate(mode) {
        this.filteredFutureMeetingList = [];
        switch (mode) {
            case 'today':
                this.futureMeetingList.forEach(meeting => {
                    const meetingDate = new Date(meeting.meetingStartDateTime);
                    if (meetingDate.getDate() == this.currentDate.getDate() && meetingDate.getMonth() == this.currentDate.getMonth() && meetingDate.getFullYear() === this.currentDate.getFullYear()) {
                        this.filteredFutureMeetingList.push(meeting);
                    }
                });
                break;
            case 'tomorrow':
                this.futureMeetingList.forEach(meeting => {
                    const meetingDate = new Date(meeting.meetingStartDateTime);
                    const tomorrow = new Date();
                    tomorrow.setDate(tomorrow.getDate() + 1);
                    if (meetingDate.getDate() == tomorrow.getDate() && meetingDate.getMonth() == tomorrow.getMonth() && meetingDate.getFullYear() === tomorrow.getFullYear()) {
                        this.filteredFutureMeetingList.push(meeting);
                    }
                });
                break;
            case 'range':
                this.futureMeetingList.forEach(meeting => {
                    const meetingDate = new Date(meeting.meetingStartDateTime);

                    if ((meetingDate.getDate() >= this.selectedfromDate.day && meetingDate.getMonth() + 1 >= this.selectedfromDate.month && meetingDate.getFullYear() >= this.selectedfromDate.year)
                        && (meetingDate.getDate() <= this.selectedtoDate.day && meetingDate.getMonth() + 1 <= this.selectedtoDate.month && meetingDate.getFullYear() <= this.selectedtoDate.year)) {
                        this.filteredFutureMeetingList.push(meeting);
                    }
                });
                break;
            default:
                this.filteredFutureMeetingList = this.futureMeetingList;
                break;
        }

    }
}

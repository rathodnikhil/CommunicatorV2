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

    _meetingService: MeetingService;
    _userService: UserService;
    @Output() CurrentRoute = new EventEmitter();
    currentDate = new Date();
    loggedInUser: any;
    futureMeetingList = [];
    filteredFutureMeetingList = [];
    recentMeeting: any;
    selectDateFlag: boolean;
    selectedDate: Date;
    selectedfromDate: any;
    selectedtoDate: any;
    showActionIcon: boolean;
    showCancelMeeting: boolean;

    @ViewChild('chatPanel') chatPanel: ElementRef;
    @ViewChild('chatBody') chatBody: ElementRef;
    constructor(userService: UserService, meetingService: MeetingService, private router: Router) {
        this._userService = userService;
        this._meetingService = meetingService;
    }
    ngOnInit() {
        this.selectDateFlag = true;
        this.showActionIcon  = true;
        this.showCancelMeeting = false;
       //loggedInUser web service call
        this._userService.getLoggedInUserObj().subscribe(data => {
            this.loggedInUser = data;
        });

        //getAllFutureMeetingList webservice call
        this.getAllFutureMeetingList();

        // recent meeting webservice call    
        const payload = { userCode: this.loggedInUser.userCode };
        this.recentMeeting = {};
        this._meetingService.setRecentMeetingByUser(payload);
        this._meetingService.getRecentMeetingByUser().subscribe(data => {
            this.recentMeeting = data;
        }, err => {
            // alert(err);
            this.router.navigate(['/login']);
        });
        // current date and time
        // this.currentDate = Date.now();
    }

    ngAfterViewInit(): void {

        this.chatBody.nativeElement.style.height = (this.chatPanel.nativeElement.offsetHeight
            - (this.chatBody.nativeElement.offsetTop + 30)) + 'px';
    }
    switchRoute() {
        this.CurrentRoute.emit(1);
    }

    serachMeetingByDate(fromDate, toDate) {
        // this.selectedDate = new Date(
        //     fromDate.getFullYear(),
        //     fromDate.getMonth() + 2,
        //     fromDate.getDate()
        //   );
        //fromDate = fromDate.
        alert(fromDate);
    }
    // future meeting list web service call
    getAllFutureMeetingList() {
        const payload = { userCode: this.loggedInUser.userCode };
        this.futureMeetingList = [];
        this._meetingService.setFutureMeetimgList(payload);
        this._meetingService.getFutureMeetingListByUser().subscribe(data => {

            // if (resp.errorFl || resp.warningFl) {
            //     this.futureMeetingList = [];
            // } else {
            //     this.futureMeetingList = data;
            //     this.filteredFutureMeetingList = this.futureMeetingList;
            // }       
            this.futureMeetingList = data;
            this.filteredFutureMeetingList = this.futureMeetingList;
        });
    }
    selectMeetingFilterDate() {
        this.selectDateFlag = !this.selectDateFlag;
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
    deleteMeeting(meeting){
        const payload = {userCode: this.loggedInUser.userCode , meetingCode: meeting.meetingCode };
        this._meetingService.endMeeting(payload).subscribe(data => {
            this.filteredFutureMeetingList.splice(this.filteredFutureMeetingList.indexOf(meeting), 1);
        });
    }
    cancelMeeting(meeting) {
        const payload = {userCode: this.loggedInUser.userCode , meetingCode: meeting.meetingCode };
        this._meetingService.cancelMeeting(payload).subscribe(data => {
           // this.filteredFutureMeetingList.splice(this.filteredFutureMeetingList.indexOf(meeting), 1);
           this.showActionIcon = false;
            this.showCancelMeeting = true;
        }); 
    }
}
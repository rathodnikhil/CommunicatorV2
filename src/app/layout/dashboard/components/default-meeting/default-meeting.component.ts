import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { MeetingService } from '../../../../services/meeting-service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AlertService } from '../../../../services/alert.service';
@Component({
    selector: 'app-default-meeting',
    templateUrl: './default-meeting.component.html',
    styleUrls: ['./default-meeting.component.scss'],
    providers: [AlertService]
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
    searchText: String;
    @ViewChild('chatPanel') chatPanel: ElementRef;
    @ViewChild('chatBody') chatBody: ElementRef;
    constructor(userService: UserService, meetingService: MeetingService, private router: Router, private toastr: ToastrService,public alertService: AlertService) {
        this._userService = userService;
        this._meetingService = meetingService;
    }
    ngOnInit() {
        this.selectDateFlag = true;
        this.showActionIcon = true;
        this.showCancelMeeting = false;
        //loggedInUser web service call
        this._userService.getLoggedInUserObj().subscribe(data => {
            if(data.errorFl === true || data.warningFl === true){
                this.loggedInUser = {};
                return this.alertService.warning(data.message, "Warning"); 
            }else{ 
            this.loggedInUser = data;
            }
        });

        //getAllFutureMeetingList webservice call
        this.getAllFutureMeetingList();

        // recent meeting webservice call    
        const payload = { userCode: this.loggedInUser.userCode };
        // this.recentMeeting = {};
        // this._meetingService.getRecentMeetingByUser().subscribe(data => {
        //     if(data.errorFl === true || data.warningFl === true){
        //         this.recentMeeting = {};
        //         return this.alertService.warning(data.message, "Warning"); 
        //     }else{ 
        //     this.recentMeeting = data;
        //     }
        // });
    }

    ngAfterViewInit(): void {

        this.chatBody.nativeElement.style.height = (this.chatPanel.nativeElement.offsetHeight
            - (this.chatBody.nativeElement.offsetTop + 30)) + 'px';
    }
    switchRoute() {        
        this.CurrentRoute.emit(1);
    }

    // future meeting list web service call
    getAllFutureMeetingList() {
        
        const payload = { userCode: this.loggedInUser.userCode };
        this.futureMeetingList = [];
        this._meetingService.getFutureMeetingListByUser().subscribe(data => {
            if(data[0].errorFl || data[0].warningFl){
                this.futureMeetingList = [];
                return this.alertService.warning(data[0].message, "Warning"); 
            } else{
                this.futureMeetingList = data;
                this.filteredFutureMeetingList = data;
            }
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
    startMeeting(meeting){
        var selectedMeetingStartDate = new Date(meeting.meetingStartDateTime);
        var currentDate = new Date();
        var curr_day = currentDate.getDate();
        // if(selectedMeetingStartDate.getDate() === currentDate.getDate() && selectedMeetingStartDate.getDate()=== currentDate.getDate() && 
        // selectedMeetingStartDate.getDate() === currentDate.getDate()){
        //     if(meeting.meetingStartDateTime <= Date.now() ) {
        //       this.router.navigate(['/meeting']);
        //     }else{
        //         return this.alertService.warning("Wait to reach meeting start time", "Warning"); 
        //     }
        // }else{
        //     return this.alertService.warning("This meeting you can not start today , please check meeting date", "Warning"); 
        // }
        this.router.navigate(['/meeting']);
    }
    deleteMeeting(meeting) {
        const payload = { userCode: this.loggedInUser.userCode, meetingCode: meeting.meetingCode };
        this._meetingService.endMeeting(payload).subscribe(data => {
            if(data.errorFl === true || data.warningFl === true){
                this.recentMeeting = {};
                return this.alertService.warning(data.message, "Warning"); 
            }else{ 
            this.filteredFutureMeetingList.splice(this.filteredFutureMeetingList.indexOf(meeting), 1);
            }
        });
    }
    cancelMeeting(meeting) {
        const payload = { userCode: this.loggedInUser.userCode, meetingCode: meeting.meetingCode };
        this._meetingService.cancelMeeting(payload).subscribe(data => {
            if(data.errorFl === true || data.warningFl === true){
                this.recentMeeting = {};
                return this.alertService.warning(data.message, "Warning"); 
            }else{ 
            // this.filteredFutureMeetingList.splice(this.filteredFutureMeetingList.indexOf(meeting), 1);
            if(meeting.status.status === "CANCEL"){
                alert('if');
                this.showActionIcon = false;
            }
            //this.showCancelMeeting = true;
            }
        });
    }
 
    copyToOutLook(event) {
        var meetingDetails = this.getMeetingDetails();
        const a = document.createElement('a');
        a.href = 'mailto:?subject=' + "meeting Subject"+'&body=' + meetingDetails;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
       
    }
    //copy meeting content
    copyToClipboard() {
        var meetingDetails = this.getMeetingDetails();
        var tempInput = $('<input>').val(meetingDetails).appendTo('body').select()
        document.execCommand('copy');
      
    }
   joinMeetingNow(){
       alert('join now');
   }
    getTimeZone() {
        const offset = new Date().getTimezoneOffset(), o = Math.abs(offset);
        return (offset < 0 ? '+' : '-') + ('00' + Math.floor(o / 60)).slice(-2) + ':' + ('00' + (o % 60)).slice(-2);
    }
  

    //get meeting details
    getMeetingDetails(): string {
      var meetingDetails= "meeting detaisl"
        return meetingDetails;
    }
}
import { Component, OnInit } from '@angular/core';
import { MeetingService } from '../../../services/meeting-service';
import { UserService } from '../../../services/user.service';
import { PaginationInstance } from 'ngx-pagination';
import { AlertService } from '../../../services/alert.service';
// import * as fileSaver from 'file-saver';
@Component({
    selector: 'app-past-meetings',
    templateUrl: './past-meetings.component.html',
    styleUrls: ['./past-meetings.component.scss'],
    providers : [AlertService]
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
    constructor(meetingService: MeetingService, userService: UserService , public alertService: AlertService) {
        this._meetingService = meetingService;
        this._userService = userService;
    }

    ngOnInit() {
        //loggedInuser Object webservice call
        this._userService.getLoggedInUserObj().subscribe(data => {
            if(data.errorFl === true || data.warningFl === true){
                return this.alertService.warning(data.message, "Warning"); 
            }else{
                this.loggedInUser = data;
                this.getPastMeetingsByuser();
            }
        });
    }

    getPastMeetingsByuser() {
        const payload = { userCode: this.loggedInUser.userCode };
        this._meetingService.getPastMeetingsByUser(payload).subscribe(data => {
        if(data[0].errorFl || data[0].warningFl){
             this.pastMeetingList = [];
             return this.alertService.warning(data[0].message, "Warning"); 
         } else{
            this.pastMeetingList = data;
         }
        });
    }
   
    downloadMom(data) {
     
        if (data.mom === "" || data.mom === null || typeof data.mom === "undefined") {
            return this.alertService.warning('No MOM for this meeting has been added', "Warning");
        } else{
        data.mom.momDescription = data.mom.momDescription.split('\n');
        data.mom.momDescription = data.mom.momDescription.join('\r\n ');
        const fileType = 'text/json';

        var a = document.createElement('a');
        document.body.appendChild(a);
        a.setAttribute('style', 'display: none');
        a.setAttribute('href', `data:${fileType};charset=utf-8,${encodeURIComponent(data.mom.momDescription)}`);
        // a.href = url;
        a.download = data.meetingCode + '.txt';
        a.click();
        // window.URL.revokeObjectURL(url);
        a.remove(); // remove the element
        this.alertService.success("File has been downloaded.", "MOM Download");
    }
    
    }
    onPageChange(number: number) {
        this.config.currentPage = number;
    }
    replaceLineBreak(s:string) {
        return s && s.replace('meetNowFlag','');
      }
      downloadRecording(data) {
        this.alertService.success("No recording for this meeting has been added", "Recording Download");
    }
}

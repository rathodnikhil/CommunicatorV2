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
    //download chat and mom file
    downloadFile() {
    //    / this._meetingService.downloadPdfReportFile();
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
   
    downloadMom(meetingCode) {

        const payload = { fileName: "java-tutorial.pdf" };
        
        this._meetingService.downloadMom(payload).subscribe(
            (res) => {
                alert();
                //  saveAs(res, payload.fileName);
            }
        );

    }
    onPageChange(number: number) {
        this.config.currentPage = number;
    }
}

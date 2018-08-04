import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as urlConstants from './urlConstants';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { RequestOptions, ResponseContentType } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';
import { Headers, Response } from '@angular/http';
import { ApiRequestService } from './api-request.service';
import { BehaviorSubject, Subject, ReplaySubject } from 'rxjs/Rx';

@Injectable()
export class MeetingService {
_loginService: LoginService;
futureMeetingList$: Subject<any[]> = new BehaviorSubject<any>({});  
recentMeeting$: Subject<any> = new BehaviorSubject<any>({});
    constructor(private http: Http , loginService: LoginService, private apiRequest: ApiRequestService) {
        this._loginService = loginService;
     }

     //schedule meeting webserce details
     scheduleMeeting(payload): Observable<any> {
        const url = urlConstants.baseUrl + 'scheduleMeeting';
        let resp : ReplaySubject<any> = new ReplaySubject<any>(1);
          this.apiRequest.post(url,payload).subscribe(data => {
              resp.next(data);
          },
            err => {
            //   alert("Error occured");
            //   alert(err);
            });
    
        return resp;
      }
  //future meeting list webservice details
    setFutureMeetimgList(payload) {
        const url = urlConstants.baseUrl + 'getFutureMeetingByUser?userCode=' + payload.userCode;
        this.apiRequest.post(url, payload).subscribe(data => {
            this.futureMeetingList$.next(data);
        },
            err => {
               // alert(err);
            });
    }
    getFutureMeetingListByUser() {
        return this.futureMeetingList$;
    }
   
    //recent meeting webservice
    setRecentMeetingByUser(payload) {
        const url = urlConstants.baseUrl + 'getRecentMeetingByUser?email=' + payload.email;
        this.apiRequest.post(url, payload).subscribe(data => {
            this.recentMeeting$.next(data);
        },
            err => {
             //   alert(err);
            });
    }
    getRecentMeetingByUser() {
        return this.recentMeeting$;
    }
    getTotalMeetingCountByLoggedInUserId(payload) {
        const url = urlConstants.baseUrl + 'getTotalMeetingCountByLoggedInUserId';
        return this.http.post(url, payload);
    }
    downloadPdfReportFile() {
        const url = urlConstants.baseUrl + 'downloadPdfReportFile';
        return this.http.post(url, null);
    }
    getPastMeetingsByUser(payload) {
        const url = urlConstants.baseUrl + 'getPastMeetingsByUser';
        return this.http.post(url, payload);
    }
    getPastMeetingsScheduledByUser(payload) {
        const url = urlConstants.baseUrl + 'getPastMeetingsScheduledByUser?loggedInUserId=' + payload.loggedInUserId;
        return this.http.post(url, payload);
    }
    getMeetingsMomByUser(payload) {
        const url = urlConstants.baseUrl + 'getMeetingsMomByUser?loggedInUserId=' + payload.loggedInUserId;
        return this.http.post(url, payload);
    }
    download() {
        const url = urlConstants.baseUrl + 'downloadFile';
        return this.http.get(url);
    }
    getMeetingAttendee(payload) {
        const url = urlConstants.baseUrl + 'getMeetingAttendee?meetingId=' + payload.meetingId;
        return this.http.post(url, payload);
    }
    filedownload(payload): Observable<any> {
        const url = urlConstants.baseUrl + 'filedownload?fileName=' + payload.fileName;
        return this.http.post(url, { responseType: ResponseContentType.Blob }).map((res) => {
            return new Blob([res.arrayBuffer()], { type: 'application/octet-stream' })
        });
    }
    getAllMeetingsbyLoggedInUserId(payload) {
  
        const url = urlConstants.baseUrl + 'getAllMeetingsByLoggedInUserId?loggedInUserId=' + payload;
        return this.http.post(url, payload);
    }

    verifyUser(payload) {
        const url = urlConstants.baseUrl + 'saveMomDetails';
        return this.http.post(url, payload);
    }
    saveMomDetails(payload): Observable<any> {
        const url = urlConstants.baseUrl + 'saveMomDetails';
        let resp: ReplaySubject<any> = new ReplaySubject<any>(1);
        this.http.post(url, payload).subscribe(data => {
            resp.next(data);
        },
            err => {
                //console.log(err);
                //resp.next(err);
            });

        return resp;
    }
}

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
    constructor(private http: Http, loginService: LoginService, private apiRequest: ApiRequestService) {
        this._loginService = loginService;
    }

    //schedule meeting webserce details
    scheduleMeeting(payload): Observable<any> {
        const url = urlConstants.baseUrl + 'scheduleMeeting';
        let resp: ReplaySubject<any> = new ReplaySubject<any>(1);
        this.apiRequest.post(url, payload).subscribe(data => {
            resp.next(data);
        },
            err => {
                //   alert("Error occured");
                //   alert(err);
            });

        return resp;
    }
        //meetNow webservice details
        meetNow(payload): Observable<any> {
            const url = urlConstants.baseUrl + 'meetNow';
            let resp: ReplaySubject<any> = new ReplaySubject<any>(1);
            this.apiRequest.post(url, payload).subscribe(data => {
                resp.next(data);
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
        const url = urlConstants.baseUrl + 'getRecentMeetingByUser?userCode=' + payload.userCode;
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
  
    getPastMeetingsByUser(payload) {
        const url = urlConstants.baseUrl + 'getPastMeetingsByUser?userCode=' + payload.userCode;
        return this.apiRequest.post(url, payload);
    }
 
    getMeetingAttendee(payload) {
        const url = urlConstants.baseUrl + 'getMeetingAttendee?meetingId=' + payload.meetingId;
        return this.http.post(url, payload);
    }
  
    getAllMeetingsbyLoggedInUserId(payload) {
        const url = urlConstants.baseUrl + 'getAllMeetingsByLoggedInUserId?userCode=' + payload.userCode;
        return this.apiRequest.post(url, payload);
    }

    saveMomDetails(payload): Observable<any> {
        const url = urlConstants.baseUrl + 'saveMomDetails';
        let resp: ReplaySubject<any> = new ReplaySubject<any>(1);
        this.apiRequest.post(url, payload).subscribe(data => {
            resp.next(data);
        },
            err => {
                //console.log(err);
                //resp.next(err);
            });

        return resp;
    }
    verifyMeetingHost(payload) {
        const url = urlConstants.baseUrl + 'startMeetingByHost';
        return this.apiRequest.post(url, payload);
    }
    endMeeting(payload) {
        const url = urlConstants.baseUrl + 'endMeeting?userCode=' + payload.userCode + '&meetingCode=' +payload.meetingCode;
        return this.apiRequest.post(url, payload);
    }
    cancelMeeting(payload) {
        const url = urlConstants.baseUrl + 'cancelMeeting?userCode=' + payload.userCode + '&meetingCode=' +payload.meetingCode;
        return this.apiRequest.post(url, payload);
    }
    
}

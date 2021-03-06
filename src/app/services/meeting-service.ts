import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from 'environments/environment';
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

    // schedule meeting webserce details
    scheduleMeeting(payload): Observable<any> {
        const url = environment.baseUrl + 'scheduleMeeting';
        const resp: ReplaySubject<any> = new ReplaySubject<any>(1);
        this.apiRequest.post(url, payload).subscribe(data => {
            resp.next(data);
            });

        return resp;
    }
        // meetNow webservice details
        meetNow(payload): Observable<any> {
            const url = environment.baseUrl + 'meetNow';
            const resp: ReplaySubject<any> = new ReplaySubject<any>(1);
            this.apiRequest.post(url, payload).subscribe(data => {
                resp.next(data);
             });
            return resp;
        }
    // future meeting list webservice details
    setFutureMeetimgList() {
        const url = environment.baseUrl + 'getFutureMeetingByUser';
        this.apiRequest.post(url, null).subscribe(data => {
            this.futureMeetingList$.next(data);
            });
    }
    getFutureMeetingListByUser() {
        return this.futureMeetingList$;
    }

    // recent meeting webservice
    setRecentMeetingByUser(payload) {
        const url = environment.baseUrl + 'getRecentMeetingByUser?userCode=' + payload.userCode;
        this.apiRequest.post(url, payload).subscribe(data => {
            this.recentMeeting$.next(data);
        });
    }
    getRecentMeetingByUser() {
        return this.recentMeeting$;
    }
    getTodaysMeeting() {
        const url = environment.baseUrl + 'getTodaysMeeting';
        this.apiRequest.post(url, null).subscribe(data => {
            this.futureMeetingList$.next(data);
            });
        return this.apiRequest.post(url, null);
    }
    getPastMeetingsByMonth(payload) {
        const url = environment.baseUrl + 'getPastMeetingsByMonth?lastMeetingYear=' +
        payload.lastMeetingYear + '&lastMeetingMonth=' + payload.lastMeetingMonth + '&calendarFl=' + payload.calendarFl;
        return this.apiRequest.post(url, payload);
    }
    getMeetingAttendee(payload) {
        const url = environment.baseUrl + 'getMeetingAttendee?meetingCode=' + payload.meetingCode;
        return this.apiRequest.post(url, payload);
    }
    saveMomDetails(payload): Observable<any> {
        const url = environment.baseUrl + 'saveMomDetails';
        const resp: ReplaySubject<any> = new ReplaySubject<any>(1);
        this.apiRequest.post(url, payload).subscribe(data => {
            resp.next(data);
            });

        return resp;
    }
    verifyMeetingHost(payload) {
        const url = environment.baseUrl + 'startMeetingByHost';
        return this.http.post(url, payload).map((resp: any) => {
            return resp.json();
        });
    }
    endMeeting(payload) {
        const url = environment.baseUrl + 'endMeeting?userCode=' + payload.userCode + '&meetingCode=' + payload.meetingCode;
        return this.apiRequest.post(url, payload);
    }
    cancelMeeting(payload) {
        const url = environment.baseUrl + 'cancelMeeting?meetingCode=' + payload.meetingCode;
        return this.apiRequest.post(url, payload);
    }
    getRemeberEmails() {
        const url = environment.baseUrl + 'getRemeberEmails';
        return this.apiRequest.post(url, null);
    }
    saveMeetingPermission(payload) {
        const url = environment.baseUrl + 'saveMeetingPermission?meetingPermissionList=' + payload;
        return this.apiRequest.post(url, payload).map((resp: any) => {
            return resp.json();
        });
    }
    sendMeetingInvitationMail(payload) {
        const url = environment.baseUrl + 'sendMeetingInvitationMail';
        return this.apiRequest.post(url, payload).map((resp: any) => {
            return resp;
        });
    }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as urlConstants from './urlConstants';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { RequestOptions, ResponseContentType } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';
import { Headers, Response } from '@angular/http';
@Injectable()
export class MeetingServiceService {
_loginService: LoginService;
jwtToken: string;

    constructor(private http: Http , loginService: LoginService) {
        this._loginService = loginService;
        this.jwtToken = this._loginService.getJwtToken();
     }
    getFutureMeetingByUser(payload) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('authentication', `${payload.token}`);
        headers.append('app-Subject' , 'admin');
        headers.append('Authorization' , this.jwtToken);
        let options = new RequestOptions({ headers: headers });
        const url = urlConstants.baseUrl + 'getFutureMeetingByUser';
        return this.http.post(url, payload,options);
        // return this.http.get(urlConstants.baseUrl + 'allMemberList');
    }
 
    scheduleMeeting(payload) {
        const url = urlConstants.baseUrl + 'scheduleMeeting';
        return this.http.post(url, payload);
    }
    getRecentMeetingByUser(payload) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('authentication', `${payload.token}`);
        headers.append('app-Subject' , 'admin');
        headers.append('Authorization' , this.jwtToken);
        let options = new RequestOptions({ headers: headers });
        const url = urlConstants.baseUrl + 'getRecentMeetingByUser';
        return this.http.post(url, payload,options);
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
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('authentication', `${payload.token}`);
        headers.append('app-Subject' , 'admin');
        headers.append('Authorization' , this.jwtToken);
        let options = new RequestOptions({ headers: headers });
        const url = urlConstants.baseUrl + 'getAllMeetingsByLoggedInUserId?loggedInUserId=' + payload;
        return this.http.post(url, payload,options);
    }
}

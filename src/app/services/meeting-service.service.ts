import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as urlConstants from './urlConstants';

@Injectable()
export class MeetingServiceService {

  constructor(private http: Http) { }
  getFutureMeetingByUser(payload) {
        const url = urlConstants.baseUrl + 'getFutureMeetingByUser?loggedInUserId=' + payload.loggedInUserId;
        return this.http.post(url, payload);
      // return this.http.get(urlConstants.baseUrl + 'allMemberList');
    }
    getPastMeetingByUser(payload) {
        const url = urlConstants.baseUrl + 'getPastMeetingByUser?loggedInUserId=' + payload.loggedInUserId;
        return this.http.post(url, payload);
      // return this.http.get(urlConstants.baseUrl + 'allMemberList');
    }
    scheduleMeeting(payload) {
        const url = urlConstants.baseUrl + 'scheduleMeeting';
        return this.http.post(url, payload);
    }
    getRecentMeetingByUser(payload) {
        const url = urlConstants.baseUrl + 'getRecentMeetingByUser?loggedInUserId=' + payload.loggedInUserId;
        return this.http.post(url, payload);
    }
    getTotalMeetingCountByLoggedInUserId(payload) {
        const url = urlConstants.baseUrl + 'getTotalMeetingCountByLoggedInUserId?loggedInUserId=' + payload.loggedInUserId;
        return this.http.post(url, payload);
    }
    downloadPdfReportFile() {
        const url = urlConstants.baseUrl + 'downloadPdfReportFile';
        return this.http.post(url , null);
    }
    getPastMeetingsByUser(payload) {
        const url = urlConstants.baseUrl + 'getPastMeetingsByUser?loggedInUserId=' + payload.loggedInUserId;
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
}

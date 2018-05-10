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
    getRecentMetingByLoggedInUSer(payload) {
        const url = urlConstants.baseUrl + 'getRecentMeetingByUser?loggedInUserId=' + payload.loggedInUserId;
        return this.http.post(url, payload);
      // return this.http.get(urlConstants.baseUrl + 'allMemberList');
    }
    getAttendeeByMeetingId(payload) {
        const url = urlConstants.baseUrl + 'getAttendeeByMeetingId?loggedInUserId=' + payload.loggedInUserId;
        return this.http.post(url, payload);
    }
    scheduleMeeting(payload) {
        const url = urlConstants.baseUrl + 'scheduleMeeting';
        return this.http.post(url, payload);
    }
    getRecentMeetingByUser(payload) {
        debugger;
        const url = urlConstants.baseUrl + 'getRecentMeetingByUser?loggedInUserId=' + payload.loggedInUserId;
        return this.http.post(url, payload);
    }
}

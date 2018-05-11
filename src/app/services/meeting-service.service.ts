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
}

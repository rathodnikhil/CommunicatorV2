import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as urlConstants from './urlConstants';

@Injectable()
export class MeetingServiceService {

  constructor(private http: Http) { }
    getMetingListByLoggedInUSer(payload) {
        const url = urlConstants.baseUrl + 'meetingListByUser?loggedInUserId=' + payload.loggedInUserId;
        return this.http.post(url, payload);
      // return this.http.get(urlConstants.baseUrl + 'allMemberList');
    }
}

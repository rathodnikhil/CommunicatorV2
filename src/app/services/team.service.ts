import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as urlConstants from './urlConstants';

@Injectable()
export class TeamService {
    loggedInUser: any;
    constructor(private http: Http) { }
    getTeamsByLoggedInUserId(payload) {
      const url = urlConstants.baseUrl + 'getTeamsByLoggedInUserId?loggedInUserId=' + payload.loggedInUserId;
      return this.http.post(url, payload);
    // return this.http.get(urlConstants.baseUrl + 'allMemberList');
    }
}

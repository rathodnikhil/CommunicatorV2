import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as urlConstants from './urlConstants';

@Injectable()
export class TeamService {
    loggedInUser: any;
    teamId: any;
    constructor(private http: Http) { }
    getTeamsByLoggedInUserId(payload) {
      const url = urlConstants.baseUrl + 'getTeamsByLoggedInUserId?loggedInUserId=' + payload.loggedInUserId;
      return this.http.post(url, payload);
    // return this.http.get(urlConstants.baseUrl + 'allMemberList');
    }
    getMembersByTeam(payload) {
       // debugger;
        const url = urlConstants.baseUrl + 'getMembersByTeam?teamId=' + payload.teamId;
        return this.http.post(url, payload);
      // return this.http.get(urlConstants.baseUrl + 'allMemberList');
      }
      getMembersByLoggedInUserId(payload) {
        // debugger;
         const url = urlConstants.baseUrl + 'getMembersByLoggedInUserId?loggedInUserId=' + payload.loggedInUserId;
         return this.http.post(url, payload);
       // return this.http.get(urlConstants.baseUrl + 'allMemberList');
       }
}

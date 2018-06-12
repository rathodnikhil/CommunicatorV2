import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as urlConstants from './urlConstants';
import { RequestOptions, ResponseContentType } from '@angular/http';
import { Headers, Response } from '@angular/http';

@Injectable()
export class GroupService {
    loggedInUser: any;
    constructor(private http: Http) { }

    //get groups by loggedinuser
    getGroupByLoggedInUserId(payload) {
      const url = urlConstants.baseUrl + 'getGroupByLoggedInUserId';
      return this.http.post(url, payload);
    }

    getTotalGroupByLoggedInUserId(payload) {
      const url = urlConstants.baseUrl + 'getTotalGroupByLoggedInUserId';
      return this.http.post(url, payload);
    }
    getTeamsByLoggedInUserId(payload) {
        const url = urlConstants.baseUrl + 'getTeamsByLoggedInUserId?loggedInUserId=' + payload.loggedInUserId;
        return this.http.post(url, payload);
      // return this.http.get(urlConstants.baseUrl + 'allMemberList');
      }
      saveGroupDetails(payload) {
        const url = urlConstants.baseUrl + 'saveGroupDetails';
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('authentication', `${payload.token}`);
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url,payload, options)
      }
      saveBroadcastMessage(payload) {
        const url = urlConstants.baseUrl + 'saveBroadcastMessage';
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('authentication', `${payload.token}`);
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url,payload, options)
      }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as urlConstants from './urlConstants';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
import { RequestOptions, ResponseContentType } from '@angular/http';
import { Headers, Response } from '@angular/http';

@Injectable()
export class TeamService {
    eamil: any;
    teamId: any;
    constructor(private http: Http) { }
    getTeamsByLoggedInUserId(payload) {
      const url = urlConstants.baseUrl + 'getTeamsByLoggedInUserId?email=' + payload.email;
      return this.http.post(url, payload);
    // return this.http.get(urlConstants.baseUrl + 'allMemberList');
    }
    getMembersByTeam(payload) {
        const url = urlConstants.baseUrl + 'getMembersByTeam?teamCode=' + payload.teamCode;
        return this.http.post(url, payload);
      }
      getMembersByLoggedInUserId(payload) {
         const url = urlConstants.baseUrl + 'getMembersByLoggedInUserId?loggedInUserId=' + payload.loggedInUserId;
         return this.http.post(url, payload);
       // return this.http.get(urlConstants.baseUrl + 'allMemberList');
       }
       getAllEnableTeams() {
        const url = urlConstants.baseUrl + 'getAllEnableTeams';
        return this.http.get(url);
       }

      saveTeamDetails(payload){
        const url = urlConstants.baseUrl + 'saveTeamDetails';
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('authentication', `${payload.token}`);
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url,payload, options)
        }
   
}

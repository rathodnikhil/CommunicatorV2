import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as urlConstants from './urlConstants';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
import { RequestOptions, ResponseContentType } from '@angular/http';
import { Headers, Response } from '@angular/http';

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
       getAllEnableTeams() {
        const url = urlConstants.baseUrl + 'getAllEnableTeams';
        return this.http.get(url);
       }
      //  saveTeamDetails(payload) {
      //   const url = urlConstants.baseUrl + 'saveTeamDetails?team=' + payload;
      //   return this.http.post(url, payload);
      //  }
       saveTeamDetails(payload){
        alert(payload.teamId.teamName);
        const url = urlConstants.baseUrl + 'saveTeamDetails';
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('authentication', `${payload.token}`);
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url,payload, options)
        }
}

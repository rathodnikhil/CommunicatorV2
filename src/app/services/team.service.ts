import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as urlConstants from './urlConstants';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
import { RequestOptions, ResponseContentType } from '@angular/http';
import { Headers, Response } from '@angular/http';
import { LoginService } from './login.service';

@Injectable()
export class TeamService {
    email: any;
    teamId: any;
    _loginService: LoginService;
    jwtToken: string;
    constructor(private http: Http ,loginService: LoginService) {
      this._loginService = loginService;
      this.jwtToken = this._loginService.getJwtToken();
     }
    getTeamsByLoggedInUserId(payload) {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('authentication', `${payload.token}`);
      headers.append('app-Subject' , 'admin');
      headers.append('Authorization' , this.jwtToken);
      let options = new RequestOptions({ headers: headers });
      const url = urlConstants.baseUrl + 'getTeamsByLoggedInUserId?email=' + payload.email;
      return this.http.post(url, payload,options);
    // return this.http.get(urlConstants.baseUrl + 'allMemberList');
    }
    getMembersByTeam(payload) {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('authentication', `${payload.token}`);
      headers.append('app-Subject' , 'admin');
      headers.append('Authorization' , this.jwtToken);
      let options = new RequestOptions({ headers: headers });
        const url = urlConstants.baseUrl + 'getMembersByTeam?teamCode=' + payload.teamCode;
        return this.http.post(url, payload,options);
      }
      getMembersByLoggedInUserId(payload) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('authentication', `${payload.token}`);
        headers.append('app-Subject' , 'admin');
        headers.append('Authorization' , this.jwtToken);
        let options = new RequestOptions({ headers: headers });
         const url = urlConstants.baseUrl + 'getMembersByLoggedInUserId?loggedInUserId=' + payload.loggedInUserId;
         return this.http.post(url, payload,options);
       // return this.http.get(urlConstants.baseUrl + 'allMemberList');
       }
       getAllEnableTeams() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
       // headers.append('authentication', `${payload.token}`);
        headers.append('app-Subject' , 'admin');
        headers.append('Authorization' , this.jwtToken);
        let options = new RequestOptions({ headers: headers });
        const url = urlConstants.baseUrl + 'getAllEnableTeams';
        return this.http.get(url,options);
       }

      saveTeamDetails(payload){
        const url = urlConstants.baseUrl + 'saveTeamDetails';
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('authentication', `${payload.token}`);
        headers.append('app-Subject' , 'admin');
        headers.append('Authorization' , this.jwtToken);
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url,payload, options)
        }
   
}

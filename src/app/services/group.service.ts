import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as urlConstants from './urlConstants';
import { RequestOptions, ResponseContentType } from '@angular/http';
import { Headers, Response } from '@angular/http';
import { LoginService } from './login.service';

@Injectable()
export class GroupService {
    loggedInUser: any;
   public jwtToken: string ;
   token: any;
    _loginService: LoginService;
    constructor(private http: Http , loginService: LoginService) { 
      this._loginService = loginService;
      this.jwtToken = this._loginService.getJwtToken();
      this.token = this._loginService.caseDaSubject;
    }
   
    //get groups by loggedinuser
    getGroupByLoggedInUserId(payload) {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('authentication', `${payload.token}`);
      headers.append('app-Subject' , 'admin');
      headers.append('Authorization' , this.jwtToken);
      let options = new RequestOptions({ headers: headers });
      const url = urlConstants.baseUrl + 'getGroupByLoggedInUserId';
      return this.http.post(url, payload,options);
    }

    getTotalGroupByLoggedInUserId(payload) {
      const url = urlConstants.baseUrl + 'getTotalGroupByLoggedInUserId';
      return this.http.post(url, payload);
    }
    getTeamsByLoggedInUserId(payload) {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('authentication', `${payload.token}`);
      headers.append('app-Subject' , 'admin');
      headers.append('Authorization' , this.jwtToken);
      let options = new RequestOptions({ headers: headers });
        const url = urlConstants.baseUrl + 'getTeamsByLoggedInUserId?loggedInUserId=' + payload.loggedInUserId;
        return this.http.post(url, payload ,options);
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
     
        alert(this.jwtToken);
        const url = urlConstants.baseUrl + 'saveBroadcastMessage';
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('authentication', `${payload.token}`);
        headers.append('app-Subject' , 'admin');
        headers.append('Authorization' , this.jwtToken);
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url,payload, options)
      }
}

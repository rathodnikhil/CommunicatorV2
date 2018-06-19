import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as urlConstants from './urlConstants';
import { RequestOptions, ResponseContentType } from '@angular/http';
import { Headers, Response } from '@angular/http';
import { LoginService } from './login.service';
import { ApiRequestService } from './api-request.service';
import { BehaviorSubject, Subject, ReplaySubject } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class GroupService {
    loggedInUser: any;
   public jwtToken: string ;
   token: any;
    _loginService: LoginService;
    constructor(private http: Http , loginService: LoginService, private apiRequest: ApiRequestService) { 
      this._loginService = loginService;
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
      }
      saveGroupDetails(payload): Observable<any> {
        const url = urlConstants.baseUrl + 'saveGroupDetails';
        let resp : ReplaySubject<any> = new ReplaySubject<any>(1);
          this.apiRequest.post(url,payload).subscribe(data => {
              resp.next(data);
          },
            err => {
              alert("Error occured");
              alert(err);
            });
    
        return resp;
      }
      saveBroadcastMessage(payload) {
  
        const url = urlConstants.baseUrl + 'saveBroadcastMessage';
        let resp : ReplaySubject<any> = new ReplaySubject<any>(1);
          this.apiRequest.post(url,payload).subscribe(data => {
              resp.next(data);
          },
            err => {
              alert("Error occured");
              alert(err);
            });
    
        return resp;
      }
}

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
   
    _loginService: LoginService;
    loggedInUser: any;
    GroupList$: Subject<any[]> = new BehaviorSubject<any>({});
    constructor(private http: Http , loginService: LoginService, private apiRequest: ApiRequestService) { 
      this._loginService = loginService;
    }
   
    //get groups by loggedinuser
    setGroupList(payload) {
      const url = urlConstants.baseUrl + 'getGroupByLoggedInUserId?email=' + payload.email;
      // const resp = new BehaviorSubject<any>({});
      this.apiRequest.post(url, payload).subscribe(data => {
          this.GroupList$.next(data);
      },
          err => {
              alert(err);
          });
      // return resp;
    }
    getGroupList() {
      return this.GroupList$;
  }
    getTotalGroupByLoggedInUserId(payload) {
      const url = urlConstants.baseUrl + 'getTotalGroupByLoggedInUserId';
      return this.http.post(url, payload);
    }
    getTeamsByLoggedInUserId(payload) {
        const url = urlConstants.baseUrl + 'getTeamsByLoggedInUserId?loggedInUserId=' + payload.loggedInUserId;
        return this.http.post(url, payload );
      }
      saveGroupDetails(payload): Observable<any> {
        const url = urlConstants.baseUrl + 'saveGroupDetails';
        let resp : ReplaySubject<any> = new ReplaySubject<any>(1);
          this.apiRequest.post(url,payload).subscribe(data => {
              resp.next(data);
          },
            err => {
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
              alert(err);
            });
    
        return resp;
      }
}

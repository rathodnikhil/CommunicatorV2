
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as urlConstants from './urlConstants';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
import { RequestOptions, ResponseContentType } from '@angular/http';
import { Headers, Response } from '@angular/http';
import { LoginService } from './login.service';
import { ApiRequestService } from './api-request.service';
import { BehaviorSubject, Subject, ReplaySubject } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class TeamService {
    email: any;
    teamId: any;
    _loginService: LoginService;
    teamList$: Subject<any[]> = new BehaviorSubject<any>({});  
    memberList$: Subject<any[]> = new BehaviorSubject<any>({});  
    constructor(private http: Http ,loginService: LoginService , private apiRequest: ApiRequestService) {
      this._loginService = loginService;
     }
    getTeamsByLoggedInUserId(payload) {
          const url = urlConstants.baseUrl + 'getTeamsByLoggedInUserId?userCode=' + payload.userCode;
          return this.apiRequest.post(url, payload);

    }
      getMemberListByLoggedInUserId(payload) {
        const url = urlConstants.baseUrl + 'getMembersByLoggedInUserId?userCode=' + payload.userCode;
        return this.apiRequest.post(url, payload);
      }
    
       getAllEnableTeams() {
        const url = urlConstants.baseUrl + 'getAllEnableTeams';
        return this.http.get(url);
       }
       //add new team
        saveTeamDetails(payload): Observable<any>{
          const url = urlConstants.baseUrl + 'saveTeamDetails';
          let resp : ReplaySubject<any> = new ReplaySubject<any>(1);
            this.apiRequest.post(url,payload).subscribe(data => {
                resp.next(data);
              });
          return resp;
      }
}

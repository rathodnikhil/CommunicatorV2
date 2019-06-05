
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from 'environments/environment';
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
    constructor(private http: Http , loginService: LoginService , private apiRequest: ApiRequestService) {
      this._loginService = loginService;
     }
    getTeamsByLoggedInUserId() {
          const url = environment.baseUrl + 'getTeamsByLoggedInUserId';
          return this.apiRequest.post(url, null);

    }
      getMemberListByLoggedInUserId() {
        const url = environment.baseUrl + 'getMembersByLoggedInUserId';
        return this.apiRequest.post(url, null);
      }
       getAllEnableTeams() {
        const url = environment.baseUrl + 'getAllEnableTeams';
        return this.apiRequest.get(url);
       }
       // add new team
        saveTeamDetails(payload): Observable<any> {
          const url = environment.baseUrl + 'saveTeamDetails';
          const resp: ReplaySubject<any> = new ReplaySubject<any>(1);
            this.apiRequest.post(url, payload).subscribe(data => {
                resp.next(data);
              });
          return resp;
      }
      deleteTeam(payload) {
        const url = environment.baseUrl + 'deleteTeam?teamCode=' + payload.teamCode + '&status=' + payload.status;
        return this.apiRequest.post(url, payload);
      }
}

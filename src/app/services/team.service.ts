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
    jwtToken: string;
    constructor(private http: Http ,loginService: LoginService , private apiRequest: ApiRequestService) {
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
      const url = urlConstants.baseUrl + 'getMembersByTeam';
      let resp : ReplaySubject<any> = new ReplaySubject<any>(1);
        this.apiRequest.post(url,payload).subscribe(data => {
            resp.next(data);
        },
          err => {
            alert(err);
          });
      return resp;
      }
      getMembersByLoggedInUserId(payload) {
        const url = urlConstants.baseUrl + 'getMembersByLoggedInUserId';
        let resp : ReplaySubject<any> = new ReplaySubject<any>(1);
          this.apiRequest.post(url,payload).subscribe(data => {
              resp.next(data);
          },
            err => {
              alert(err);
            });
        return resp;
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
            },
              err => {
                alert(err);
              });
          return resp;
      }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from 'environments/environment';
import { RequestOptions, ResponseContentType } from '@angular/http';
import { Headers, Response } from '@angular/http';
import { LoginService } from './login.service';
import { ApiRequestService } from './api-request.service';
import { BehaviorSubject, Subject, ReplaySubject } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class GroupService {
  _loginService: LoginService;
  loggedInUser: any;
  GroupList$: Subject<any> = new BehaviorSubject<any>({});
  groupMemberList$: Subject<any[]> = new BehaviorSubject<any>({});
  sideBarMenuList$: Subject<any[]> = new BehaviorSubject<any>({});
  constructor(private http: Http, loginService: LoginService, private apiRequest: ApiRequestService) {
    this._loginService = loginService;
  }
  // get groups by loggedinuser
  setGroupList(payload) {
    const url = environment.baseUrl + 'getGroupByLoggedInUserId?userCode=' + payload.userCode;
    // const resp = new BehaviorSubject<any>({});
    this.apiRequest.post(url, payload).subscribe(data => {
      this.GroupList$.next(data);
    });
  }
  getGroupList() {
    return this.GroupList$;
  }
  profileOtherDetails(payload) {
    const url = environment.baseUrl + 'profileOtherDetails?userCode=' + payload.userCode;
    return this.apiRequest.post(url, payload);
  }
  getTeamsByLoggedInUserId(payload) {
    const url = environment.baseUrl + 'getTeamsByLoggedInUserId?loggedInUserId=' + payload.loggedInUserId;
    return this.http.post(url, payload);
  }

  saveGroupDetails(payload): Observable<any> {
    const url = environment.baseUrl + 'saveGroupDetails';
    const resp: ReplaySubject<any> = new ReplaySubject<any>(1);
    this.apiRequest.post(url, payload).subscribe(data => {
      resp.next(data);
    });
    return resp;
  }
  saveBroadcastMessage(payload) {
    const url = environment.baseUrl + 'saveBroadcastMessage';
    const resp: ReplaySubject<any> = new ReplaySubject<any>(1);
    this.apiRequest.post(url, payload).subscribe(data => {
      resp.next(data);
    });
    return resp;
  }

  setSideBarMenuByLoggedInUSer(payload) {
    const url = environment.baseUrl + 'getSideBarMenuByLoggedInUSer?userCode=' + payload.userCode;
    // const resp = new BehaviorSubject<any>({});
    this.apiRequest.post(url, payload).subscribe(data => {
      this.sideBarMenuList$.next(data);
    });
    // return resp;
  }
  getSideBarMenuByLoggedInUSer() {
    return this.sideBarMenuList$;
  }
  setGroupListObjByLoggedInUserId(payload) {
    const url = environment.baseUrl + 'getGroupListObjByLoggedInUserId?userCode=' + payload.userCode;
    // const resp = new BehaviorSubject<any>({});
    this.apiRequest.post(url, payload).subscribe(data => {
      this.groupMemberList$.next(data);
    });
    // return resp;
  }
  getGroupListObjByLoggedInUserId() {
    return this.groupMemberList$;
  }
  getGroupMembersByGroup(payload) {
    const url = environment.baseUrl + 'getGroupMembersByGroup?userCode=' + payload.userCode;
    return this.apiRequest.post(url, payload);
  }

  saveGroupMember(payload): Observable<any> {
    const url = environment.baseUrl + 'saveGroupMember';
    const resp: ReplaySubject<any> = new ReplaySubject<any>(1);
    this.apiRequest.post(url, payload).subscribe(data => {
      resp.next(data);
    });
    return resp;
  }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from 'environments/environment';
import { LoginService } from './login.service';
import { ApiRequestService } from './api-request.service';
import { BehaviorSubject, Subject, ReplaySubject } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class GroupService {
  _loginService: LoginService;
  loggedInUser: any;
  GroupList$: Subject<any> = new BehaviorSubject<any>({});
  groupMemberList$: Subject<any[]> = new BehaviorSubject<any>({});
  constructor(private http: Http, loginService: LoginService, private apiRequest: ApiRequestService) {
    this._loginService = loginService;
  }
  // get groups by loggedinuser
  setGroupList() {
    const url = environment.baseUrl + 'getGroupByLoggedInUserId';
    this.apiRequest.post(url, null).subscribe(data => {
      this.GroupList$.next(data);
    });
  }
  getGroupList() {
    return this.GroupList$;
  }
  profileOtherDetails() {
    const url = environment.baseUrl + 'profileOtherDetails';
    return this.apiRequest.post(url, null);
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

  getGroupListObjByLoggedInUserId(payload) {
    const url = environment.baseUrl + 'getGroupListObjByLoggedInUserId?groupId=' + payload.groupId;
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
  deleteGroup(payload) {
    const url = environment.baseUrl + 'deleteGroup?groupCode=' + payload.groupCode;
    return this.apiRequest.post(url, payload);
  }
  deleteMember(payload): Observable<any> {
    const url = environment.baseUrl + 'deleteMember';
    const resp: ReplaySubject<any> = new ReplaySubject<any>(1);
    this.apiRequest.post(url, payload).subscribe(data => {
      resp.next(data);
    });
    return resp;
  }
  getMemberByLocalgroup(payload) {
    const url = environment.baseUrl + 'getMemberByLocalgroup?groupId=' + payload.groupId ;
    return this.apiRequest.post(url, payload);
  }
}

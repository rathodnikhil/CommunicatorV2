import { Injectable } from '@angular/core';
import { Http, RequestMethod } from '@angular/http';
import * as urlConstants from './urlConstants';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { BehaviorSubject, Subject, ReplaySubject } from 'rxjs/Rx';
import { LoginService } from './login.service';
import { Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiRequestService } from './api-request.service';
@Injectable()
export class UserService {

    loggedInUserObj$: Subject<any> = new BehaviorSubject<any>({});
    _loginService: LoginService;
    selectedUser$: Subject<any> = new BehaviorSubject<any>({});
    selectedGroup$: Subject<any> = new BehaviorSubject<any>({});
    UserList$: Subject<any[]> = new BehaviorSubject<any>({});
    loggedInUserRole$: Subject<any[]> = new BehaviorSubject<any>({});
    isGuest$: Subject<any> = new BehaviorSubject<any>({});
    constructor(private http: Http, loginService: LoginService, private apiRequest: ApiRequestService) {
        this._loginService = loginService;
    }
    saveUserDetails(payload, teamName): Observable<any> {
        const url = urlConstants.baseUrl + 'saveUserDetails?teamName=' + teamName;
        const resp: ReplaySubject<any> = new ReplaySubject<any>(1);
        this.http.post(url, payload, teamName).subscribe(data => {
            resp.next(data);
            });

        return resp;
    }
    updateUserDetails(payload): Observable<any> {
        const url = urlConstants.baseUrl + 'updateUserDetails';
        return this.apiRequest.post(url, payload);
    }
    saveMemberDetails(payload): Observable<any> {
        const url = urlConstants.baseUrl + 'saveMemberDetails';
        const resp: ReplaySubject<any> = new ReplaySubject<any>(1);
        this.apiRequest.post(url, payload).subscribe(data => {
            resp.next(data);
            });

        return resp;
    }
    saveUserSettings(payload): Observable<any> {
        const url = urlConstants.baseUrl + 'saveUserSettings';
        const resp: ReplaySubject<any> = new ReplaySubject<any>(1);
        this.apiRequest.post(url, payload).subscribe(data => {
            resp.next(data);
            });

        return resp;
    }
    // to verify whether user is registered or not
    verifyUser(payload) {
        const url = urlConstants.baseUrl + 'verifyUser';
        return this.http.post(url, payload);
    }
    setUserList(payload) {
        const url = urlConstants.baseUrl + 'memberListByUser?userCode=' + payload.userCode;
        this.apiRequest.post(url, payload).subscribe(data => {
            this.UserList$.next(data);
        });
    }
    getUserList() {
        return this.UserList$;
    }
  setIsGuest(flag) {
    this.isGuest$.next(flag);
  }
  getIsGuest(flag) {
    return this.isGuest$;
  }
    getUserSettingsByLoggedInUser(payload) {
        const url = urlConstants.baseUrl + 'getUserSettingsByLoggedInUser?userCode=' + payload.userCode;
        return this.apiRequest.post(url, payload);
    }
    setSelectedUser(user) {
        this.selectedUser$.next(user);
    }
    getSelectedUser() {
        return this.selectedUser$;
    }
    setSelectedGroup(Group) {
        this.selectedGroup$.next(Group);
    }
    getSelectedGroup() {
        return this.selectedGroup$;
    }
    getLoggedInUserObj() {
        return this.loggedInUserObj$;
    }
    setLoggedInUserObj(payload): Observable<any> {
        if (payload.isGuest) {
            // save guest user
            const url = urlConstants.baseUrl + 'saveGuestUserDetails';
            this.http.post(url, payload).subscribe(data => {
                this.loggedInUserObj$.next(payload);
                return this.loggedInUserObj$;
            });
            this.loggedInUserObj$.next(payload);
            return this.loggedInUserObj$;
        } else {
            const url = urlConstants.baseUrl + 'loggedInUser?userName=' + payload.userName;
            this.apiRequest.post(url, payload).subscribe(data => {
                this.loggedInUserObj$.next(data);
                localStorage.setItem('loggedInuserName', data.firstName + ' ' + data.lastName);
            });
        }
        return this.loggedInUserObj$;
    }

    getAllAdminList() {
        const url = urlConstants.baseUrl + 'getAllAdminList';
        return this.apiRequest.get(url);
    }
    forgotPasswordSendMail(payload) {
        const url = urlConstants.baseUrl + 'forgotPasswordSendMail?email=' + payload.email;
        return this.http.post(url, payload);
    }
    resetpassword(payload) {
        const url = urlConstants.baseUrl + 'resetPassword';
        return this.http.post(url, payload);
    }
    logoutApplication(payload) {
        const url = urlConstants.baseUrl + 'logoutApplication?userCode=' + payload.userCode;
        return this.apiRequest.post(url, payload);
    }
    searchWholememberList(payload) {
        const url = urlConstants.baseUrl + 'searchWholememberList?searchText=' + payload.searchText + '&userCode=' + payload.userCode;
        return this.apiRequest.post(url, payload);
    }
    SaveUserPermission(payload) {
        const url = urlConstants.baseUrl + 'SaveUserPermission';
        return this.apiRequest.post(url, payload);
    }
    addNewMemberFromWholeList(payload) {
        const url = urlConstants.baseUrl + 'addNewMemberFromWholeList';
        return this.apiRequest.post(url, payload);
    }
    getGuestUsersByLoggedInUser(payload) {
        const url = urlConstants.baseUrl + 'getGuestUsersByLoggedInUser?userCode=' + payload.userCode;
        return this.apiRequest.post(url, payload);
    }
    deleteUser(payload) {
        const url = urlConstants.baseUrl + 'deleteUser?userCode=' + payload.userCode;
        return this.apiRequest.post(url , payload);
    }
}

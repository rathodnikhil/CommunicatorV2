import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { BehaviorSubject, Subject, ReplaySubject } from 'rxjs/Rx';
import { LoginService } from './login.service';
import 'rxjs/add/operator/catch';
import { ApiRequestService } from './api-request.service';
@Injectable()
export class UserService {

    loggedInUserObj$: Subject<any> = new BehaviorSubject<any>({});
    _loginService: LoginService;
    selectedUser$: Subject<any> = new BehaviorSubject<any>({});
    selectedGroup$: Subject<any> = new BehaviorSubject<any>({});
    UserList$: Subject<any[]> = new BehaviorSubject<any>({});
    isGuest$: Subject<any> = new BehaviorSubject<any>({});
    sideBarMenuList$: Subject<any[]> = new BehaviorSubject<any>({});
    constructor(private http: Http, loginService: LoginService, private apiRequest: ApiRequestService) {
        this._loginService = loginService;
    }
    saveUserDetails(payload, teamName): Observable<any> {
        const url = environment.baseUrl + 'saveUserDetails?teamName=' + teamName;
        const resp: ReplaySubject<any> = new ReplaySubject<any>(1);
        this.http.post(url, payload, teamName).subscribe(data => {
            resp.next(data);
        });

        return resp;
    }
    updateUserDetails(payload): Observable<any> {
        const url = environment.baseUrl + 'updateUserDetails';
        return this.apiRequest.post(url, payload);
    }
    saveMemberDetails(payload): Observable<any> {
        const url = environment.baseUrl + 'saveMemberDetails';
        const resp: ReplaySubject<any> = new ReplaySubject<any>(1);
        this.apiRequest.post(url, payload).subscribe(data => {
            resp.next(data);
        });

        return resp;
    }
    saveUserSettings(payload): Observable<any> {
        const url = environment.baseUrl + 'saveUserSettings';
        const resp: ReplaySubject<any> = new ReplaySubject<any>(1);
        this.apiRequest.post(url, payload).subscribe(data => {
            resp.next(data);
        });

        return resp;
    }
    // to verify whether user is registered or not
    verifyUser(payload) {
        const url = environment.baseUrl + 'verifyUser';
        return this.http.post(url, payload);
    }
    setUserList() {
        const url = environment.baseUrl + 'memberListByUser';
        this.apiRequest.post(url , null).subscribe(data => {
            this.UserList$.next(data);
        });
    }
    getUserList() {
        return this.UserList$;
    }
    // setIsGuest(flag) {
    //     this.isGuest$.next(flag);
    // }
    // getIsGuest(flag) {
    //     return this.isGuest$;
    // }
    getUserSettingsByLoggedInUser(payload) {
        const url = environment.baseUrl + 'getUserSettingsByLoggedInUser?userCode=' + payload.userCode;
        return this.apiRequest.post(url, payload);
    }
    setSelectedUser(user) {
        // localStorage.setItem('selectedUser', this.userName);
        localStorage.setItem('selectedUser', user.firstName + ' ' + user.lastName);
        localStorage.setItem('selectedUserCode' , user.userCode);
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
            const url = environment.baseUrl + 'saveGuestUserDetails';
            this.http.post(url, payload).subscribe(data => {
                if (data.json().warningFl === true) {
                    this.loggedInUserObj$.next('invalid');
                } else {
                    this.loggedInUserObj$.next(payload);
                }
                return this.loggedInUserObj$;
            });
            // this.loggedInUserObj$.next(payload);
            // return this.loggedInUserObj$;
        } else {
            const url = environment.baseUrl + 'loggedInUser?userName=' + payload.userName;
            this.apiRequest.post(url, payload).subscribe(data => {
                this.loggedInUserObj$.next(data);
                localStorage.setItem('loggedInUserCode', data.userCode);
                localStorage.setItem('loggedInuserName', data.firstName + ' ' + data.lastName);
                return this.loggedInUserObj$;
            });
        }
        return this.loggedInUserObj$;
    }

    getAllAdminList() {
        const url = environment.baseUrl + 'getAllAdminList';
        return this.apiRequest.get(url);
    }
    forgotPasswordSendMail(payload) {
        const url = environment.baseUrl + 'forgotPasswordSendMail?email=' + payload.email;
        return this.http.post(url, payload);
    }
    resetpassword(payload) {
        const url = environment.baseUrl + 'resetPassword';
        return this.http.post(url, payload);
    }
    logoutApplication(payload) {
        const url = environment.baseUrl + 'logoutApplication?userCode=' + payload.userCode;
        return this.apiRequest.post(url, payload);
    }
    searchWholememberList(payload) {
        const url = environment.baseUrl + 'searchWholememberList?searchText=' + payload.searchText ;
        return this.apiRequest.post(url, payload);
    }
    SaveUserPermission(payload) {
        const url = environment.baseUrl + 'SaveUserPermission';
        return this.apiRequest.post(url, payload);
    }
    addNewMemberFromWholeList(payload) {
        const url = environment.baseUrl + 'addNewMemberFromWholeList';
        return this.apiRequest.post(url, payload);
    }
    getGuestUsersByLoggedInUser(payload) {
        const url = environment.baseUrl + 'getGuestUsersByLoggedInUser?year=' +
        payload.year + '&month=' + payload.month;
        return this.apiRequest.post(url, payload);
        // const url = environment.baseUrl + 'getGuestUsersByLoggedInUser';
        // return this.apiRequest.post(url, null);
    }
    deleteUser(payload) {
        const url = environment.baseUrl + 'deleteUser?userCode=' + payload.userCode;
        return this.apiRequest.post(url, payload);
    }
    setSideBarMenuByLoggedInUSer() {
        const url = environment.baseUrl + 'getSideBarMenuByLoggedInUSer';
        this.apiRequest.post(url, null).subscribe(data => {
          this.sideBarMenuList$.next(data);
        });
      }
      getSideBarMenuByLoggedInUSer() {
        return this.sideBarMenuList$;
      }
}

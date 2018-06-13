import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as urlConstants from './urlConstants';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { BehaviorSubject, Subject } from 'rxjs/Rx';
// import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {
    loggedInUser$: Subject<any[]> = new BehaviorSubject<any>({});
    selectedUser$: Subject<any[]> = new BehaviorSubject<any>({});
    constructor(private http: Http) { }
    getUserList(payload) {
        const url = urlConstants.baseUrl + 'memberListByUser?email=' +payload.email;
        return this.http.post(url, payload);
        // return this.http.get(urlConstants.baseUrl + 'allMemberList');
    }
    setLoggedInUserDetails(payload) {
        // const url = urlConstants.baseUrl + 'loggedInUserDetails' ;
       const url = urlConstants.authUrl + 'auth/login';
        this.http.post(url, payload).subscribe(data => {
            this.loggedInUser$.next(data.json());
        });
    }
    getLoggedInUSerDetails() {
        return this.loggedInUser$;
    }
    getUserSettingsByLoggedInUser(payload) {
        const url = urlConstants.baseUrl + 'getUserSettingsByLoggedInUser';
        return this.http.post(url, payload);
    }
    setSelectedUser(user) {
        this.selectedUser$.next(user);
    }
    getSelectedUser() {
        return this.selectedUser$;
    }
    saveUserDetails(payload) {
        const url = urlConstants.baseUrl + 'saveUserDetails';
        return this.http.post(url, payload);
    }

}

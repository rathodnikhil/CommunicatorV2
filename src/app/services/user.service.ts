import { Injectable } from '@angular/core';
import { Http, RequestMethod } from '@angular/http';
import * as urlConstants from './urlConstants';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { BehaviorSubject, Subject, ReplaySubject } from 'rxjs/Rx';
import { LoginService } from './login.service';
import { Headers, RequestOptions,Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiRequestService } from './api-request.service';
@Injectable()
export class UserService  {
    _loginService: LoginService;
    loggedInUser$: Subject<any[]> = new BehaviorSubject<any>({});
    selectedUser$: Subject<any[]> = new BehaviorSubject<any>({});
    
    caseDaSubject = new Subject<any>();    
        constructor(private http: Http , loginService: LoginService,private apiRequest: ApiRequestService ) {
        this._loginService = loginService;
     }
     saveUserDetails(payload): Observable<any>{
        const url = urlConstants.baseUrl + 'saveUserDetails';
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
 //to verify whether user is registered or not
    verifyUser(payload) {
        const url = urlConstants.baseUrl + 'verifyUser';
        return this.http.post(url,payload);
    }
    getUserList(payload): Observable<any>{
        const url = urlConstants.baseUrl + 'memberListByUser';
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
    setLoggedInUserDetails(payload) {
       const url = urlConstants.baseUrl + 'auth/login';
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
 
    }



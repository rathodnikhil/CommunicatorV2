import { Injectable } from '@angular/core';
import { Http, RequestMethod } from '@angular/http';
import * as urlConstants from './urlConstants';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { BehaviorSubject, Subject, ReplaySubject } from 'rxjs/Rx';
// import { RequestOptions, ResponseContentType } from '@angular/http';
// import { Headers, Response } from '@angular/http';
import { LoginService } from './login.service';
import { Headers, RequestOptions,Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiRequestService } from './api-request.service';
@Injectable()
export class UserService  {

    public jwtToken: string ;
    //token: any;
    _loginService: LoginService;
    loggedInUser$: Subject<any[]> = new BehaviorSubject<any>({});
    selectedUser$: Subject<any[]> = new BehaviorSubject<any>({});
        
        constructor(private http: Http , loginService: LoginService,private apiRequest: ApiRequestService ) {
        this._loginService = loginService;
       // this.jwtToken = this._loginService.getJwtToken();
     }
  
    getUserList(payload,token): Observable<any>{
        //alert('get user list'+token);
         
        const url = urlConstants.baseUrl + 'saveMomDetails';
    payload = null;
        debugger;
      let resp : ReplaySubject<any> = new ReplaySubject<any>(1);
     // payload ={ "name":"asdd"   };
        this.apiRequest.post(url,payload).subscribe(data => {
          // alert(data.json());
          alert('67576576');
            resp.next(data);
        },
          err => {
            alert("Error occured");
            alert(err);
          });
  
      return resp;
    }
    setLoggedInUserDetails(payload) {
        // const url = urlConstants.baseUrl + 'loggedInUserDetails' ;
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
    saveUserDetails(payload) {
        // let headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // headers.append('authentication', `${payload.token}`);
        // headers.append('app-Subject' , 'admin');
        // headers.append('Authorization' , this.jwtToken);
        // let options = new RequestOptions({ headers: headers });
        const url = urlConstants.baseUrl + 'saveUserDetails';
        return this.http.post(url, payload);
    }

}

import { Injectable } from '@angular/core';
import { Http, RequestMethod } from '@angular/http';
import * as urlConstants from './urlConstants';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { BehaviorSubject, Subject } from 'rxjs/Rx';
// import { RequestOptions, ResponseContentType } from '@angular/http';
// import { Headers, Response } from '@angular/http';
import { LoginService } from './login.service';
import { Headers, RequestOptions,Response } from '@angular/http';
import 'rxjs/add/operator/catch';
@Injectable()
export class UserService  {

    public jwtToken: string ;
    //token: any;
    _loginService: LoginService;
    loggedInUser$: Subject<any[]> = new BehaviorSubject<any>({});
    selectedUser$: Subject<any[]> = new BehaviorSubject<any>({});
    constructor(private http: Http , loginService: LoginService ) {
        this._loginService = loginService;
       // this.jwtToken = this._loginService.getJwtToken();
     }
  
    getUserList(payload,token) {
        //alert('get user list'+token);
      
        let headers = new Headers();
        headers.append('Authorization',token);
        headers.append("Content-Type", "application/json");
        headers.append("app-Subject" , "admin");
        let opts = new RequestOptions({headers:headers});
        const url = urlConstants.baseUrl + 'memberListByUser?email=' +payload.email;
     
        let options = new RequestOptions({

            // headers: this.appendFormHeader(),

            headers: headers,

            method: RequestMethod.Get,

            url: url,

          //  body: body

            // withCredentials: true

            //url    : this.appConfig.baseApiPath + url   //this.api + url,

            // params:"username=admin&password=admin"

        });

        debugger;
        alert('headers' + headers.get('Authorization'));
      //  opts.headers = headers;
      
        this.http.request(url, options).subscribe(data => {
           alert(data.json());
            
        },
          err => {
            console.log("Error occured");
            alert(err);
          });
  
      return token;
   

       // let options = new RequestOptions({ headers: headers });
      //  alert(options);
      
      //  return this.http.get(url, opts);
        // return this.http.get(urlConstants.baseUrl + 'allMemberList');
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

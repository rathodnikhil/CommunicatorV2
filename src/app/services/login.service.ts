import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import * as urlConstants from './urlConstants';
import { BehaviorSubject, Subject } from 'rxjs/Rx';
import {WebserviceConfig} from './webServiceConfig';
@Injectable()
export class LoginService {
    jwtToken:string;
    caseDaSubject = new Subject<any>();
    token$: Subject<any[]> = new BehaviorSubject<any>({});
    _webServiceConfig: WebserviceConfig;
    constructor(private http: Http ) { 
      
    }
    authUser(payload) {
      const url = urlConstants.baseUrl + 'getUser?userNameAndMeetingId=' + payload;
      return this.http.get(url);
    }
    getAllMemUserNameList() {
        const url = urlConstants.baseUrl + 'getAllMemUserNameList';
      return this.http.post(url , null);
    }
    getAllMemEmailList() {
        const url = urlConstants.baseUrl + 'getAllMemEmailList';
        return this.http.post(url , null);
    }
    getAuthenticationToken(payload) {
            const url = urlConstants.baseUrl + 'auth/login?username=' +payload.username + '&password=' + payload.password;
            this.http.get(url).subscribe(data => {
               this.jwtToken=data.json().jwtToken;
               this.caseDaSubject.next(this.jwtToken);
               this.token$.next(data.json().jwtToken);
            },
            err => {
                console.log("Error occured");
              });
            return this.caseDaSubject;
    }
    getJwtToken()
    {
        return this.jwtToken;
    }
    getToken()
    {
        return this.token$;
    }
}

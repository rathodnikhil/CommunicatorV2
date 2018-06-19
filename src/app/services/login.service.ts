import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import * as urlConstants from './urlConstants';
import { BehaviorSubject, Subject } from 'rxjs/Rx';

@Injectable()
export class LoginService {
    jwtToken:string;
    caseDaSubject = new Subject<any>();

    constructor(private http: Http ) { }
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
            const url = urlConstants.baseUrl + 'token/generate-token';
            this.http.post(url ,payload).subscribe(data => {
               this.jwtToken=data.json().token;
               this.caseDaSubject.next(this.jwtToken);
            },
            err => {
                console.log("Error occured");
                alert(err);
              });
            return this.caseDaSubject;
    }
    getJwtToken()
    {
        return "Bearer "+this.jwtToken;
    }
 
}

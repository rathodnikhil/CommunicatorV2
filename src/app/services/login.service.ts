import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import * as urlConstants from './urlConstants';
import { BehaviorSubject, Subject } from 'rxjs/Rx';

@Injectable()
export class LoginService {
    jwtToken: string;
    caseDaSubject = new Subject<any>();
    previousUrl: string;

    constructor(private http: Http) { }
    getAuthenticationToken(payload) {
        const url = urlConstants.baseUrl + 'token/generate-token';
        this.http.post(url, payload).subscribe(data => {
            this.jwtToken = data.json().token;
            this.caseDaSubject.next(this.jwtToken);
        },
            err => {
                // console.log("Error occured");
                // alert(err);
            });
        return this.caseDaSubject;
    }
    getJwtToken() {
        return 'Bearer ' + this.jwtToken;
    }
    setPreviousUrl(url) {
        this.previousUrl = url;
    }
    getPreviousUrl() {
        return this.previousUrl;
    }


}

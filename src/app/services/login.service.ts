import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import * as urlConstants from './urlConstants';

@Injectable()
export class LoginService {

    constructor(private http: Http) { }
    authUser(payload) {
        //debugger;
      const url = urlConstants.baseUrl + 'getUser?userNameAndMeetingId=' + payload;
      return this.http.get(url);
    }
}

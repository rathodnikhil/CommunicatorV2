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
    getAllMemUserNameList() {
        const url = urlConstants.baseUrl + 'getAllMemUserNameList';
      return this.http.post(url , null);
    }
    getAllMemEmailList() {
        const url = urlConstants.baseUrl + 'getAllMemEmailList';
        return this.http.post(url , null);
    }
}

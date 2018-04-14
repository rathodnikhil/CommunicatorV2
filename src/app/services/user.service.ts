import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as urlConstants from './urlConstants';

@Injectable()
export class UserService {

    constructor(private http: Http) { }
    getUserList(payload) {

      const url = urlConstants.baseUrl + 'memberListByUser?loggedInUserId=' + payload.loggedInUserId;
      return this.http.post(url, payload);
    // return this.http.get(urlConstants.baseUrl + 'allMemberList');
    }

}

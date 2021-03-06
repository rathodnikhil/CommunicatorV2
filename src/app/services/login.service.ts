import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { environment } from 'environments/environment';
import { BehaviorSubject, Subject } from 'rxjs/Rx';

@Injectable()
export class LoginService {
    jwtToken: string;
    caseDaSubject = new Subject<any>();
    previousUrl: string;

    constructor(private http: Http) { }
    getAuthenticationToken(payload) {
        const url = environment.baseUrl + 'token/generate-token';
        this.http.post(url, payload).subscribe(data => {
            this.jwtToken = data.json().token;
            this.caseDaSubject.next(this.jwtToken);
        });
        return this.caseDaSubject;
    }
    getJwtToken() {
        return 'Bearer ' + this.jwtToken;
    }
}

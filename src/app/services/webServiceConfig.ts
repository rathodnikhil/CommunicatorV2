
import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response, Request, RequestOptions, URLSearchParams,RequestMethod ,QueryEncoder} from '@angular/http';
import { Router} from '@angular/router';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { LoginService } from './login.service';


@Injectable()
export class WebserviceConfig {

    private headers:Headers;
    private requestOptions:RequestOptions;

    public httpHeader: Headers;
    public options: RequestOptions;
    public token : string;
    constructor(
      //  private appConfig:AppConfig,
        private http: Http,
        private router:Router,
        private loginService:LoginService
    ) {

        this.httpHeader = new Headers({headers : {'Content-type': 'application/json'}});
    }

    /**
     * This is a Global place to add all the request headers for every REST calls
     */
    appendAuthHeader():Headers {
        
        let headers = new Headers({'Content-Type': 'application/json'});
       // headers.append("applicationId", "nbu");
        headers.append("app-subject", "admin");
    //    headers.append("authorization" , this.jwtToken);
        let token = this.token;
        console.log(token);
        if (token !==null) {
            headers.append("Authorization", token);
        }
        return headers;
    }
}
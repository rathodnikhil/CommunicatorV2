import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response, Request, RequestOptions, URLSearchParams,RequestMethod ,QueryEncoder} from '@angular/http';
import { Router} from '@angular/router';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { LoginService } from './login.service';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';


@Injectable()
export class ApiRequestService {

    private headers:Headers;
    private requestOptions:RequestOptions;

    public httpHeader: Headers;
    public options: RequestOptions;
    public token : string;
    constructor(
     //   private appConfig:AppConfig,
        private http: Http,
        private router:Router,
        private loginService: LoginService
      //  private userInfoService:UserInfoService
    ) {

        this.httpHeader = new Headers({headers : {'Content-type': 'application/json'}});
    }

    /**
     * This is a Global place to add all the request headers for every REST calls
     */
    appendAuthHeader():Headers {
        
        let headers = new Headers({'Content-Type': 'application/json'});
       // headers.append("app-Subject", "admin");
     //   headers.append("source", "BACKOFFICENBU");
        let token = this.loginService.getJwtToken();
        console.log(token);
        if (token !==null) {
            headers.append("Authorization", token);
        }
        return headers;
    }


    appendFormHeader():Headers {
        let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
        // let headers = new Headers({'Content-Type': 'application/json'});
        // let token = this.userInfoService.getStoredToken();
         //if (token !==null) {
          //   headers.append("Authorization", token);
        // }
        return headers;
    }

    /**
     * This is a Global place to define all the Request Headers that must be sent for every ajax call
     */
    getRequestOptions(requestMethod, url:string, urlParam?:URLSearchParams, body?:Object):RequestOptions {
        var header = null;
        if(url === "login"){
            // var loginParams = "username=admin&password=admin";
            var loginParams = body;
             header  = this.appendAuthHeader();
        }else{
            header = this.appendAuthHeader();
        }
        // if(!environment.production){
        //     url = url
        // }else{
        //     url  = this.appConfig.baseApiPath + url
        // }
        // debugger
        console.log(url)
        // console.log(this.appConfig.baseApiPath)
        let options = new RequestOptions({
            // headers: this.appendFormHeader(),
            headers: header,
            method : requestMethod,
            url    : url ,
            // withCredentials: true
            //url    : this.appConfig.baseApiPath + url   //this.api + url,
            // params:"username=admin&password=admin"
        });
        if (urlParam){
           options = options.merge({ params: urlParam});
        }
        if(loginParams){
            options = options.merge({params: loginParams});
        }
        if (body){
           options = options.merge({body: JSON.stringify(body)});
        }
        return options;
    }

    get(url:string, urlParams?:URLSearchParams):Observable<any>{
        let me = this;
        let requestOptions = this.getRequestOptions(RequestMethod.Get, url, urlParams);
        return this.http.request(new Request(requestOptions))
           .map((resp: any) => {
               
                return resp.json()
            })
            .catch(function(error:any){
                if (error.status === 401 || error.status === 403 || error.status === 0){
                    
                    //me.router.navigate(['/login']);
                    me.leaveApplication();
                }
                return Observable.throw(error || 'Server error')
            });
    }

    post(url:string, body:Object):Observable<any>{
        let me = this;
        let requestOptions = this.getRequestOptions(RequestMethod.Post, url, undefined, body);
        debugger;
        return this.http.request(new Request(requestOptions))
            .map((resp: any) => {
               if (typeof resp._body == 'string' && resp._body.includes('<html')) {
                   // me.router.navigate(['/login']);
                   me.leaveApplication();
                }
                if(url=='login'){
                    //resp.token = resp.headers.authorization;
                    this.token = resp.headers.get('Authorization');
                    console.log(this.token);
                    //console.log(resp.token);
               }
                return resp.json()
            })
            .catch(function(error:any){
                  console.log("error==post==="+error)
                    console.log(error)
                if (error.status === 401 || error.status === 0){
                   
                    //me.router.navigate(['/login']);
                    me.leaveApplication();
                }
                return Observable.throw(error || 'Server error')
            });
    }

    put(url:string, body:Object):Observable<any>{
        let me = this;
        let requestOptions = this.getRequestOptions(RequestMethod.Put, url, undefined, body);
        return this.http.request(new Request(requestOptions))
            .map((resp: any) => {
               if (typeof resp._body == 'string' && resp._body.includes('<html')) {
                   // me.router.navigate(['/login']);
                   me.leaveApplication();
                }
                return resp.json()
            })
            .catch(function(error:any){
                if (error.status === 401 || error.status === 0){
                     
                   // me.router.navigate(['/login']);
                   me.leaveApplication();
                }
                return Observable.throw(error || 'Server error')
            });
    }

    delete(url:string):Observable<any>{
        let me = this;
        let requestOptions = this.getRequestOptions(RequestMethod.Delete, url);
        return this.http.request(new Request(requestOptions))
             .map((resp: any) => {
               if (typeof resp._body == 'string' && resp._body.includes('<html')) {
                   // me.router.navigate(['/login']);
                   me.leaveApplication();
                }
                return resp.json()
            })
            .catch(function(error:any){
                if (error.status === 401 || error.status === 0){
                  
                   // me.router.navigate(['/login']);
                   me.leaveApplication();
                }
                return Observable.throw(error || 'Server error')
            });
    }
    leaveApplication() {
        localStorage.setItem("errorMsg", "Your session has expired. Please log in again.")
        this.router.navigate(['/login']);
    }
    getServiceWithComplexObjectAsQueryString(url: string, param: any): Observable<any> {
        

      //  url = this.appConfig.baseApiPath + url

        console.log("url==="+url);
        let params :URLSearchParams = new URLSearchParams();
        for (var key in param) {
            if (param.hasOwnProperty(key)) {
                let val = param[key];
                if(key !='userId')
                 params.set(key,encodeURIComponent(val));
                 else
                 params.set(key,val);
            }
        }
              this.options = new RequestOptions({ headers: this.appendAuthHeader(), params: params });
        return this.http
            .get(url,this.options)
            .map(this.extractData)
            .catch(this.handleError);
      }

      private extractData(res: Response) {
         
       let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
            return Observable.throw(errMsg);
    }



}

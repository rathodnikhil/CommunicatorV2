import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as urlConstants from './urlConstants';
import { RequestOptions, ResponseContentType } from '@angular/http';
import { Headers, Response } from '@angular/http';
import { LoginService } from './login.service';
import { ApiRequestService } from './api-request.service';
import { BehaviorSubject, Subject, ReplaySubject } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class ChatService {
  chattingHistoryList$: Subject<any[]> = new BehaviorSubject<any>({});  
  constructor( private apiRequest: ApiRequestService) { }

   //save individual chatting
   saveChat(payload): Observable<any> {
    const url = urlConstants.baseUrl + 'saveChat';
    let resp : ReplaySubject<any> = new ReplaySubject<any>(1);
      this.apiRequest.post(url,payload).subscribe(data => {
          resp.next(data);
      },
        err => {
        //   alert("Error occured");
        //   alert(err);
        });

    return resp;
  }

  setChattingHistoryList(payload) {
    const url = urlConstants.baseUrl + 'getChatHistoryBySelecteduser';
    // const resp = new BehaviorSubject<any>({});
    this.apiRequest.post(url, payload).subscribe(data => {
        this.chattingHistoryList$.next(data);
    },
        err => {
           // alert(err);
        });
    // return resp;
}
getChattingHistoryList() {
    return this.chattingHistoryList$;
}
}
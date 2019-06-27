import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from 'environments/environment';
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
    broadcastMsgHistoryList$: Subject<any[]> = new BehaviorSubject<any>({});
    constructor(private apiRequest: ApiRequestService) { }

    // save individual chatting
    saveChat(payload) {
        const url = environment.baseUrl + 'saveChat';
        // const resp: ReplaySubject<any> = new ReplaySubject<any>(1);
        return this.apiRequest.post(url, payload);
        // return resp;
    }

    getChattingHistoryList(payload) {
        const url = environment.baseUrl + 'getChatHistoryBySelecteduser';
        return this.apiRequest.post(url, payload);
    }
    setChattingHistoryList() {
        return this.chattingHistoryList$;
    }

    setBroadcastMsgByLoggedInuserId(payload) {
        const url = environment.baseUrl + 'getBroadcastMsgByLoggedInuserId?userTo=' + payload.userTo;
        this.apiRequest.post(url, payload).subscribe(data => {
            this.broadcastMsgHistoryList$.next(data);
        });
    }
    getBroadcastMsgByLoggedInuserId() {
        return this.broadcastMsgHistoryList$;
    }
}



import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { LoginService } from './app/services/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private loginService: LoginService;
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json',
        'Authorization': `Bearer ${this.loginService.getJwtToken()}`,
      },
    });

    return next.handle(req);
  }
}
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/do';
import { Router, ActivatedRoute } from '@angular/router';

abstract class HttpCache {
  /**
   * Returns a cached response, if any, or null if not present.
   */
  abstract get(req: HttpRequest<any>): HttpResponse<any> | null;

  /**
   * Adds or updates the response in the cache.
   */
  abstract put(req: HttpRequest<any>, resp: HttpResponse<any>): void;

  /**
   * Delete the response in the cache.
   */
  abstract delete(req: HttpRequest<any>): void;
}

@Injectable()
export class AuthInterceptor extends HttpCache implements HttpInterceptor {
  private strRegX = new RegExp('geoip.maxmind.com')
  private cachedRequest = {}
  constructor(private router: Router) {
    super()
  }

  get(req: HttpRequest<any>): HttpResponse<any> | null {
    return this.cachedRequest[req.url]
  }
  put(req: HttpRequest<any>, resp: HttpResponse<any>): void {
    this.cachedRequest[req.url] = resp
  }
  delete(req: HttpRequest<any>): void {
    delete this.cachedRequest[req.url]
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Skip this interceptor if the request method isn't GET.

    alert('interceptor');
    if (req.method !== 'GET') {
      return next.handle(req).do((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // do stuff with response if you want
        }
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          console.log(err.message)
          if (err.status === 404) {
            this.router.navigate(['page-not-found'])
          }
        }
      });
    }

    let maybeCachedResponse: Observable<HttpEvent<any>> = Observable.empty();

    // Check the cache.
    const cachedResponse = this.get(req);
    if (cachedResponse) {
      maybeCachedResponse = Observable.of(cachedResponse);
    }
    // Create an Observable (but don't subscribe) that represents making
    // the network request and caching the value.
    const networkResponse = next.handle(req).do(event => {
      // Just like before, check for the HttpResponse event and cache it.
      if (event instanceof HttpResponse) {
        this.put(req, event);
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        console.log(err.message)
        if (err.status === 404) {
          this.router.navigate(['page-not-found'])
        }
      }
    });

    // Now, combine the two and send the cached response first (if there is
    // one), and the network response second.
    return Observable.concat(maybeCachedResponse, networkResponse);
  }
}
import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class BasicInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // console.log('in basic interceptor');
    // let modifiedReq = req.clone({
    //     headers: req.headers.set('Content-Type', 'application/json'),
    // });

    // return next.handle(modifiedReq);
    return next.handle(req);
  }
}

import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpinnerService } from '@shared/services/spinner.service';
import { finalize, Observable } from 'rxjs';

@Injectable()
export class BasicInterceptor implements HttpInterceptor {
  requests: number = 0;

  constructor(private spinnerService: SpinnerService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let modifiedReq = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
      },
    });

    this.spinnerService.setLoading(true);
    this.requests++;

    return next.handle(modifiedReq).pipe(
      finalize(() => {
        this.requests--;
        if (this.requests === 0) this.spinnerService.setLoading(false);
      })
    );
  }
}

import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoggingService } from '@shared/services/logging.service';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { RegistrationStoreService } from 'src/app/modules/registration/services/reg-store.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private injector: Injector,
    private snackBar: MatSnackBar,
    private regStoreService: RegistrationStoreService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('11111111111111111111111111111111');
        if (error.status === 401) this.router.navigate(['unauthenticated']);
        else {
          const loggingService: LoggingService =
            this.injector.get(LoggingService);
          loggingService.logging(error.error);
        }

        this.regStoreService.updateCriticalError(true);

        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          errorMsg = `Error: ${error.error.message}`;
        } else {
          errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
        }
        this.snackBar.open(errorMsg, 'close', {
          duration: 2000,
          panelClass: 'errorSnack',
        });

        return throwError(() => errorMsg);
      })
    );
  }
}

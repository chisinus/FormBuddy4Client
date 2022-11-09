import { Injectable } from '@angular/core';
import { from, Observable, of, tap } from 'rxjs';
import { UserStoreService } from 'src/app/modules/user/services/user-store.service';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { ofType } from '@ngrx/effects';

@Injectable()
export class UserGuardService implements CanActivate {
  constructor(
    private router: Router,
    private userStoreService: UserStoreService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.userStoreService.loggedIn().pipe(
      tap((loggedIn: boolean) => {
        if (!loggedIn) {
          this.router.navigate(['.']);
        }

        return of(loggedIn);
      })
    );
  }
}

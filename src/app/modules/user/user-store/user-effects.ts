import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { UserBasic } from '../models/user-basic';
import { UserStoreService } from '../services/user-store.service';
import { UserService } from '../services/user.service';
import { login, loginSuccess, userError } from './user-actions';

@Injectable()
export class UserEffect {
  constructor(
    private actions$: Actions,
    private storeService: UserStoreService,
    private userService: UserService
  ) {}

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      tap(),
      ofType(login),
      switchMap((action) => {
        console.log('in effect');
        return this.userService.login(action.username, action.password).pipe(
          map((userBasic: UserBasic) => {
            console.log('success');
            return loginSuccess({ userBasic });
          }),
          catchError(() => {
            console.log('failed');
            return of(userError());
          })
        );
      })
    )
  );
}

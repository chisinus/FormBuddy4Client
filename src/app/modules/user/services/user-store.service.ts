import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, switchMap } from 'rxjs';
import { login, logout, updateLoading } from '../user-store/user-actions';
import { getUserState } from '../user-store/user-selectors';
import { UserState } from '../user-store/user-state';
import { UserService } from './user.service';

@Injectable()
export class UserStoreService {
  constructor(private store$: Store<UserState>) {}

  userState$ = this.store$.select(getUserState);

  login(username: string, password: string) {
    this.store$.dispatch(updateLoading({ loading: true }));
    this.store$.dispatch(login({ username, password }));
  }

  logout() {
    this.store$.dispatch(logout());
  }

  loggedIn(): Observable<boolean> {
    return this.userState$.pipe(
      switchMap((state: UserState) => {
        return of(
          state.user.username !== undefined && state.user.username !== ''
        );
      })
    );
  }
}

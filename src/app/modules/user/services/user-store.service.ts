import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { login, updateLoading } from '../user-store/user-actions';
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
}

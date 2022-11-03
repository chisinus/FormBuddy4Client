import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from '../user-store/user-actions';
import { getUserState } from '../user-store/user-selectors';
import { UserState } from '../user-store/user-state';
import { UserService } from './user.service';

@Injectable()
export class UserStoreService {
  constructor(private store$: Store<UserState>) {}

  userState$ = this.store$.select(getUserState);

  login(username: string, password: string) {
    console.log('1111111111111111111');
    this.store$.subscribe((state) => {
      if (state.criticalError) return;

      console.log('222222222222222222222', state.user);
      this.store$.dispatch(login({ username, password }));
    });
  }
}

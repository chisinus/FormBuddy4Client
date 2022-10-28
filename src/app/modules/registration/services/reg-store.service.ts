import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Gender } from '@shared/models/code-tables';
import { of, switchMap, tap } from 'rxjs';
import {
  retrieveGenders,
  retrieveSecurityQuestions,
} from '../reg-store/reg-actions';
import { getRegistrationState } from '../reg-store/reg-selectors';
import { RegistrationState } from '../reg-store/reg-state';

@Injectable()
export class RegistrationStoreService {
  constructor(private store: Store<RegistrationState>) {}

  RegistrationState$ = this.store.select(getRegistrationState);

  initStore(): void {
    this.RegistrationState$.subscribe((state) => {
      if (!state || !state.genders.length)
        this.store.dispatch(retrieveGenders());
      if (!state.securityQuestions || state.securityQuestions.length === 0)
        this.store.dispatch(retrieveSecurityQuestions());
    });
  }
}

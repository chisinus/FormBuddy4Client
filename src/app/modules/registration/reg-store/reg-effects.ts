import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Gender, SecurityQuestion } from '@shared/models/code-tables';
import { CodeTableService } from '@shared/services/code-table.service';
import {
  catchError,
  map,
  mergeMap,
  of,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs';
import { RegistrationRoutingModule } from '../registration-routing.module';
import {
  retrieveError,
  retrieveGenders,
  retrieveGendersSuccess,
  retrieveSecurityQuestions,
  retrieveSecurityQuestionsSuccess,
} from './reg-actions';
import { RegistrationState } from './reg-state';

@Injectable()
export class RegistrationStoreEffect {
  constructor(
    private actions$: Actions,
    private store$: Store<RegistrationState>,
    private service: CodeTableService
  ) {}

  loadGenders$ = createEffect(() =>
    this.actions$.pipe(
      // tap(
      //   this.store$.subscribe((state) =>
      //     console.log('>>>>>>>>>>>>>>>> criticalError ', state.criticalError)
      //   )
      // ),
      ofType(retrieveGenders),
      // withLatestFrom(this.store$.select((s) => !s.criticalError)),
      switchMap(() => {
        console.log('>>>>>>>>>>> get gender');
        return this.service.getGenders().pipe(
          map((genders: Gender[]) => {
            return retrieveGendersSuccess({ genders });
          }),
          // intercepted by interceptor?
          catchError(() => {
            return of(retrieveError());
          })
        );
      })
    )
  );

  loadSecurityQuestions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(retrieveSecurityQuestions),
      mergeMap(() => {
        return this.service.getSecurityQuestions().pipe(
          map((data: SecurityQuestion[]) =>
            retrieveSecurityQuestionsSuccess({ securityQuestions: data })
          ),
          catchError(() => of(retrieveError()))
        );
      })
    )
  );
}

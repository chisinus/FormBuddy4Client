import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Gender, SecurityQuestion } from '@shared/models/code-tables';
import { MiscService } from '@shared/services/misc.service';
import {
  catchError,
  EMPTY,
  map,
  mergeMap,
  Observable,
  of,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs';
import {
  retrieveError,
  retrieveGenders,
  retrieveGendersSuccess,
  retrieveSecurityQuestions,
  retrieveSecurityQuestionsSuccess,
} from './reg-actions';

@Injectable()
export class RegistrationStoreEffect {
  constructor(private actions$: Actions, private service: MiscService) {}

  loadGenders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(retrieveGenders),
      switchMap(() => {
        return this.service.getGenders().pipe(
          map((genders: Gender[]) => {
            return retrieveGendersSuccess({ genders });
          }),
          catchError(() => of(retrieveError()))
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

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Gender, SecurityQuestion } from '@shared/models/code-tables';
import { CodeTableService } from '@shared/services/code-table.service';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import {
  retrieveError,
  retrieveGenders,
  retrieveGendersSuccess,
  retrieveSecurityQuestions,
  retrieveSecurityQuestionsSuccess,
} from './reg-actions';

@Injectable()
export class RegistrationStoreEffect {
  constructor(private actions$: Actions, private service: CodeTableService) {}

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

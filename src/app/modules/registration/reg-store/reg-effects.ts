import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Gender, SecurityQuestion } from '@shared/models/code-tables';
import { CodeTableService } from '@shared/services/code-table.service';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { RegistrationStoreService } from '../services/reg-store.service';
import {
  retrieveError,
  retrieveGenders,
  retrieveGendersSuccess,
  retrieveSecurityQuestions,
  retrieveSecurityQuestionsSuccess,
} from './reg-actions';

@Injectable()
export class RegistrationStoreEffect {
  constructor(
    private actions$: Actions,
    private storeService: RegistrationStoreService,
    private service: CodeTableService
  ) {}

  loadGenders$ = createEffect(() =>
    this.actions$.pipe(
      tap(),
      ofType(retrieveGenders),
      switchMap(() => {
        return this.service.getGenders().pipe(
          map((genders: Gender[]) => {
            return retrieveGendersSuccess({ genders });
          }),
          catchError((error) => {
            return of(retrieveError());
          })
        );
      })
    )
  );

  loadSecurityQuestions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(retrieveSecurityQuestions),
      switchMap(() => {
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

import { createAction, props } from '@ngrx/store';
import { Gender, SecurityQuestion } from '@shared/models/code-tables';

export const retrieveGenders = createAction('[Registration] Retrieve Genders');

export const retrieveGendersSuccess = createAction(
  '[Registration] Retrieve Genders Success',
  props<{ genders: Gender[] }>()
);

export const retrieveSecurityQuestions = createAction(
  '[Registration] Retrieve Security Questions'
);

export const retrieveSecurityQuestionsSuccess = createAction(
  '[Registration] Retrieve Security Questions Success',
  props<{ securityQuestions: SecurityQuestion[] }>()
);

export const retrieveError = createAction(
  '[Registration] Failed to retrieve data'
);

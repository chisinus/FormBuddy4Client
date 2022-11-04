import { createReducer, on } from '@ngrx/store';
import {
  retrieveError,
  retrieveGendersSuccess,
  retrieveSecurityQuestionsSuccess,
} from './reg-actions';
import { RegistrationState } from './reg-state';

export const initialState: RegistrationState = {
  criticalError: false,
  genders: [],
  securityQuestions: [],
};

export const RegistrationStoreReducer = createReducer(
  initialState,
  on(retrieveGendersSuccess, (state, { genders }) => {
    return {
      ...state,
      genders,
    };
  }),
  on(retrieveSecurityQuestionsSuccess, (state, { securityQuestions }) => {
    return {
      ...state,
      securityQuestions,
    };
  }),
  on(retrieveError, (state) => {
    return {
      ...state,
      criticalError: true,
    };
  })
);

import { createReducer, on } from '@ngrx/store';
import {
  retrieveError,
  retrieveGenders,
  retrieveGendersSuccess,
  retrieveSecurityQuestions,
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
  on(retrieveSecurityQuestionsSuccess, (state, { securityQuestions }) => ({
    ...state,
    securityQuestions,
  })),
  on(retrieveError, (state) => ({
    ...state,
    criticalError: true,
  }))
);

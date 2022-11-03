import { UserState } from './user-state';
import { UserBasic } from '../models/user-basic';
import { createReducer, on } from '@ngrx/store';
import { login, loginSuccess, userError } from './user-actions';
import { state } from '@angular/animations';

export const initialState: UserState = {
  criticalError: false,
  user: {
    firstname: '',
    lastname: '',
    username: '',
  } as UserBasic,
};

export const UserReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { userBasic }) => {
    return {
      ...state,
      user: userBasic,
    };
  }),
  on(userError, (state) => {
    return {
      ...state,
      critcalError: true,
    };
  })
);

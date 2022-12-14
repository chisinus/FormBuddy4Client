import { UserState } from './user-state';
import { UserBasic } from '../models/user-basic';
import { createReducer, on } from '@ngrx/store';
import {
  login,
  loginSuccess,
  logout,
  updateLoading,
  userError,
} from './user-actions';
import { state } from '@angular/animations';

export const initialState: UserState = {
  criticalError: false,
  loading: false,
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
      user: userBasic,
      criticalError: false,
      loading: false,
    };
  }),
  on(userError, (state) => {
    return {
      ...initialState,
      critcalError: true,
    };
  }),
  on(updateLoading, (state, { loading }) => {
    return {
      ...state,
      loading,
    };
  }),
  on(logout, (state) => {
    return {
      ...initialState,
    };
  })
);

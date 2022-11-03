import { createAction, props } from '@ngrx/store';
import { UserBasic } from '../models/user-basic';

export const login = createAction(
  '[User] Login',
  props<{ username: string; password: string }>()
);
export const loginSuccess = createAction(
  '[User] Login Success',
  props<{ userBasic: UserBasic }>()
);
export const userError = createAction('[User] Error');

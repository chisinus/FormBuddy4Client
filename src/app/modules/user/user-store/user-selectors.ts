import { createFeatureSelector } from '@ngrx/store';
import { UserState } from './user-state';

export const getUserState = createFeatureSelector<UserState>('user');

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Gender } from '@shared/models/code-tables';
import { RegistrationState } from './reg-state';

export const getRegistrationState =
  createFeatureSelector<RegistrationState>('registration');

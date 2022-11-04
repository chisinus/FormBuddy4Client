import { UserBasic } from '../models/user-basic';

export interface UserState {
  criticalError: boolean;
  loading: boolean;
  user: UserBasic;
}

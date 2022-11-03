import { UserBasic } from '../models/user-basic';

export interface UserState {
  criticalError: boolean;
  user: UserBasic;
}

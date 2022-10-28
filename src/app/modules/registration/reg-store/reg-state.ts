import { Gender, SecurityQuestion } from '@shared/models/code-tables';

export interface RegistrationState {
  genders: Gender[];
  securityQuestions: SecurityQuestion[];
}

import { Gender, SecurityQuestion } from '@shared/models/code-tables';

export interface RegistrationState {
  criticalError: boolean;
  genders: Gender[];
  securityQuestions: SecurityQuestion[];
}

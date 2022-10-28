import { Injectable } from '@angular/core';
import { Gender, SecurityQuestion } from '@shared/models/code-tables';
import { Observable, of } from 'rxjs';

@Injectable()
export class MiscService {
  getGenders(): Observable<Gender[]> {
    return of([
      {
        id: 1,
        description: 'Male',
      },
      {
        id: 2,
        description: 'Female',
      },
      {
        id: 99,
        description: 'Prefer not to answer',
      },
    ]);
  }

  getSecurityQuestions(): Observable<SecurityQuestion[]> {
    return of([
      {
        id: 1,
        description: 'security question 1',
      },
      {
        id: 2,
        description: 'security question 2',
      },
      {
        id: 3,
        description: 'security question 3',
      },
    ]);
  }
}

import { Injectable } from '@angular/core';
import { Gender, SecurityQuestion } from '@shared/models/code-tables';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';

@Injectable()
export class CodeTableService {
  rootPath: string = 'codetable';

  constructor(private apiService: ApiService) {}

  getGenders(): Observable<Gender[]> {
    return this.apiService.get(this.rootPath + '/genders');
    // this.apiService
    //   .get(this.rootPath + '/genders')
    //   .subscribe(() => console.log('11111111111111'));
    // return of([
    //   {
    //     id: 1,
    //     description: '2222',
    //   },
    // ]);
  }

  getSecurityQuestions(): Observable<SecurityQuestion[]> {
    return this.apiService.get(this.rootPath + '/securityquestions');
  }
}

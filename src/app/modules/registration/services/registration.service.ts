import { Injectable } from '@angular/core';
import { ApiService } from '@shared/services/api.service';
import { Observable, switchMap } from 'rxjs';
import { UserFull } from '../models/user-full';

@Injectable()
export class RegistrationService {
  rootUrl: string = 'user';

  constructor(private apiService: ApiService) {}

  createAccount(user: UserFull): Observable<any> {
    return this.apiService.post(
      `${this.rootUrl}/newaccount`,
      JSON.stringify(user)
    );
  }
}

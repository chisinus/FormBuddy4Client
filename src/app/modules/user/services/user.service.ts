import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@shared/services/api.service';
import { Observable } from 'rxjs';
import { UserBasic } from '../models/user-basic';
import { UserStoreService } from './user-store.service';

@Injectable()
export class UserService {
  rootUrl = 'user';

  constructor(
    private storeService: UserStoreService,
    private apiService: ApiService
  ) {}

  login(username: string, password: string): Observable<UserBasic> {
    return this.apiService.get(
      `${this.rootUrl}/login`,
      new HttpParams().set('username', username).set('password', password)
    );
  }
}

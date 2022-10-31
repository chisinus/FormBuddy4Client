import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicastionConfiguration } from '@shared/models/application.configuration';
import { Observable, switchMap } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  private getApplicationConfig(): Observable<ApplicastionConfiguration> {
    const configLocationUrl: string = './assets/configurations/config.dev.json';

    return this.http.get<ApplicastionConfiguration>(configLocationUrl);
  }

  get(path: string, parameters?: HttpParams): Observable<any> {
    return this.getApplicationConfig().pipe(
      switchMap((config: ApplicastionConfiguration) => {
        return this.http.get(config.AppRootUrl + path, { params: parameters });
      })
    );
  }
}

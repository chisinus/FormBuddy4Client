import { Injectable } from '@angular/core';

@Injectable()
export class SpinnerService {
  loading: boolean = false;

  setLoading(value: boolean) {
    this.loading = value;
  }

  getLoading(): boolean {
    return this.loading;
  }
}

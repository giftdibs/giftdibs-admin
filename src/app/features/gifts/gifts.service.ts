import {
  Injectable
} from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';

import {
  Observable
} from 'rxjs';

import {
  map,
  share
} from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { Gift } from './gift';

@Injectable()
export class GiftsService {
  private resourceUrl = environment.apiUrl + '/admin/gifts';

  constructor(
    private http: HttpClient
  ) { }

  public getAll(): Observable<Gift[]> {
    return this.http.get(this.resourceUrl)
      .pipe(
        map((result: any) => result.data.gifts),
        share()
      );
  }
}

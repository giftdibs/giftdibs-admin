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

import {
  User
} from './user';

@Injectable()
export class UserService {
  private resourceUrl = environment.apiUrl + '/admin/users';

  constructor(
    private http: HttpClient
  ) { }

  public getAll(): Observable<User[]> {
    return this.http.get(this.resourceUrl)
      .pipe(
        map((result: any) => result.data.users),
        share()
      );
  }

  public remove(userId: string): Observable<any> {
    return this.http.delete(
      `${this.resourceUrl}/${userId}`
    )
      .pipe(
        map((result: any) => result.data),
        share()
      );
  }

  public requestResetPasswordToken(emailAddress: string): Observable<any> {
    return this.http.post(`${environment.apiUrl}/auth/forgotten`, { emailAddress });
  }

  public addToMailingList(user: User): Observable<any> {
    const formData = {
      emailAddress: user.emailAddress,
      firstName: user.firstName,
      id: user.id,
      lastName: user.lastName
    };

    return this.http.post(`${environment.apiUrl}/admin/mailing-list-subscription`, formData);
  }

  public removeFromMailingList(emailAddress: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/admin/mailing-list-subscription/${emailAddress}`);
  }

  public updateMailingListSubscription(emailAddress: string, data: { subscribed: boolean }): Observable<any> {
    return this.http.patch(`${environment.apiUrl}/admin/mailing-list-subscription/${emailAddress}`, data);
  }
}

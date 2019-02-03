import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireAuth, FirebaseAuthState } from 'angularfire2';

import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';

import { BaseService } from './base.service';

@Injectable()
export class AuthService extends BaseService {

  constructor(
    public auth: AngularFireAuth,
    public http: Http
  ) {
    super();
  }

  createAuthUser(user: {email: string , password: string}): firebase.Promise<FirebaseAuthState> {
    return this.auth.createUser(user)
      .catch(this.handlePromiseError);
  }

  signWithEmail(user: {email: string , password: string}): firebase.Promise<boolean> {
    return this.auth.login(user)
      .then((authState: FirebaseAuthState) => {
        return authState != null;
      }).catch(this.handlePromiseError);
  }

  logout(): Promise<void> {
    return this.auth.logout();
  }

  get authenticated(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.auth
        .first()
        .subscribe((authState: FirebaseAuthState) => {
          (authState) ? resolve(true) : reject(false);
        });
    });
  }

}

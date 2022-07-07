import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../../environments/environment';

export interface SessionState {
  token: string | null;
  user: User|null;
}

export const createInitialState = (): SessionState => {
 const token = JSON.parse(localStorage.getItem(environment.sessionKey)||'{}').toString()
  if (token&& token!={}) {
    const jwt = new JwtHelperService();
    const decoded = jwt.decodeToken(token);
    return {
      token,
      user: decoded,
    };
  } 

  else {
    return {
      token: null,
      user: null,
    };
  }
};

@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'session' })
export class SessionStore extends Store<SessionState> {
  constructor() {
    super(createInitialState());
  }

  login(state: SessionState) {
    this.update(state);
    const token =JSON.stringify( state.token);
    localStorage.setItem(environment.sessionKey,token!)
  }

  logout() {
    localStorage.removeItem(environment.sessionKey);
    this.update(createInitialState());
  }
}

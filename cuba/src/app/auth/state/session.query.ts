import { Query } from '@datorama/akita';
import { SessionState, SessionStore } from './session.store';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { state } from '@angular/animations';

@Injectable({
  providedIn: 'root',
})
export class SessionQuery extends Query<SessionState> {
  [x: string]: any;
 token:any;
  constructor(protected store: SessionStore) {
    super(store);
  }
  selectAll(){
    return this.select((state)=>state.user)
  }
  isLoggedIn() { 
    const token= this.select((state)=>state.token).subscribe((user:any)=>this.token = user);
   const jwt = new JwtHelperService();
   const decoded = jwt.decodeToken(this.token);
    return !!this.getValue().token;
  }
  
  isRole(){
   const token= this.select((state)=>state.token).subscribe((user:any)=>this.token = user);
   const jwt = new JwtHelperService();
   const decoded = jwt.decodeToken(this.token);
   return decoded.data.role;
  }
  
  get accessToken() {
    return this.getValue().token;
  }
}

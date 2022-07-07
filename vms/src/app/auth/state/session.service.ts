import { SessionState, SessionStore } from './session.store';
import { environment } from '../../../environments/environment'
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    });
options = { headers: this.headers };
  constructor(private store: SessionStore, private http: HttpClient) {}

  login(contact_number: string, password: string) {
    const auth = { contact_number, password };
    const url = `${environment.apiUrl}/login.php`;
    return this.http
      .post<SessionState>(url, { contact_number, password , tokenize: false },this.options)
      .pipe(tap((res) => {
        this.store.login(res)
      }));
  }
forgetPassword(email:object){
  const url = `${environment.apiUrl}/reset_password.php`;
  return this.http.post(url, email)
  .pipe(
    tap((result: any) => {
      if (result.status==1) {
        // this.store.update(result.data.id, result.data);
      } else {
       console.log('error has occured')
      }
    }, error => {
      console.log(error.message)
    })
  );
}
resPassword(password: object){
  const url = `${environment.apiUrl}/reset_password.php`;
  return this.http.post(url, password)
  .pipe(
    tap((result: any) => {
      if (result.status==1) {
        // this.store.update(result.data.id, result.data);
      } else {
       console.log('error has occured')
      }
    }, error => {
      console.log(error.message)
    })
  );
}
  logout() {
    this.store.logout();
  }
}

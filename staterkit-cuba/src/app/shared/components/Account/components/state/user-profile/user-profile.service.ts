import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../../../../../environments/environment';
import { UserProfileStore } from './userProfile.store';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  constructor(private store:UserProfileStore,private http: HttpClient) { }
  get(): Observable<any> {
    const url = `${environment.apiUrl}/get_account.php`;
    return this.http.get(url)
      .pipe(
        tap((result: any) => {
          if (result.status) {
            
            this.store.set(result);
          } else {
           console.log('error has occured')
          }
        }, error => {
          console.log(error.message)
        })
      );
  }
  update( data:any): Observable<any> {
    const url = `${environment.apiUrl}/edit_account.php`;
    return this.http.put(url, data)
      .pipe(
        tap((result: any) => {
          if (result.status==1) {
            this.store.update(result.data[0].id, result.data[0]);
          } else {
           console.log('error has occured')
          }
        }, error => {
          console.log(error.message)
        })
      );
  }
  updatePassword( data:any): Observable<any> {
    const url = `${environment.apiUrl}/edit_password.php`;
    return this.http.put(url, data)
      .pipe(
        tap((result: any) => {
          if (result.status==1) {
          
          } else {
           console.log('error has occured')
          }
        }, error => {
          console.log(error.message)
        })
      );
  }
}



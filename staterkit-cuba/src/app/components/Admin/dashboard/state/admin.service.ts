import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';
import { environment } from '../../../../../environments/environment';
import {AdminStore } from './admin.store';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private store:AdminStore,private http: HttpClient) { }
  get(): Observable<any> {
    const url = `${environment.apiUrl}/get_customers.php`;
    return this.http.get(url)
      .pipe(
        tap((result: any) => {
          if (result.status==1) {
            this.store.set(result);
          } else {
           console.log('error has occured')
          }
        }, error => {
          console.log(error.message)
        })
      );
  }
  add(data: any): Observable<any[]|null|undefined> {
    console.log(data);
    const url = `${environment.apiUrl}/reg_customer.php`;
    return this.http.post(url, data).pipe(
      tap(
        (result: any) => {
          if (result.status==1) {
            this.store.add(result.data);
          } else {
            console.log('error has occured')
          }
        },
        (error) => {
         console.log(error.message)
        }
      )
    );
    
  }
  update( data:any): Observable<any> {
    const url = `${environment.apiUrl}/edit_customer.php`;
    return this.http.put(url, data)
      .pipe(
        tap((result: any) => {
          if (result.status==1) {
            console.log(result.data[0])
            this.store.update(result.data[0].ID, result.data[0]);
          } else {
           console.log('error has occured')
          }
        }, error => {
          console.log(error.message)
        })
      );
  }
  delete(id:any): Observable<any> {
    const url = `${environment.apiUrl}/del_customer.php/?${id}`;
    return this.http.put(url,id)
      .pipe(
        tap((result: any) => {
          if (result.status==1) {
            //this.store.remove(id);
            this.get().subscribe();
          } else {
           console.log('Error deleting')
          }
        }, error => {
        console.log(error.message)
        })
      );
  }
}

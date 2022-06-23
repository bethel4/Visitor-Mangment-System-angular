import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';
import { environment } from 'src/environments/environment';
import { ClientStore } from './client.store';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(private store:ClientStore,private http: HttpClient) { }
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    });
options = { headers: this.headers };
  get(): Observable<any> {
    const url = `${environment.apiUrl}/get_client.php`;
    return this.http.get(url)
      .pipe(
        tap((result: any) => {
          console.log(result)
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
    const url = `${environment.apiUrl}/reg_client.php`;
    return this.http.post(url, data,this.options).pipe(
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
    const url = `${environment.apiUrl}/edit_client.php`;
    return this.http.put(url, data)
      .pipe(
        tap((result: any) => {
          if (result.status==1) {
            this.store.update(result.data.id, result.data);
          } else {
           console.log('error has occured')
          }
        }, error => {
          console.log(error.message)
        })
      );
  }
  delete(id:any): Observable<any> {
    const url = `${environment.apiUrl}/del_client.php/?${id}`;
    return this.http.put(url,id)
      .pipe(
        tap((result: any) => {
          if (result.status==1) {
            // this.store.remove(id);
            
          } else {
           console.log('Error deleting')
          }
        }, error => {
        console.log(error.message)
        })
      );
  }
}

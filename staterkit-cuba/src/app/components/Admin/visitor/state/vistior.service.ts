import { state } from '@angular/animations';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { VisitorStore } from './visitior.store';
import { tap } from 'rxjs/internal/operators/tap';

@Injectable({
  providedIn: 'root',
})
export class VistiorService {
  constructor(private visitorStore: VisitorStore, private http: HttpClient) {}

  
  get(): Observable<any> {
    const url = `${environment.apiUrl}/get_visitors.php`;
    return this.http.get<any>(url)
      .pipe(
        tap((result: any) => {
          if (result.status==1) {
             this.visitorStore.set(result)
          } else {
            console.log('Error occurred', result.error);
          }
        }, error => {
         console.log('Error occurred', error.message);
        })
      );
  }
  getRequest(): Observable<any> {
    const url = `${environment.apiUrl}/get_requests.php`;
    return this.http.get<any>(url)
      .pipe(
        tap((result: any) => {
          if (result.status==1) {
             this.visitorStore.set(result)
          } else {
            console.log('Error occurred', result.error);
          }
        }, error => {
         console.log('Error occurred', error.message);
        })
      );
  }


  add(data: any): Observable<any[]|null|undefined> {
    console.log(data);
    const url = `${environment.apiUrl}/req_visit.php`;
    return this.http.post(url, data).pipe(
      tap(
        (result: any) => {
          if (result.status==1) {
            this.visitorStore.add(result.data);
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
  update(id:string, data:any): Observable<any> {
    const url = `${environment.apiUrl}/edit_visitor.php`;
    return this.http.put(url, data)
      .pipe(
        tap((result: any) => {
          if (result.status==1) {
            this.visitorStore.update(result.data[0].ID, result.data[0]);
          } else {
           console.log('error has occured')
          }
        }, error => {
          console.log(error.message)
        })
      );
  }
  updateTime(data:any): Observable<any> {
    const url = `${environment.apiUrl}/visitor_out.php`;
    return this.http.put(url,data)
      .pipe(
        tap((result: any) => {
          if (result.status==1) {
           // this.visitorStore.update(result.data[0].ID, result.data[0]);
            this.getRequest().subscribe();
          } else {
           console.log('error has occured')
          }
        }, error => {
          console.log(error.message)
        })
      );
  }
  getSingleCustomer(id:any): Observable<any> {
  const url = `${environment.apiUrl}/get_customers.php`;
  return this.http.get(url,id)
    .pipe(
      tap((result: any) => {
        if (result.status==1) {
          this.visitorStore.set(result.data);
         
        } else {
         console.log('Error deleting')
        }
      }, error => {
      console.log(error.message)
      })
    );
}
  delete(id:any): Observable<any> {
    const url = `${environment.apiUrl}/del_visitor.php/?${id}`;
    return this.http.put(url,id)
      .pipe(
        tap((result: any) => {
          if (result.status==1) {
            //this.visitorStore.update(result.data[0].ID, result.data[0]);
          
          } else {
           console.log('Error deleting')
          }
        }, error => {
        console.log(error.message)
        })
      );
  }
  
  requestStatus(data:any): Observable<any> {
    const url = `${environment.apiUrl}/request_status.php`;
    return this.http.put(url,data)
      .pipe(
        tap((result: any) => {
          if (result.status==1) {
           // this.visitorStore.update(result.data[0].ID, result.data[0]);
            this.getRequest().subscribe();
          } else {
           console.log('error has occured')
          }
        }, error => {
          console.log(error.message)
        })
      );
  }
}

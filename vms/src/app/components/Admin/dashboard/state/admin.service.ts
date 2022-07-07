import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';
import { environment } from '../../../../../environments/environment';
import {AdminStore } from './admin.store';
import * as moment from "moment";


let days=[]
var startdate = moment();
for(let i=0;i<= 7;i++){
   startdate = startdate.subtract(i, "days");
  days.push(startdate.format("ddd"))
  startdate = moment();
}
@Injectable({
  providedIn: 'root'
})
export class AdminService {

data=[]
  constructor(private store:AdminStore,private http: HttpClient) { }
  get(): Observable<any> {
    const url = `${environment.apiUrl}/report.php`;
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




}

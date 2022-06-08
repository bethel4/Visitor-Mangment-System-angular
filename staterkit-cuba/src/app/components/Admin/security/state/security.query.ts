import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { SecurityState,SecurityStore } from '../state/security.store';

@Injectable({ providedIn: 'root' })
export class SecurityQuery extends QueryEntity<SecurityState> {
  constructor(protected  store: SecurityStore) {
    super(store);

  }
  selectSecurity(){
    return this.select((state) =>state.entities?.data); 
  }
  }
  

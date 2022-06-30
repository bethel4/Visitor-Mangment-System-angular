import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import {AdminState,AdminStore } from './admin.store';

@Injectable({ providedIn: 'root' })
export class AdminQuery extends QueryEntity<AdminState> {
  constructor(protected store:AdminStore) {
    super(store);

  }
  selectCustomer(){
    return this.select((state) =>state.entities?.data); 
  }
  }
  

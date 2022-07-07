import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CustomerState,CustomerStore } from './customer.store';

@Injectable({ providedIn: 'root' })
export class CustomerQuery extends QueryEntity<CustomerState> {
  constructor(protected store: CustomerStore) {
    super(store);

  }
  selectCustomer(){
    return this.select((state) =>state.entities?.data); 
  }
  }
  

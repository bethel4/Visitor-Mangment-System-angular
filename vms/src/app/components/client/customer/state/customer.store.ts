import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface CustomerState extends EntityState<any> {}
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'customer', resettable: true })
export class CustomerStore extends EntityStore<CustomerState> {
  constructor() {
    super();
  }
 
}

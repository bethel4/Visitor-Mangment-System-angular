import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface AdminState extends EntityState<any> {}
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'admin', resettable: true })
export class AdminStore extends EntityStore<AdminState> {
  constructor() {
    super();
  }
 
}

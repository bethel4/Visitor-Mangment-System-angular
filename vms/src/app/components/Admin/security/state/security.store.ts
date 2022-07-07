import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface SecurityState extends EntityState<any> {}
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'security', resettable: true })
export class SecurityStore extends EntityStore<SecurityState> {
  constructor() {
    super();
  }
 
}

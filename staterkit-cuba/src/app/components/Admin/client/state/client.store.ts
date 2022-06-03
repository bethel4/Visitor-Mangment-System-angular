import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface ClientState extends EntityState<any> {}
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'client', resettable: true })
export class ClientStore extends EntityStore<ClientState> {
  constructor() {
    super();
  }
 
}

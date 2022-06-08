import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface VisitorState extends EntityState<any> {}
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'visitor', resettable: true })
export class VisitorStore extends EntityStore<VisitorState> {
  constructor() {
    super();
  }
 
}

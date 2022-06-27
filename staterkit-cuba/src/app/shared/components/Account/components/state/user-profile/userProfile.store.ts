import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface UserProfileState extends EntityState<any> {}
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'userProfile', resettable: true })
export class UserProfileStore extends EntityStore<UserProfileState> {
  constructor() {
    super();
  }
 
}

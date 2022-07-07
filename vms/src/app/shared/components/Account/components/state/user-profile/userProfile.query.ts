import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { UserProfileState, UserProfileStore } from './userProfile.store';

@Injectable({ providedIn: 'root' })
export class UserProfileQuery extends QueryEntity<UserProfileState> {
  constructor(protected override store: UserProfileStore) {
    super(store);

  }
  }
  

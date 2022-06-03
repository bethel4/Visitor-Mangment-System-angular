import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { VisitorState, VisitorStore } from './visitior.store';

@Injectable({ providedIn: 'root' })
export class VisitorQuery extends QueryEntity<VisitorState> {
  constructor(protected override store: VisitorStore) {
    super(store);

  }
  selectVisitor() {
    return this.select((state) =>state.entities?.data);
  }

  filterByOutTime() {
    return this.selectAll({
      filterBy: (entity) => entity.outtime ===null
    });
  }
  }
  

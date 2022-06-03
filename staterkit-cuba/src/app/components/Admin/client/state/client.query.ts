import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ClientState, ClientStore } from './client.store';

@Injectable({ providedIn: 'root' })
export class ClientQuery extends QueryEntity<ClientState> {
  clients:any
  constructor(protected store: ClientStore) {
    super(store);

  }
  selectClient(){
    return this.select((state) =>state.entities?.data)
  }

  getClient(){
    const token= this.select((state)=>state.entities?.data).subscribe((user:any)=>this.clients = user);
    console.log(this.clients);
    return this.clients;
  }
  // filterByTaskTemplateType() {
  //   return this.selectAll({
  //     filterBy: (state) => state.entities?.data.status === id,
  //   });
  // }
  }
  

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorComponent } from '../Admin/visitor/container/visitor.component';
import {ClientComponent} from '../Admin/client/client.component';
import {CustomerComponent} from '../Admin/customer/container/customer.component';
import {SecurityComponent } from '../Admin/security/container/security.component';
import { ClientFormComponent } from './client/ui/client-form/client-form.component';
import { CustomerFormComponent } from './customer/ui/customer-form/customer-form.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'clients',
        component: ClientComponent
      },
      {
        path:'addclient',
           component:ClientFormComponent
          },
      {
        path: 'customers',
        component: CustomerComponent,
       
      },
      {
        path: 'addcustomer',
        component: CustomerFormComponent,
       
      },
      {
        path: 'visitors',
        component: VisitorComponent
      },
      {
        path: 'security',
        component: SecurityComponent
      },
    ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

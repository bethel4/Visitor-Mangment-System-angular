import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorComponent } from '../Admin/visitor/container/visitor.component';
import { ClientComponent } from '../Admin/client/client.component';
import { CustomerComponent } from '../Admin/customer/container/customer.component';
import { SecurityComponent } from '../Admin/security/container/security.component';
import { ClientFormComponent } from './client/ui/client-form/addclient/client-form.component';
import { CustomerFormComponent } from './customer/ui/customer-form/addcustomer/customer-form.component';
import { ClientFormEditComponent } from './client/ui/client-form/edit client/client-formedit.componen';
import { SecurityFormComponent} from './security/ui/security-form/addsecurity/security-form.component'
import { CustomerFormEditComponent } from './customer/ui/customer-form/edit customer/customerEdit-form.component';
import { SecurityFormEditComponent } from './security/ui/security-form/editsecurity/securityEdit-form.component';
import {AdminComponent} from '../Admin/dashboard/admin.component'
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AdminComponent,
      },
      {
        path: 'clients',
        component: ClientComponent,
      },
      {
        path: 'addclient',
        component: ClientFormComponent,
      },
      {
        path: 'editclient/:id',
        component: ClientFormEditComponent,
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
        path: 'editcustomer/:id',
        component: CustomerFormEditComponent,
      },
      {
        path: 'visitors',
        component: VisitorComponent,
      },
      {
        path: 'security',
        component: SecurityComponent,
      },
      {
        path: 'addsecurity',
        component: SecurityFormComponent,
      },
      {
        path: 'editsecurity/:id',
        component: SecurityFormEditComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorComponent } from './visitor/container/visitor.component';
import { ClientComponent } from './client/client.component';
import { CustomerComponent } from './customer/container/customer.component';
import { SecurityComponent } from './security/container/security.component';
import { ClientFormComponent } from './client/ui/client-form/addclient/client-form.component';
import { CustomerFormComponent } from './customer/ui/customer-form/addcustomer/customer-form.component';
import { ClientFormEditComponent } from './client/ui/client-form/edit client/client-formedit.componen';
import { SecurityFormComponent} from './security/ui/security-form/addsecurity/security-form.component'
import { CustomerFormEditComponent } from './customer/ui/customer-form/edit customer/customerEdit-form.component';
import { SecurityFormEditComponent } from './security/ui/security-form/editsecurity/securityEdit-form.component';
import {AdminComponent} from './dashboard/admin.component'
<<<<<<< HEAD
import { ProfileComponent } from 'src/app/shared/components/Account/components/container/user-profile/user-profile.component';
import { EditProfileComponent } from 'src/app/shared/components/Account/components/ui/edit-profile/edit-profile.component';
import { VisitiorProfileComponent } from '../security/container/visitor-detail/visitor-profile.component';
=======
>>>>>>> 891d2e9fcc27142aebe4451a7860101024eab55c
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
        path: 'user',
        component: ProfileComponent,
      },
      {
           path: 'editprofile',
           component:EditProfileComponent,
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
      },
      {
        path: 'visitor_detail/:id',
        component: VisitiorProfileComponent
          }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

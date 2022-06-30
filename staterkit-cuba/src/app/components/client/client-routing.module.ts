import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorComponent } from './visitor/container/visitor.component';
import { CustomerComponent } from './customer/container/customer.component';
import { SecurityComponent } from './security/container/security.component';
import { CustomerFormComponent } from './customer/ui/customer-form/addcustomer/customer-form.component';
import { SecurityFormComponent} from './security/ui/security-form/addsecurity/security-form.component'
import { CustomerFormEditComponent } from './customer/ui/customer-form/edit customer/customerEdit-form.component';
import { SecurityFormEditComponent } from './security/ui/security-form/editsecurity/securityEdit-form.component';
import { ProfileComponent } from '../../shared/components/Account/components/container/user-profile/user-profile.component'
import { EditProfileComponent } from '../../shared/components/Account/components/ui/edit-profile/edit-profile.component';
import { VisitiorProfileComponent } from '../security/container/visitor-detail/visitor-profile.component';
import {DashboardComponent} from '../client/dashboard/dashboard.component'
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DashboardComponent,
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
export class ClientRoutingModule {}

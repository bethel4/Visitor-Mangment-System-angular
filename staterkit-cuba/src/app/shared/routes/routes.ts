import { Routes } from '@angular/router';
import {AuthRoleVisitorGuard} from '../../auth/service/auth-guard-visitor'
import {AuthRoleSuperAdminGuard} from '../../auth/service/auth-child-guard'
import {AuthRoleCustomerGuard} from '../../auth/service/auth-guard-customer'
export const content: Routes = [
  {
    path: 'security',
    loadChildren: () => import('../../components/security/security.module').then(m => m.SecurityeModule),canActivateChild: [AuthRoleVisitorGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('../../components/Admin/admin.module').then(m => m.AdminModule),canActivateChild: [AuthRoleSuperAdminGuard]
  },
  {
    path: 'customer',
    loadChildren: () => import('../../components/customer/customer.module').then(m => m.CustomerModule),canActivateChild: [AuthRoleCustomerGuard]
  }
];

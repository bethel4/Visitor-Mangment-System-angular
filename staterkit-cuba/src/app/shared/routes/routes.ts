import { Routes } from '@angular/router';
import {AuthRoleSuperAdminGuard} from '../../auth/service/auth-child-guard'

export const content: Routes = [
  // {
  //   path: 'admin',
  //   loadChildren: () => import('../../components/security/sample.module').then(m => m.SampleModule),canActivateChild: [AuthRoleSuperAdminGuard]
  // },
  {
    path: 'admin',
    loadChildren: () => import('../../components/Admin/admin.module').then(m => m.AdminModule)
  }
];

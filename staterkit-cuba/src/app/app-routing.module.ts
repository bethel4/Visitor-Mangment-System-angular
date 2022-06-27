import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from "./shared/components/layout/content/content.component";
import { FullComponent } from "./shared/components/layout/full/full.component";
import { full } from "./shared/routes/full.routes";
import { content } from "./shared/routes/routes";
import { AuthGuard } from './auth/service/auth-guard';
import { LoginComponent } from './auth/component/login/login.component';
import { ResetPasswordComponent } from './auth/component/reset-password/reset-password.component';
import { ForgetPasswordComponent } from './auth/component/forget-password/forget-password.component';
const routes: Routes = [
  {
    path: '',
    redirectTo:"login",
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'resetPassword',
    component:ResetPasswordComponent
  },
  {
    path: 'forgetPassword',
    component:ForgetPasswordComponent
  },
  {
    path: '',
    component: ContentComponent,
    canActivate: [AuthGuard],
    children: content
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [[RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'legacy'
})],
],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityComponent } from './container/security.component';
import { VisitorsComponent } from './container/myVisitor/visitor.component';
import { VisitorFormComponent } from './ui/visitorform/visitorform.component';
import { VisitiorProfileComponent } from './container/visitor-detail/visitor-profile.component';
import { ProfileComponent } from 'src/app/shared/components/Account/components/container/user-profile/user-profile.component';
import { EditProfileComponent } from 'src/app/shared/components/Account/components/ui/edit-profile/edit-profile.component';



const routes: Routes = [
  {
    path: '',
   
  children:[
    {
      path: '',
      component: SecurityComponent
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
      path: 'visitors', 
      component: VisitorsComponent
  
  },{
    path:'addRquest',
    component: VisitorFormComponent
  },
  {
path: 'visitor_detail/:id',
component: VisitiorProfileComponent
  }
  ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }

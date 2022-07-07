import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorsComponent } from './container/myVisitor/visitor.component'
import { CustomerComponent } from './container/customer/customer.component';
import {VisitorFormComponent} from './ui/visitorform/visitorform.component'
import { VisitiorProfileComponent } from './container/visitor-detail/visitor-profile.component';
import { ProfileComponent } from 'src/app/shared/components/Account/components/container/user-profile/user-profile.component';
import { EditProfileComponent } from 'src/app/shared/components/Account/components/ui/edit-profile/edit-profile.component';
const routes: Routes = [
  {
    path: '',
   children: [
     {
        path:'',
     component: CustomerComponent
    },
    {
      path:'visitors',
      component:VisitorsComponent

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
      path:'addvisitor',
      component:VisitorFormComponent

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
export class CustomerRoutingModule { }

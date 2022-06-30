import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { VisitorsComponent } from './container/myVisitor/visitor.component'
import { CustomerComponent } from './container/customer/customer.component';
import {VisitorFormComponent} from './ui/visitorform/visitorform.component'
import { VisitiorProfileComponent } from './container/visitor-detail/visitor-profile.component';
import { ProfileComponent } from 'src/app/shared/components/Account/components/container/user-profile/user-profile.component';
import { EditProfileComponent } from 'src/app/shared/components/Account/components/ui/edit-profile/edit-profile.component';
=======
import { VisitorsComponent } from './container/myVisitor/visitor.component';
import { CustomerComponent } from './container/customer/customer.component';
import {VisitorFormComponent} from './ui/visitorform/visitorform.component'
import { VisitiorProfileComponent } from './container/visitor-detail/visitor-profile.component';
>>>>>>> 891d2e9fcc27142aebe4451a7860101024eab55c
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
<<<<<<< HEAD
      path: 'user',
      component: ProfileComponent,
    },
    {
         path: 'editprofile',
         component:EditProfileComponent,
    },
    {
=======
>>>>>>> 891d2e9fcc27142aebe4451a7860101024eab55c
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

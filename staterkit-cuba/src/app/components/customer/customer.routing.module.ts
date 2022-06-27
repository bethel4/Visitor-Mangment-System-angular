import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorsComponent } from './container/myVisitor/visitor.component'
import { CustomerComponent } from './container/customer/customer.component';
<<<<<<< HEAD
import {VisitorFormComponent} from './ui/visitorform/visitorform.component'
import { VisitiorProfileComponent } from './container/visitor-detail/visitor-profile.component';
import { ProfileComponent } from 'src/app/shared/components/Account/components/container/user-profile/user-profile.component';
import { EditProfileComponent } from 'src/app/shared/components/Account/components/ui/edit-profile/edit-profile.component';
=======
import {VisitorFormComponent} from '../customer/ui/visitorform/visitorform.component'
import { VisitiorProfileComponent } from './container/visitor-detail/visitor-profile.component';
>>>>>>> 311272ad4dc7bb93a7ed4348ac26ab148663e9d4
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
>>>>>>> 311272ad4dc7bb93a7ed4348ac26ab148663e9d4
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

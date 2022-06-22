import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorsComponent } from '../customer/container/myVisitor/visitor.component';
import { CustomerComponent } from './container/customer/customer.component';
import {VisitorFormComponent} from '../customer/ui/visitorform/visitorform.component'
import { VisitiorProfileComponent } from './container/visitor-detail/visitor-profile.component';
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

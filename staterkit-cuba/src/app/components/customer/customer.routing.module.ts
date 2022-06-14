import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorsComponent } from '../customer/container/myVisitor/visitor.component';
import { CustomerComponent } from './container/customer/customer.component';
import {VisitorFormComponent} from '../customer/ui/visitorform/visitorform.component'
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

    }
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }

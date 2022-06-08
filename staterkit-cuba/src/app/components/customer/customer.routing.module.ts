import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorsComponent } from '../customer/container/myVisitor/visitor.component';
import { CustomerComponent } from './container/customer/customer.component';

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

    }
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }

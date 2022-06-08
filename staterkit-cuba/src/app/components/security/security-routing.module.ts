import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityComponent } from '../../components/security/container/security.component';
import { VisitorsComponent } from './container/myVisitor/visitor.component';
import { VisitorFormComponent } from './ui/visitorform/visitorform.component';



const routes: Routes = [
  {
    path: '',
   
  children:[
    {
      path: '',
      component: SecurityComponent
    },

    {
      path: 'visitors', 
      component: VisitorsComponent
  
  },{
    path:'addRquest',
    component: VisitorFormComponent
  }
  ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }

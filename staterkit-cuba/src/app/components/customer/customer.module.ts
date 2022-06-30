import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
<<<<<<< HEAD
import { CustomerRoutingModule } from './customer.routing.module'
import { CustomerComponent } from './container/customer/customer.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { VisitorsComponent } from './container/myVisitor/visitor.component'
=======
import { CustomerRoutingModule } from './customer.routing.module';
import { CustomerComponent } from './container/customer/customer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { VisitorsComponent } from './container/myVisitor/visitor.component';
>>>>>>> 891d2e9fcc27142aebe4451a7860101024eab55c
import { VisitorFormComponent } from './ui/visitorform/visitorform.component';
import { VisitiorProfileComponent } from './container/visitor-detail/visitor-profile.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CustomerRoutingModule,
    NgxDatatableModule,
    NgbModule,
   
    NgSelectModule,
  ],
  declarations: [CustomerComponent,VisitorsComponent, VisitorFormComponent,VisitiorProfileComponent]
})
export class CustomerModule { }

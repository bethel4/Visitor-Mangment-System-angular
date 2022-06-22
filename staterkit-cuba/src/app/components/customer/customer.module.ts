import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { CustomerRoutingModule } from '../customer/customer.routing.module';
import { CustomerComponent } from './../customer/container/customer/customer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { VisitorsComponent } from '../customer/container/myVisitor/visitor.component';
import { VisitorFormComponent } from './ui/visitorform/visitorform.component';
import { VisitiorProfileComponent } from '../customer/container/visitor-detail/visitor-profile.component';

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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { CustomerRoutingModule } from '../customer/customer.routing.module';
import { CustomerComponent } from './../customer/container/customer/customer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { VisitorsComponent } from '../customer/container/myVisitor/visitor.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CustomerRoutingModule,
    NgxDatatableModule,
    NgbModule,
    NgSelectModule,
  ],
  declarations: [CustomerComponent,VisitorsComponent]
})
export class CustomerModule { }

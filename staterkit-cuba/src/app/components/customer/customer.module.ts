import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { CustomerRoutingModule } from './customer.routing.module'
import { CustomerComponent } from './container/customer/customer.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
<<<<<<< HEAD
import { VisitorsComponent } from './container/myVisitor/visitor.component'
import { VisitorFormComponent } from './ui/visitorform/visitorform.component';
import { VisitiorProfileComponent } from './container/visitor-detail/visitor-profile.component';
=======
import { VisitorsComponent } from '../customer/container/myVisitor/visitor.component';
import { VisitorFormComponent } from './ui/visitorform/visitorform.component';
import { VisitiorProfileComponent } from '../customer/container/visitor-detail/visitor-profile.component';
>>>>>>> 311272ad4dc7bb93a7ed4348ac26ab148663e9d4

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

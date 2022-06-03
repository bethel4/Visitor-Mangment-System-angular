import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { VisitorRoutingModule } from '../visitor/visitorrouting.module';
import { VisitorComponent } from './container/visitor.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    VisitorRoutingModule,
    NgxDatatableModule,
    NgbModule,
    NgSelectModule,
  ],
  declarations: [VisitorComponent]
})
export class VisitorModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { SampleRoutingModule } from './sample-routing.module';
import { SampleComponent } from './sample.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SampleRoutingModule,
    NgxDatatableModule,
    NgbModule,
    NgSelectModule,
  ],
  declarations: [SampleComponent]
})
export class SampleModule { }

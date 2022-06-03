import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { SecurityRoutingModule } from '../../../components/Admin/security/security-routing.module';
import { SecurityComponent } from './container/security.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SecurityRoutingModule,
    NgxDatatableModule,
    NgbModule,
    NgSelectModule,
  ],
  declarations: [SecurityComponent]
})
export class ScurityModule { }

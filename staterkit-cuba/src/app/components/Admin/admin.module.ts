import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './dashboard/admin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ClientComponent } from './client/client.component';
import { CustomerComponent } from './customer/container/customer.component';
import { SecurityComponent } from './security/container/security.component';
import { VisitorComponent } from './visitor/container/visitor.component';
import { ClientFormComponent } from './client/ui/client-form/client-form.component';
import {CustomerFormComponent} from './customer/ui/customer-form/customer-form.component'
@NgModule({
  declarations: [
    AdminComponent,
    CustomerComponent,
    VisitorComponent,
    ClientComponent,
    CustomerFormComponent,
    SecurityComponent,
    ClientFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    NgxDatatableModule,
    NgbModule,
    NgSelectModule,
  ],
})
export class AdminModule {}

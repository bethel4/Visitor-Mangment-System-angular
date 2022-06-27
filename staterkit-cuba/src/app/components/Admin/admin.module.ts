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
import { ClientFormComponent } from './client/ui/client-form/addclient/client-form.component';
import { ClientFormEditComponent } from './client/ui/client-form/edit client/client-formedit.componen';
import {CustomerFormComponent} from './customer/ui/customer-form/addcustomer/customer-form.component'
import {CustomerFormEditComponent} from './customer/ui/customer-form/edit customer/customerEdit-form.component'
import { SecurityFormComponent } from './security/ui/security-form/addsecurity/security-form.component';
import {SecurityFormEditComponent} from './security/ui/security-form/editsecurity/securityEdit-form.component'
import { ChartistModule } from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CountToModule } from 'angular-count-to';
import { AgmCoreModule } from '@agm/core'
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AdminComponent,
    CustomerComponent,
    VisitorComponent,
    ClientComponent,
    CustomerFormComponent,
    ClientFormEditComponent,
    SecurityComponent,
    SecurityFormComponent,
    CustomerFormEditComponent,
    ClientFormComponent,
    SecurityFormEditComponent

  ],
  imports: [
    CommonModule,
    ChartistModule,
    ChartsModule,
    NgApexchartsModule,
    CarouselModule,
    CKEditorModule,
    CountToModule,
    SharedModule,
    AdminRoutingModule,
    RouterModule,
    NgxDatatableModule,
    NgbModule,
    NgSelectModule,
    AgmCoreModule.forRoot({
    
    }),
  ],
})
export class AdminModule {}

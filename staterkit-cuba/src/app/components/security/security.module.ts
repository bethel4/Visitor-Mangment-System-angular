import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { SecurityRoutingModule } from './security-routing.module';
import { SecurityComponent } from './container/security.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {VisitorFormComponent} from '../security/ui/visitorform/visitorform.component'
import {VisitorsComponent} from '../security/container/myVisitor/visitor.component'
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SecurityRoutingModule,
    NgxDatatableModule,
    NgbModule,
    NgSelectModule,
    
    
  ],
  declarations: [SecurityComponent,VisitorFormComponent,VisitorsComponent]
})
export class SecurityeModule { }

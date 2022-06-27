import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { SecurityRoutingModule } from './security-routing.module';
import { SecurityComponent } from './container/security.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {VisitorFormComponent} from './ui/visitorform/visitorform.component'
import {VisitorsComponent} from './container/myVisitor/visitor.component'
import { VisitiorProfileComponent } from './container/visitor-detail/visitor-profile.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SecurityRoutingModule,
    NgxDatatableModule,
    NgbModule,
    NgSelectModule,
    
    
  ],
  declarations: [SecurityComponent,VisitorFormComponent,VisitiorProfileComponent,VisitorsComponent]
})
export class SecurityeModule { }

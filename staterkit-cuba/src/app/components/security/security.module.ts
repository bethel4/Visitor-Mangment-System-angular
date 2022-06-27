import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { SecurityRoutingModule } from './security-routing.module';
import { SecurityComponent } from './container/security.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
<<<<<<< HEAD
import {VisitorFormComponent} from './ui/visitorform/visitorform.component'
import {VisitorsComponent} from './container/myVisitor/visitor.component'
=======
import {VisitorFormComponent} from '../security/ui/visitorform/visitorform.component'
import {VisitorsComponent} from '../security/container/myVisitor/visitor.component'
>>>>>>> 311272ad4dc7bb93a7ed4348ac26ab148663e9d4
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

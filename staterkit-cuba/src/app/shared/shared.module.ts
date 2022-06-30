import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragulaModule } from 'ng2-dragula';
import { WebcamModule } from 'ngx-webcam';
import {NgxPrintModule} from 'ngx-print';
  
import { TranslateModule } from '@ngx-translate/core';
// Components
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FeatherIconsComponent } from './components/feather-icons/feather-icons.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/layout/content/content.component';
import { FullComponent } from './components/layout/full/full.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TapToTopComponent } from './components/tap-to-top/tap-to-top.component';
import {TableComponent} from './components/table/table.component'
// Header Elements Components
import { SearchComponent } from './components/header/elements/search/search.component';
import { MegaMenuComponent } from './components/header/elements/mega-menu/mega-menu.component';
import { LanguagesComponent } from './components/header/elements/languages/languages.component';
import { NotificationComponent } from './components/header/elements/notification/notification.component';
import { BookmarkComponent } from './components/header/elements/bookmark/bookmark.component';
import { CartComponent } from './components/header/elements/cart/cart.component';
import { MessageBoxComponent } from './components/header/elements/message-box/message-box.component';
import { MyAccountComponent } from './components/header/elements/my-account/my-account.component';
import {FormComponent} from './components/form/addForm/form.component'
import { FormComponentEdit } from './components/form/formedit/formEdit.component'
<<<<<<< HEAD
import {EditProfileComponent} from './components/Account/components/ui/edit-profile/edit-profile.component'
import {ProfileComponent} from './components/Account/components/container/user-profile/user-profile.component'
=======
>>>>>>> 891d2e9fcc27142aebe4451a7860101024eab55c
import {VisitiorDetailsComponent} from './components/visitor-details/visitor-detail.component'
// Directives
import { DisableKeyPressDirective } from './directives/disable-key-press.directive';
import { OnlyAlphabetsDirective } from './directives/only-alphabets.directive';
import { OnlyNumbersDirective } from './directives/only-numbers.directive';
import { ShowOptionsDirective } from './directives/show-options.directive';
// Services
import { LayoutService } from './services/layout.service';
import { NavService } from './services/nav.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FormComponentEdit,
    SidebarComponent,
    ContentComponent,
    BreadcrumbComponent,
    FeatherIconsComponent,
    FullComponent,
    ShowOptionsDirective,
    DisableKeyPressDirective,
    OnlyAlphabetsDirective,
    OnlyNumbersDirective,
    LoaderComponent,
    SearchComponent,
    MegaMenuComponent,
    LanguagesComponent,
    NotificationComponent,
    BookmarkComponent,
    CartComponent,
    MessageBoxComponent,
    FormComponent,
    MyAccountComponent,
    TableComponent,
<<<<<<< HEAD
    VisitiorDetailsComponent,
    ProfileComponent,
    EditProfileComponent
=======
    VisitiorDetailsComponent
>>>>>>> 891d2e9fcc27142aebe4451a7860101024eab55c
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    DragulaModule.forRoot(),
    TranslateModule,
    WebcamModule,
    NgxPrintModule
  ],
  providers: [
    NavService,
    LayoutService,
    DatePipe
  ],
  exports: [
    NgbModule,
    FormsModule,
    WebcamModule,
    ReactiveFormsModule,
    TranslateModule,
    TableComponent,
    LoaderComponent,
<<<<<<< HEAD
    ProfileComponent,
=======
>>>>>>> 891d2e9fcc27142aebe4451a7860101024eab55c
    FormComponentEdit,
    VisitiorDetailsComponent,
    NgxPrintModule,
    FormComponent,
    BreadcrumbComponent,
    FeatherIconsComponent,
    DisableKeyPressDirective,
    OnlyAlphabetsDirective,
    OnlyNumbersDirective
  ],
})
export class SharedModule { }

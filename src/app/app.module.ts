// angular core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// man made components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApisComponent } from './apis/apis.component';
import { CompanyComponent } from './company/company.component';
import { CareersComponent } from './careers/careers.component';
import { AppRoutingModule } from './app-routing.module'
import { HeaderComponent } from './shared/header/header.component';
import { ContactUsComponent } from './shared/contact-us/contact-us.component';
import { HeaderLayoutDirective } from './directives/header-layout.directive'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
// libraries
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './shared/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactUsComponent,
    HomeComponent,
    ApisComponent,
    CompanyComponent,
    CareersComponent,
    FooterComponent,
    HeaderLayoutDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  	NgbModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

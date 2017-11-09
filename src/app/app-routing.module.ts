import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ApisComponent } from './apis/apis.component';
import { CompanyComponent } from './company/company.component';
import { CareersComponent } from './careers/careers.component';
import { HeaderComponent } from './shared/header/header.component';
import { ContactUsComponent } from './shared/contact-us/contact-us.component';

const taskerRoutes: Routes = [
  { path:'', component: HomeComponent },
  { path:'company', component: CompanyComponent },
  { path:'api', component: ApisComponent },
  { path:'career', component: CareersComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(taskerRoutes)
],
exports: [RouterModule]
})
export class AppRoutingModule{

}

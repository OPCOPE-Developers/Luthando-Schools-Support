import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ProvideSupportComponent } from './provide-support/provide-support.component';
import { RegisterOrganisationComponent } from './register-organisation/register-organisation.component';
import { RegisterSchoolComponent } from './register-school/register-school.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

const routes: Routes =[
  {path:'home', component: HomePageComponent, pathMatch :'full'},
  {path:'provide-support', component: ProvideSupportComponent, pathMatch :'full'},
  {path:'register-organisation', component: RegisterOrganisationComponent, pathMatch :'full'},
  {path:'register-school', component: RegisterSchoolComponent, pathMatch :'full'},
  {path:'register-user', component: RegisterUserComponent, pathMatch :'full'},
  {path:'view-profile', component: ViewProfileComponent, pathMatch :'full'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],

  exports:[RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  {path:'home', component: HomePageComponent, pathMatch :'full'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],

  exports:[RouterModule]
})
export class AppRoutingModule { }

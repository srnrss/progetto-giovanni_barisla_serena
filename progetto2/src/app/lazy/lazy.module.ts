import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { PrezziComponent } from './prezzi/prezzi.component';
import { LazyRoutingModule } from './lazy-routing.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    HomeComponent,
    ChiSiamoComponent,
    PrezziComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule,
    RouterModule
  ]
})
export class LazyModule { }

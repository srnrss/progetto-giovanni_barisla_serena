import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { RouterModule,Routes } from '@angular/router';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { PrezziComponent } from './prezzi/prezzi.component';


@NgModule({
  declarations: [
    HomeComponent,
    ChiSiamoComponent,
    PrezziComponent
  ],
  imports: [
    CommonModule,
 
    RouterModule
  ],
  exports:[
    HomeComponent
  ]
})
export class LazyModule { }

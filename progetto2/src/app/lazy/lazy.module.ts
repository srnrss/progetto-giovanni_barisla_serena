import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { PrezziComponent } from './prezzi/prezzi.component';



@NgModule({
  declarations: [
    HomeComponent,
    ChiSiamoComponent,
    PrezziComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LazyModule { }

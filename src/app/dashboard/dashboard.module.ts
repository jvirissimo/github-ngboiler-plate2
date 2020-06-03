import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSliderModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }

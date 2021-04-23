import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRouterRoutingModule } from './app-router-routing.module';
import { ProfileComponent } from 'src/app/home/components/pages/profile/profile.component';


@NgModule({
  declarations: [ProfileComponent,],
  imports: [
    CommonModule,
    AppRouterRoutingModule
  ]
})
export class AppRouterModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRouterRoutingModule } from './app-router-routing.module';


// Profile Components
import { ProfileComponent } from 'src/app/home/components/pages/profile/profile.component';
import { ProfileIndexComponent } from 'src/app/home/components/pages/profile/profile-index/profile-index.component';


@NgModule({
  declarations: [ProfileComponent, ProfileIndexComponent],
  imports: [
    CommonModule,
    AppRouterRoutingModule
  ]
})
export class AppRouterModule { }

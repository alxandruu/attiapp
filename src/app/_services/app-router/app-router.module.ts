import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRouterRoutingModule } from './app-router-routing.module';


// Profile Components
import { ProfileComponent } from 'src/app/home/components/pages/profile/profile.component';
import { ProfileIndexComponent } from 'src/app/home/components/pages/profile/profile-index/profile-index.component';
import { EmpleadosComponent } from 'src/app/home/components/pages/empleados/empleados.component';
import { AddEmpleadoComponent } from 'src/app/home/components/pages/empleados/add-empleado/add-empleado.component';
import { EmpleadosIndexComponent } from 'src/app/home/components/pages/empleados/empleados-index/empleados-index.component';



@NgModule({
  declarations: [ProfileComponent, ProfileIndexComponent,EmpleadosComponent,AddEmpleadoComponent,EmpleadosIndexComponent],
  imports: [
    CommonModule,
    AppRouterRoutingModule
  ]
})
export class AppRouterModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpleadoComponent } from 'src/app/home/components/pages/empleados/add-empleado/add-empleado.component';
import { EmpleadosIndexComponent } from 'src/app/home/components/pages/empleados/empleados-index/empleados-index.component';
import { EmpleadosComponent } from 'src/app/home/components/pages/empleados/empleados.component';
import { ChangePassComponent } from 'src/app/home/components/pages/profile/change-pass/change-pass.component';
import { ChangePhotoComponent } from 'src/app/home/components/pages/profile/change-photo/change-photo.component';
import { ProfileIndexComponent } from 'src/app/home/components/pages/profile/profile-index/profile-index.component';
import { ProfileComponent } from 'src/app/home/components/pages/profile/profile.component';
import { DashboardComponent } from 'src/app/home/dashboard/dashboard.component';
import { HomeComponent } from 'src/app/home/home.component';
import { AuthguardGuard } from '../authguard.guard';

const routes: Routes = [
  {
    path: 'dashboard', component: HomeComponent, canActivate: [AuthguardGuard],
    children: [
       { path: '', component: DashboardComponent },
      {
        path: 'profile', component: ProfileComponent, children: [
          { path: '', component: ProfileIndexComponent },
          { path: 'cambiarClave', component: ChangePassComponent},
          { path: 'cambiarFoto', component: ChangePhotoComponent}
        ]
      },
      {
        path: 'empleados', component: EmpleadosComponent, children: [
          { path: '', component: EmpleadosIndexComponent },
          { path: 'add-empleado', component: AddEmpleadoComponent},
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRouterRoutingModule { }

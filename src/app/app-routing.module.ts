import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './_services/authguard.guard';

// Principales Componentes
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';

// Profile Componentes
import { ProfileComponent } from './home/components/pages/profile/profile.component';
import { ProfileIndexComponent } from './home/components/pages/profile/profile-index/profile-index.component';
import { ChangePassComponent } from './home/components/pages/profile/change-pass/change-pass.component';
import { ChangePhotoComponent } from './home/components/pages/profile/change-photo/change-photo.component';

// Empleado Componentes
import { EmpleadosComponent } from './home/components/pages/empleados/empleados.component';
import { EmpleadosIndexComponent } from './home/components/pages/empleados/empleados-index/empleados-index.component';
import { AddEmpleadoComponent } from './home/components/pages/empleados/add-empleado/add-empleado.component';
import { GananciasComponent } from './home/components/pages/ganancias/ganancias.component';
import { GananciasIndexComponent } from './home/components/pages/ganancias/ganancias-index/ganancias-index.component';
import { AddGananciaComponent } from './home/components/pages/ganancias/add-ganancia/add-ganancia.component';
import { AllGananciasComponent } from './home/components/pages/ganancias/all-ganancias/all-ganancias.component';
import { AdminstrarComponent } from './home/components/pages/profile/administrar/adminstrar.component';
import { CategoriasComponent } from './home/components/pages/profile/administrar/categorias/categorias.component';
import { UsuariosComponent } from './home/components/pages/profile/administrar/usuarios/usuarios.component';
import { ConfComponent } from './home/components/pages/profile/administrar/conf/conf.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: HomeComponent, canActivate: [AuthguardGuard],
    children: [
      { path: '', component: DashboardComponent },
      {
        path: 'profile', component: ProfileComponent, children: [
          { path: '', component: ProfileIndexComponent },
          { path: 'cambiarClave', component: ChangePassComponent },
          { path: 'cambiarFoto', component: ChangePhotoComponent },
          { path: 'administrar', component: AdminstrarComponent, children: [
            {path: 'categorias', component: CategoriasComponent},
            {path: 'usuarios', component: UsuariosComponent},
            {path: 'conf', component: ConfComponent}
          ] }
        ]
      },
      {
        path: 'empleados', component: EmpleadosComponent, children: [
          { path: '', component: EmpleadosIndexComponent },
          { path: 'agregar', component: AddEmpleadoComponent },
        ]
      },
      {
        path: 'ganancias', component: GananciasComponent, children: [
          { path: '', component: GananciasIndexComponent },
          { path: 'agregar', component: AddGananciaComponent },
          { path: 'todasganancias', component: AllGananciasComponent },
        ]
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

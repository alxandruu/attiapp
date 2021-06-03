import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


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
import { NavbarComponent } from './home/components/navbar/navbar.component';
import { FiltroPipe } from './home/components/pages/empleados/empleados-index/pipes/filtro.pipe';
import { GananciasComponent } from './home/components/pages/ganancias/ganancias.component';
import { GananciasIndexComponent } from './home/components/pages/ganancias/ganancias-index/ganancias-index.component';
import { AddGananciaComponent } from './home/components/pages/ganancias/add-ganancia/add-ganancia.component';
import { AllGananciasComponent } from './home/components/pages/ganancias/all-ganancias/all-ganancias.component';
import { FiltroPipeGanancia } from './home/components/pages/ganancias/all-ganancias/pipes/filtroganancias.pipe';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    ProfileComponent,
    ProfileIndexComponent,
    ChangePassComponent,
    ChangePhotoComponent,
    DashboardComponent,
    EmpleadosComponent,
    EmpleadosIndexComponent,
    AddEmpleadoComponent,
    FiltroPipe,
    GananciasComponent,
    GananciasIndexComponent,
    AddGananciaComponent,
    AllGananciasComponent,
    FiltroPipeGanancia
   
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

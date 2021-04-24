import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileIndexComponent } from 'src/app/home/components/pages/profile/profile-index/profile-index.component';
import { ProfileComponent } from 'src/app/home/components/pages/profile/profile.component';
import { HomeComponent } from 'src/app/home/home.component';
import { AuthguardGuard } from '../authguard.guard';

const routes: Routes = [
  {
    path: 'dashboard', component: HomeComponent, canActivate: [AuthguardGuard],
    children: [
      // { path: '', component: InicioComponent },
      {
        path: 'profile', component: ProfileComponent, children: [
          { path: '', component: ProfileIndexComponent },
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRouterRoutingModule { }

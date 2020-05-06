import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
    data: { showHeader: false, showSidebar: false }
  },
  {
    path: 'registration',
    loadChildren: './registration/registration.module#RegistrationModule',
    data: { showHeader: false, showSidebar: false }
  },
  { path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  { path: 'users',
    loadChildren: './users/users.module#UsersModule'
  },
  { path: 'account-settings',
    loadChildren: './account-settings/account-settings.module#AccountSettingsModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

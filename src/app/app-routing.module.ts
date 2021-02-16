import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Error404Component } from './error404/error404.component';
import { IsLoggedGuard } from './shared/guards/is-logged.guard';
import { IsNotLoggedGuard } from './shared/guards/is-not-logged.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./logged-area/logged-area.module').then(m => m.LoggedAreaModule),
    canActivate: [IsLoggedGuard],
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    canActivate: [IsNotLoggedGuard],
  },
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }

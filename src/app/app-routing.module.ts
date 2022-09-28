import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutOutsideComponent } from '@shared/components/layout/layout-outside/layout-outside.component';
import { LoginComponent } from './modules/misc/login/login.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LayoutOutsideComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

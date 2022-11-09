import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutInsideComponent } from '@shared/components/layout/layout-inside/layout-inside.component';
import { UserGuardService } from '@shared/guards/user-guard.service';
import { UserHomeComponent } from './components/user-home/user-home.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutInsideComponent,
    canActivate: [UserGuardService],
    children: [
      {
        path: 'userhome',
        component: UserHomeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}

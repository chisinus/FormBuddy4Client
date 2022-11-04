import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutInsideComponent } from '@shared/components/layout/layout-inside/layout-inside.component';
import { UserHomeComponent } from './components/user-home/user-home.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutInsideComponent,
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

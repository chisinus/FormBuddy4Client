import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegBasicInfoComponent } from './reg-basic-info/reg-basic-info.component';
import { RegConfirmationComponent } from './reg-confirmation/reg-confirmation.component';
import { RegLoginComponent } from './reg-login/reg-login.component';
import { RegSecurityQuestionComponent } from './reg-security-question/reg-security-question.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'reg-basc',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'reg-basic',
  //   component: RegBasicInfoComponent,
  // },
  // {
  //   path: 'reg-sq',
  //   component: RegSecurityQuestionComponent,
  // },
  // {
  //   path: 'reg-login',
  //   component: RegLoginComponent,
  // },
  // {
  //   path: 'reg-confirm',
  //   component: RegConfirmationComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutOutsideComponent } from '@shared/components/layout/layout-outside/layout-outside.component';
import { ContactUsComponent } from './modules/misc/contact-us/contact-us.component';
import { LoginComponent } from './modules/misc/login/login.component';
import { PrivacyComponent } from './modules/misc/privacy/privacy.component';
import { TermsConditionComponent } from './modules/misc/terms-condition/terms-condition.component';
import { RegistrationComponent } from './modules/registration/registration/registration.component';

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
      {
        path: 'registration',
        component: RegistrationComponent,
      },
    ],
  },
  {
    path: 'contactus',
    component: ContactUsComponent,
  },
  {
    path: 'privacy',
    component: PrivacyComponent,
  },
  {
    path: 'terms',
    component: TermsConditionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

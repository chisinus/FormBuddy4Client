import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegBasicInfoComponent } from './reg-basic-info/reg-basic-info.component';
import { RegSecurityQuestionComponent } from './reg-security-question/reg-security-question.component';
import { RegLoginComponent } from './reg-login/reg-login.component';
import { RegConfirmationComponent } from './reg-confirmation/reg-confirmation.component';
import { RegistrationComponent } from './registration/registration.component';


@NgModule({
  declarations: [
    RegBasicInfoComponent,
    RegSecurityQuestionComponent,
    RegLoginComponent,
    RegConfirmationComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule
  ]
})
export class RegistrationModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegBasicInfoComponent } from './reg-basic-info/reg-basic-info.component';
import { RegSecurityQuestionComponent } from './reg-security-question/reg-security-question.component';
import { RegLoginComponent } from './reg-login/reg-login.component';
import { RegConfirmationComponent } from './reg-confirmation/reg-confirmation.component';
import { RegistrationComponent } from './registration/registration.component';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { SharedModule } from '@shared/shared.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    RegBasicInfoComponent,
    RegSecurityQuestionComponent,
    RegLoginComponent,
    RegConfirmationComponent,
    RegistrationComponent,
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    SharedModule,
    MatNativeDateModule,
  ],
  providers: [MatDatepickerModule],
})
export class RegistrationModule {}

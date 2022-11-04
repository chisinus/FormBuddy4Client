import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegBasicInfoComponent } from './components/reg-basic-info/reg-basic-info.component';
import { RegSecurityQuestionComponent } from './components/reg-security-question/reg-security-question.component';
import { RegLoginComponent } from './components/reg-login/reg-login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SharedModule } from '@shared/shared.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormBuddyDialogComponent } from '@shared/components/fb-dialog/fb-dialog.component';
import { StoreModule } from '@ngrx/store';
import { RegistrationStoreReducer } from './reg-store/reg-reducers';
import { RegistrationStoreService } from './services/reg-store.service';
import { EffectsModule } from '@ngrx/effects';
import { RegistrationStoreEffect } from './reg-store/reg-effects';
import { CodeTableService } from '@shared/services/code-table.service';
import { RegistrationService } from './services/registration.service';

@NgModule({
  declarations: [
    RegBasicInfoComponent,
    RegSecurityQuestionComponent,
    RegLoginComponent,
    RegistrationComponent,
    FormBuddyDialogComponent,
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    SharedModule,
    MatNativeDateModule,
    StoreModule.forFeature('registration', RegistrationStoreReducer),
    EffectsModule.forFeature([RegistrationStoreEffect]),
  ],
  providers: [
    MatDatepickerModule,
    RegistrationStoreService,
    RegistrationService,
    CodeTableService,
  ],
})
export class RegistrationModule {}

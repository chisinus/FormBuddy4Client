import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { SharedModule } from '@shared/shared.module';
import { CreateProfileComponent } from './stepper/create-profile.component';
import { StepOneComponent } from './stepper/step-one.component';
import { StepThreeComponent } from './stepper/step-three.component';
import { StepTwoComponent } from './stepper/step-two.component';

@NgModule({
  declarations: [
    CreateProfileComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
  ],
  imports: [CommonModule, TestRoutingModule, SharedModule],
})
export class TestModule {}

import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateProfileComponent } from './create-profile.component';

@Component({
  selector: 'step-two-component',
  templateUrl: './step-two.component.html',
})
export class StepTwoComponent {
  frmStepTwo: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.frmStepTwo = this.formBuilder.group({
      address: ['', Validators.required],
    });
  }

  ngOnInit() {}
}

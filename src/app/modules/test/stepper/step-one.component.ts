import { Component, Output, EventEmitter, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { CreateProfileComponent } from './create-profile.component';

@Component({
  selector: 'step-one-component',
  templateUrl: './step-one.component.html',
})
export class StepOneComponent {
  frmStepOne: FormGroup;

  constructor(private formBuilder: NonNullableFormBuilder) {
    this.frmStepOne = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  ngOnInit() {}
}

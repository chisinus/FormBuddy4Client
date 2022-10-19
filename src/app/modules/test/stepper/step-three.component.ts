import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateProfileComponent } from './create-profile.component';

@Component({
  selector: 'step-three-component',
  templateUrl: './step-three.component.html',
})
export class StepThreeComponent {
  frmStepThree: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.frmStepThree = this.formBuilder.group({
      age: ['', Validators.required],
    });
  }

  ngOnInit() {}
}

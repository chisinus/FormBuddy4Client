import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Gender } from '@shared/models/code-tables';

@Component({
  selector: 'app-reg-basic-info',
  templateUrl: './reg-basic-info.component.html',
  styleUrls: ['./reg-basic-info.component.scss'],
})
export class RegBasicInfoComponent implements OnInit {
  genders: Gender[] = [
    {
      id: 1,
      description: 'Male',
    },
    {
      id: 2,
      description: 'Female',
    },
    {
      id: 99,
      description: 'Prefer not to answer',
    },
  ];

  form: FormGroup = this.formBuilder.group({
    firstname: ['', [Validators.required, Validators.maxLength(30)]],
    lastname: ['', [Validators.required, Validators.maxLength(30)]],
    dob: ['', Validators.required],
    gender: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.maxLength(30)]],
      lastname: ['', [Validators.required, Validators.maxLength(30)]],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.maxLength(30)]],
      lastname: ['', [Validators.required, Validators.maxLength(30)]],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  onGenderChange(gender: Gender): void {
    console.log('>>> ', gender);
    this.genderControl.setValue(gender);
  }

  // form control
  get genderControl() {
    return this.form?.controls['gender'];
  }
}

import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Gender } from '@shared/models/code-tables';
import { Observable, of, Subscription } from 'rxjs';
import { RegistrationStoreService } from '../services/reg-store.service';

@Component({
  selector: 'app-reg-basic-info',
  templateUrl: './reg-basic-info.component.html',
  styleUrls: ['./reg-basic-info.component.scss'],
})
export class RegBasicInfoComponent implements OnInit, OnDestroy {
  genders?: Gender[];
  subscription: Subscription = new Subscription();

  form: FormGroup = this.formBuilder.group({
    firstname: ['', [Validators.required, Validators.maxLength(30)]],
    lastname: ['', [Validators.required, Validators.maxLength(30)]],
    dob: ['', Validators.required],
    gender: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private storeService: RegistrationStoreService
  ) {
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

    this.subscription.add(
      this.storeService.RegistrationState$.subscribe((state) => {
        this.genders = state.genders;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onGenderChange(gender: Gender): void {
    this.genderControl.setValue(gender);
  }

  // form control
  get genderControl() {
    return this.form?.controls['gender'];
  }
}

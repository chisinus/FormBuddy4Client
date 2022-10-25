import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegBasicInfoComponent } from '../reg-basic-info/reg-basic-info.component';
import { RegLoginComponent } from '../reg-login/reg-login.component';
import { RegSecurityQuestionComponent } from '../reg-security-question/reg-security-question.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  @ViewChild('RegBasicInfoComponent', { static: true })
  regBasicInfoComponent!: RegBasicInfoComponent;
  @ViewChild('RegSecurityQuestionComponent', { static: true })
  regSecurityQuestionComponent!: RegSecurityQuestionComponent;
  @ViewChild('RegLoginComponent', { static: true })
  regLoginComponent!: RegLoginComponent;

  state: string = '';
  completed: boolean = false;

  constructor(private _formBuilder: FormBuilder) {}

  //get
  get basicInfoForm() {
    return this.regBasicInfoComponent?.form as FormGroup;
  }

  get securityQuestionForm() {
    return this.regSecurityQuestionComponent?.form as FormGroup;
  }

  get loginForm() {
    return this.regLoginComponent?.form as FormGroup;
  }
}

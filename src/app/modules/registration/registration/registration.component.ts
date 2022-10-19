import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegBasicInfoComponent } from '../reg-basic-info/reg-basic-info.component';
import { RegConfirmationComponent } from '../reg-confirmation/reg-confirmation.component';
import { RegLoginComponent } from '../reg-login/reg-login.component';
import { RegSecurityQuestionComponent } from '../reg-security-question/reg-security-question.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  @ViewChild('RegBasicInfoComponent')
  regBasicInfoComponent!: RegBasicInfoComponent;
  @ViewChild('RegSecurityQuestionComponent')
  regSecurityQuestionComponent!: RegSecurityQuestionComponent;
  @ViewChild('RegLoginComponent') regLoginComponent!: RegLoginComponent;
  @ViewChild('RegConfirmationComponent')
  regConfirmationComponent!: RegConfirmationComponent;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}

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

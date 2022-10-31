import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SecurityQuestion } from '@shared/models/code-tables';
import { Subscription } from 'rxjs';
import { RegistrationStoreService } from '../services/reg-store.service';

@Component({
  selector: 'app-reg-security-question',
  templateUrl: './reg-security-question.component.html',
  styleUrls: ['./reg-security-question.component.scss'],
})
export class RegSecurityQuestionComponent implements OnInit {
  securityQuestions?: SecurityQuestion[];
  subscription: Subscription = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private storeService: RegistrationStoreService
  ) {}

  public form: FormGroup = this.formBuilder.group({
    securityQuestion: [0, Validators.required],
    answer: ['', Validators.required],
  });

  ngOnInit(): void {
    this.storeService.RegistrationState$.subscribe((state) => {
      this.securityQuestions = state.securityQuestions;
    });
  }
}

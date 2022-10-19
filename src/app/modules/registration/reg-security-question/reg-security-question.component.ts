import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reg-security-question',
  templateUrl: './reg-security-question.component.html',
  styleUrls: ['./reg-security-question.component.scss'],
})
export class RegSecurityQuestionComponent implements OnInit {
  securityQuestions: SecurityQuestion[] = [
    {
      id: 1,
    },
  ];

  constructor(private formBuilder: FormBuilder) {}

  public form: FormGroup = this.formBuilder.group({
    securityQuestionId: [0, Validators.required],
    answer: ['', Validators.required],
  });
  ngOnInit(): void {}
}

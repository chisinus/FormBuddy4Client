import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SecurityQuestion } from '@shared/models/code-tables';

@Component({
  selector: 'app-reg-security-question',
  templateUrl: './reg-security-question.component.html',
  styleUrls: ['./reg-security-question.component.scss'],
})
export class RegSecurityQuestionComponent implements OnInit {
  securityQuestions: SecurityQuestion[] = [
    {
      id: 1,
      description: 'security question 1',
    },
    {
      id: 2,
      description: 'security question 2',
    },
    {
      id: 3,
      description: 'security question 3',
    },
  ];

  constructor(private formBuilder: FormBuilder) {}

  public form: FormGroup = this.formBuilder.group({
    securityQuestion: [0, Validators.required],
    answer: ['', Validators.required],
  });
  ngOnInit(): void {}
}

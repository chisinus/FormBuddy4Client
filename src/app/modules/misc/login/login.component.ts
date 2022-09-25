import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  showPassword: boolean = false;
  error: string = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  submit(): void {}

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}

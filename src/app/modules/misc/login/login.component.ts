import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: UntypedFormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  showPassword: boolean = false;
  error: string = '';

  constructor(
    private formBuilder: UntypedFormBuilder,
    private snakebar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  submit(): void {}

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  login(): void {
    let sb = this.snakebar.open('Failed', 'Close', {
      panelClass: ['snackbar-failed'],
    });
    sb.onAction().subscribe(() => {
      sb.dismiss();
    });
  }
}

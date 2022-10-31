import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormBuddyDialogComponent } from '@shared/components/fb-dialog/fb-dialog.component';
import { DialogParameter } from '@shared/models/dialog-parameter';

@Component({
  selector: 'app-reg-login',
  templateUrl: './reg-login.component.html',
  styleUrls: ['./reg-login.component.scss'],
})
export class RegLoginComponent {
  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private router: Router
  ) {}

  public form: FormGroup = this.formBuilder.group({
    username: [
      '',
      [Validators.required, Validators.minLength(4), this.usernameValidator()],
    ],
    passwordGroup: this.formBuilder.group(
      {
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],
      },
      { validator: [this.passwordValidator()] }
    ),
  });

  usernameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const nameRegex: RegExp = new RegExp('^[a-zA-Z0-9]{4,30}$');

      const value = control.value;
      if (control.value && control.value.length > 3) {
        if (!nameRegex.test(value))
          return {
            invalidFormat: true,
          };
      }

      return null;
    };
  }

  passwordValidator(): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const password = group.get('password')?.value;
      const confirmPassword = group.get('confirmPassword')?.value;

      if (
        password &&
        password.length > 1 &&
        confirmPassword &&
        confirmPassword.length > 1
      ) {
        if (password !== confirmPassword) return { mismatch: true };
      }

      return null;
    };
  }

  onSubmit() {
    const param: DialogParameter = {
      messageType: 'Success',
      title: 'Great!',
      message: 'You have created an account successfully.',
      showCancel: false,
      showOK: true,
      okReturnValue: true,
    };
    const dialogRef = this.dialog.open(FormBuddyDialogComponent, {
      width: '600px',
      height: '400px',
      data: param,
    });

    dialogRef.afterClosed().subscribe((redirect: boolean) => {
      if (redirect) {
        this.router.navigateByUrl('/');
      }
    });
  }

  //get controls
  get usernameControl(): FormControl {
    return this.form.controls['username'] as FormControl;
  }

  get passwordGroupControl(): FormControl {
    return this.form.controls['passwordGroup'] as FormControl;
  }

  get passwordControl(): FormControl {
    return this.form.controls['passwordGroup'].get('password') as FormControl;
  }

  get confirmPasswordControl(): FormControl {
    return this.form.controls['passwordGroup'].get(
      'confirmPassword'
    ) as FormControl;
  }
}

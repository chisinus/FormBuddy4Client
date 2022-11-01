import { Component, Input, OnDestroy, OnInit } from '@angular/core';
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
import { Subscription } from 'rxjs';
import { RegBasicInfoComponent } from '../reg-basic-info/reg-basic-info.component';
import { RegSecurityQuestionComponent } from '../reg-security-question/reg-security-question.component';
import { RegistrationService } from '../services/registration.service';
import { UserFull } from '../models/user-full';

@Component({
  selector: 'reg-login',
  templateUrl: './reg-login.component.html',
  styleUrls: ['./reg-login.component.scss'],
})
export class RegLoginComponent implements OnDestroy {
  @Input() regBasicInfoComponent!: RegBasicInfoComponent;
  @Input() regSecurityQuestionComponent!: RegSecurityQuestionComponent;

  subscription: Subscription = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private router: Router,
    private regService: RegistrationService
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public form: FormGroup = this.formBuilder.group({
    username: [
      'user11',
      [Validators.required, Validators.minLength(4), this.usernameValidator()],
    ],
    passwordGroup: this.formBuilder.group(
      {
        password: ['aaaaaa$A', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['aaaaaa$A', Validators.required],
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
    const user: UserFull = {
      firstname: this.regBasicInfoComponent.form.controls['firstname'].value,
      lastname: this.regBasicInfoComponent.form.controls['lastname'].value,
      username: this.usernameControl.value,
      password: this.passwordControl.value,
      genderId: this.regBasicInfoComponent.genderControl.value.id,
      dob: new Date(
        this.regBasicInfoComponent.form.controls['dob'].value
      ).toISOString(),
      securityQuestionId:
        this.regSecurityQuestionComponent.form.controls['securityQuestion']
          .value.id,
      securityQuestionAnswer:
        this.regSecurityQuestionComponent.form.controls['answer'].value,
    };
    console.log(user);

    this.subscription.add(
      this.regService.createAccount(user).subscribe({
        next: () => this.showSuccessDialog(),
        error: (error) => this.showErrorDialog(error),
      })
    );
  }

  private showSuccessDialog(): void {
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

  private showErrorDialog(error: any): void {
    const param: DialogParameter = {
      messageType: 'Error',
      title: 'Oops!',
      message:
        error.status === 409
          ? 'The username has been taken.'
          : 'An error occurred while submitting data.',
      showCancel: false,
      showOK: true,
      okReturnValue: true,
    };

    this.dialog.open(FormBuddyDialogComponent, {
      width: '600px',
      height: '400px',
      data: param,
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

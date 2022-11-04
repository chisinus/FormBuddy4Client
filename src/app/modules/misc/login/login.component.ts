import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormControl,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserStoreService } from '../../user/services/user-store.service';
import { UserService } from '../../user/services/user.service';
import { UserState } from '../../user/user-store/user-state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
  form: UntypedFormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  showPassword: boolean = false;
  error: string = '';
  subscription: Subscription = new Subscription();

  constructor(
    private formBuilder: UntypedFormBuilder,
    private storeService: UserStoreService,
    private snakebar: MatSnackBar,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  login(): void {
    this.storeService.login(
      this.usernameControl.value,
      this.passwordControl.value
    );

    this.storeService.userState$.subscribe((state: UserState) => {
      if (state.loading) return;

      if (state.user.username) {
        this.router.navigate(['user/userhome']);
      } else {
        this.showLoginError();
      }
    });
  }

  showLoginError(): void {
    let sb = this.snakebar.open(
      'Your user name and password do not match.',
      'Close',
      {
        panelClass: ['snackbar-failed'],
      }
    );

    sb.onAction().subscribe(() => {
      sb.dismiss();
    });
  }

  // get
  get usernameControl(): FormControl {
    return this.form.controls['username'] as FormControl;
  }

  get passwordControl(): FormControl {
    return this.form.controls['password'] as FormControl;
  }
}

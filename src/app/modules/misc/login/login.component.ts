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

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
  form: UntypedFormGroup = this.formBuilder.group({
    username: ['xiajun', Validators.required],
    password: ['1', Validators.required],
  });
  showPassword: boolean = false;
  error: string = '';
  subscription: Subscription = new Subscription();

  constructor(
    private formBuilder: UntypedFormBuilder,
    private storeService: UserStoreService,
    private snakebar: MatSnackBar,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  login(): void {
    this.userService
      .login(this.usernameControl.value, this.passwordControl.value)
      .subscribe((user) => {
        console.log(user);
      });

    // this.storeService.login(
    //   this.usernameControl.value,
    //   this.passwordControl.value
    // );

    // this.subscription.add(
    //   this.storeService.userState$.subscribe((state) => {
    //     if (state.user.firstname !== '') {
    //       this.router.navigate(['userhome']);
    //     } else {
    //       let sb = this.snakebar.open('Failed', 'Close', {
    //         panelClass: ['snackbar-failed'],
    //       });

    //       sb.onAction().subscribe(() => {
    //         sb.dismiss();
    //       });
    //     }
    //   })
    // );
  }

  // get
  get usernameControl(): FormControl {
    return this.form.controls['username'] as FormControl;
  }

  get passwordControl(): FormControl {
    return this.form.controls['password'] as FormControl;
  }
}

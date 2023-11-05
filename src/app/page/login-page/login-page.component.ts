import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AuthService, UserCreationModel, UserForgotPassword, UserLoginModel} from "../../share/service/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";

export type formStateType = 'login' | 'register' | 'forgot-password';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;
  formState: formStateType = 'login';
  isSubmitting: boolean = false;

  constructor(
    private authService: AuthService,
    private matSnackBar: MatSnackBar,
    private matDialog: MatDialog,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    this.loginForm = new FormGroup({
      firstName: new FormControl('', []),
      lastName: new FormControl('', []),
      phone: new FormControl('', []),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', []),
    });
  }

  ngOnInit(): void {
  }

  onChangeFormState(state: formStateType): void {

    if (this.isSubmitting) {
      return;
    }

    this.formState = state;
    this.loginForm.reset();

    this.loginForm.removeControl('firstName');
    this.loginForm.removeControl('lastName');
    this.loginForm.removeControl('phone');
    this.loginForm.removeControl('username');
    this.loginForm.removeControl('password');
    this.loginForm.removeControl('confirmPassword');

    if (state === 'login') {
      this.loginForm.addControl('username', new FormControl('', [Validators.required]));
      this.loginForm.addControl('password', new FormControl('', [Validators.required]));
    }

    if (state === 'forgot-password') {
      this.loginForm.addControl('username', new FormControl('', [Validators.required]));
    }

    if (state === 'register') {
      this.loginForm.addControl('firstName', new FormControl('', [Validators.required]));
      this.loginForm.addControl('lastName', new FormControl('', []));
      this.loginForm.addControl('phone', new FormControl('', []));
      this.loginForm.addControl('username', new FormControl('', [Validators.required]));
      this.loginForm.addControl('password', new FormControl('', [Validators.required]));
      this.loginForm.addControl('confirmPassword', new FormControl('', [Validators.required]));
    }

    this.changeDetectorRef.detectChanges()
  }

  onSubmit(): void {

    if (this.loginForm.invalid) {
      this.matSnackBar.open('Please fill all the required fields!', 'Ok');
      return;
    }

    this.isSubmitting = true;
    this.loginForm.disable();

    if (this.formState === 'login') {

      const userLogin: UserLoginModel | undefined = {
        email: this.loginForm.get('username')?.value.trim(),
        password: this.loginForm.get('password')?.value.trim(),
      }

      this.authService.onLoginUser(userLogin).subscribe((response) => {
        console.log('userLogin', response);
        localStorage.setItem('USER_DATA', JSON.stringify(response.data));
        this.isSubmitting = false;
        this.matSnackBar.open('Login Success');
        this.matDialog.closeAll();
        this.loginForm.enable();
      }, error => {
        this.isSubmitting = false;
        this.loginForm.enable();
        this.matSnackBar.open(error.errors?.message ?? 'Unable to login!', 'Okay');
        throw Error(error);
      });
    }

    if (this.formState === 'register') {

      if (this.loginForm.get('password')?.value.trim() !== this.loginForm.get('confirmPassword')?.value.trim()) {
        this.matSnackBar.open('Password and Confirm Password must be same!', 'Okay');
        return;
      }

      const userRegister: UserCreationModel | undefined = {
        first_name: this.loginForm.get('firstName')?.value.trim(),
        last_name: this.loginForm.get('lastName')?.value.trim(),
        phone_number: this.loginForm.get('phone')?.value.trim(),
        email: this.loginForm.get('username')?.value.trim(),
        password: this.loginForm.get('password')?.value.trim(),
        password_confirmation: this.loginForm.get('confirmPassword')?.value.trim(),
      }

      this.authService.onRegisterUser(userRegister).subscribe((response) => {
        console.log('userRegister', response);
        this.isSubmitting = false;
        this.matSnackBar.open('Register Success');
        this.matDialog.closeAll();
        this.loginForm.enable();
      }, error => {
        this.isSubmitting = false;
        this.loginForm.enable();
        this.matSnackBar.open(error.errors?.message ?? 'Unable to register!', 'Okay');
        throw Error(error);
      });
    }

    if (this.formState === 'forgot-password') {

      const userResetPassword: UserForgotPassword | undefined = {
        email: this.loginForm.get('username')?.value.trim(),
      }

      this.authService.onForgotPasswordUser(userResetPassword).subscribe((response) => {
        console.log('userResetPassword', response);
        this.isSubmitting = false;
        this.matSnackBar.open('Password reset successfully');
        this.matDialog.closeAll();
        this.loginForm.enable();
      }, error => {
        this.isSubmitting = false;
        this.loginForm.enable();
        this.matSnackBar.open(error.errors?.message ?? 'Unable to reset password!', 'Okay');
        throw Error(error);
      });
    }

  }
}

import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CustomValidators } from 'src/app/user/helpers/custom-validators';
import { AccountService } from 'src/app/user/services/account.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent implements OnInit {
  signUpForm!: FormGroup;
  passwordVisible: boolean = false;
  confirmPasswordVisible: boolean = false;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.signUpForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        CustomValidators.passwordValidator,
      ]),
      confirmPassword: new FormControl(null, [
        Validators.required,
        this.confirmationValidator.bind(this),
      ]),
    });
  }

  get firstName(): FormControl {
    return this.signUpForm.get('firstName') as FormControl;
  }
  get lastName(): FormControl {
    return this.signUpForm.get('lastName') as FormControl;
  }
  get email(): FormControl {
    return this.signUpForm.get('email') as FormControl;
  }
  get password(): FormControl {
    return this.signUpForm.get('password') as FormControl;
  }
  get confirmPassword(): FormControl {
    return this.signUpForm.get('confirmPassword') as FormControl;
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.signUpForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  SubmitForm(): void {
    this.accountService
      .signup(
        this.firstName.value,
        this.lastName.value,
        this.email.value,
        this.password.value
      )
      .subscribe(
        (response) => {
          this.router.navigate(['user', 'login']);
          this.message.info("Your account was created! Don't forget to login!");
        },
        (error) => {
          this.message.error('The email address is already used!');
        }
      );
  }
}

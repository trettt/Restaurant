import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/user/helpers/custom-validators';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent implements OnInit {
  signUpForm!: FormGroup;
  passwordVisible: boolean = false;
  confirmPasswordVisible: boolean = false;

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
    console.log('aaa');
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login-fields',
  templateUrl: './login-fields.component.html',
  styleUrls: ['./login-fields.component.scss'],
})
export class LoginFieldsComponent {
  email: string = '';
  password: string = '';
  checked: boolean = false;

  passwordVisible = false;
  errorMessage: string = '';
  enabledButton: boolean = false;

  constructor(private accountService: AccountService, private router: Router) {}

  loginButton(): void {
    this.accountService.login(this.email, this.password).subscribe(
      (response) => {
        const token = response.token;
        if (this.checked) {
          localStorage.setItem('userToken', token);
        } else {
          sessionStorage.setItem('userToken', token);
        }
        this.router.navigate(['user', 'view-menu']);
      },
      () => {
        this.errorMessage = 'The email or password are incorrect:(';
      }
    );
  }

  checkInputFilled(): void {
    this.enabledButton =
      this.email.trim() !== '' && this.password.trim() !== '';
  }
}

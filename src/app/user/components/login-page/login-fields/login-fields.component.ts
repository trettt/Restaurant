import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/user/services/login.service';

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

  constructor(private loginService: LoginService, private router: Router) {}

  loginButton(): void {
    this.loginService.login(this.email, this.password).subscribe(
      (response) => {
        const token = response.token;
        if (this.checked) {
          localStorage.setItem('token', token);
        } else {
          sessionStorage.setItem('token', token);
        }
        this.router.navigate(['user', 'view-menu']);
      },
      (error) => {
        this.errorMessage = 'The email or password are incorrect:(';
      }
    );
  }
}

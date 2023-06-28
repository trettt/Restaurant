import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/admin/services/account.service';

@Component({
  selector: 'app-login-fields',
  templateUrl: './login-fields.component.html',
  styleUrls: ['./login-fields.component.scss']
})
export class LoginFieldsComponent {
  email: string = '';
  password: string = '';
  checked: boolean = false;
  passwordVisible = false;
  errorMessage: string = '';
  enabledButton: boolean = false;

  constructor(private accountService:AccountService, private router: Router) {}

  checkInputFilled(): void {
    this.enabledButton =
      this.email.trim() !== '' && this.password.trim() !== '';
  }

  loginButton(): void {
    this.accountService.login(this.email, this.password).subscribe(
      (response) => {
        const token = response.token;
        if (this.checked) {
          localStorage.setItem('adminToken', token);
        } else {
          sessionStorage.setItem('adminToken', token);
        }
        this.router.navigate(['admin', 'table-view']);
      },
      (error) => {
        this.errorMessage = 'The email or password are incorrect or you don\'t have an admin account.';
      }
    );
  }
}

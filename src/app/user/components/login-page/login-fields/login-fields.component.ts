import { Component } from '@angular/core';

@Component({
  selector: 'app-login-fields',
  templateUrl: './login-fields.component.html',
  styleUrls: ['./login-fields.component.scss'],
})
export class LoginFieldsComponent {
  value?: string;
  passwordVisible = false;
  password?: string;
  checked:boolean = false;
}

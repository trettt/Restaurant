import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginPageComponent } from './components/login-page/login-page.component';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { LoginFieldsComponent } from './components/login-fields/login-fields.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    LoginPageComponent,
    LoginFieldsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,



    NzLayoutModule,
    NzInputModule,
    NzIconModule,
    NzButtonModule
  ]
})
export class UserModule { }

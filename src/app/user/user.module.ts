import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginFieldsComponent } from './components/login-page/login-fields/login-fields.component';
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page.component';
import { SignUpFormComponent } from './components/sign-up-page/sign-up-form/sign-up-form.component';
import { ViewMenuPageComponent } from './components/view-menu-page/view-menu-page.component';
import { ViewMenuHeaderComponent } from './components/view-menu-page/view-menu-header/view-menu-header.component';
import { DishComponent } from './components/view-menu-page/dish/dish.component';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  declarations: [
    LoginPageComponent,
    LoginFieldsComponent,
    SignUpPageComponent,
    SignUpFormComponent,
    ViewMenuPageComponent,
    ViewMenuHeaderComponent,
    DishComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    NzLayoutModule,
    NzInputModule,
    NzIconModule,
    NzButtonModule,
    NzCheckboxModule,
    NzFormModule,
    NzCardModule,
    NzModalModule,
    NzMessageModule,
  ],
})
export class UserModule {}

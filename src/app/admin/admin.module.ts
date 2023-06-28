import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginFieldsComponent } from './components/login-page/login-fields/login-fields.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { TableViewComponent } from './components/table-view/table-view.component';
import { TableViewHeaderComponent } from './components/table-view/table-view-header/table-view-header.component';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTableModule } from 'ng-zorro-antd/table';
import { AddRecipeComponent } from './components/table-view/add-recipe/add-recipe.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';

@NgModule({
  declarations: [
    LoginPageComponent,
    LoginFieldsComponent,
    TableViewComponent,
    TableViewHeaderComponent,
    AddRecipeComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    NzLayoutModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
    NzButtonModule,
    NzCheckboxModule,
    NzTableModule,
    NzPageHeaderModule,
    NzModalModule,
    NzSelectModule,
  ],
})
export class AdminModule {}

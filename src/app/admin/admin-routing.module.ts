import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { TableViewComponent } from './components/table-view/table-view.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginPageComponent
  },
  {
    path:'table-view',
    component:TableViewComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

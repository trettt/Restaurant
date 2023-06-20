import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginPageComponent
  },
  //{
  //   path:'table-view',
  //   component:TableViewComponent
  // }

  //aici le decomentezi si modifici in momentul in care vrei sa folosesti ruta
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'sign-up',
    component: SignUpPageComponent,
  },
  // {
  //   path:'view-menu',
  //   component:ViewMenuPageComponent
  // }
  //decomentezi cand ai componenta respectiva
  //componenta o pui in folderul components de la user
  //si componentele din componenta respectiva (gen chestia cu first si last name si textul cu meniul si asa)
  //le pui in componenta initiala
  // gen ai view-menu-page ca si componenta principala
  // iar in ea sa zicem ca ai header (nume+ prenume), grid (unde sunt mancarurile) si tot asa
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}

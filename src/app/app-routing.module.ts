import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'login/user',
        pathMatch: 'full'
      },
      {
        path: 'login/user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      }
    ]
  },
  // Alte rute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

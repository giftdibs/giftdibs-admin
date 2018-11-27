import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'account/login',
    loadChildren: 'src/app/features/login/login.module#LoginModule'
  },
  {
    path: 'users',
    loadChildren: 'src/app/features/users/users.module#UsersModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

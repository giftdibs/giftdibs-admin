import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/authorization.guard';

const routes: Routes = [
  {
    path: 'account/login',
    loadChildren: 'src/app/features/login/login.module#LoginModule'
  },
  {
    path: 'users',
    loadChildren: 'src/app/features/users/users.module#UsersModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'gifts',
    loadChildren: 'src/app/features/gifts/gifts.module#GiftsModule',
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})
export class AppRoutingModule { }

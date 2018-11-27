import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  RouterModule
} from '@angular/router';

import { ConfirmModule, AlertModule, IconModule } from '@giftdibs/ux';

import {
  UsersComponent
} from './users.component';

import { UsersRoutingModule } from './users-routing.module';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    AlertModule,
    CommonModule,
    ConfirmModule,
    IconModule,
    RouterModule,
    UsersRoutingModule
  ],
  providers: [
    UserService
  ]
})
export class UsersModule { }

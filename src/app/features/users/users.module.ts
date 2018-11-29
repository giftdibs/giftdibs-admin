import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  AlertModule,
  ConfirmModule,
  DropdownMenuModule,
  IconModule
} from '@giftdibs/ux';

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
    DropdownMenuModule,
    IconModule,
    UsersRoutingModule
  ],
  providers: [
    UserService
  ]
})
export class UsersModule { }

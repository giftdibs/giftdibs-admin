import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import {
  RouterModule
} from '@angular/router';

import {
  AlertModule,
  FormFieldModule,
  PasswordViewerModule,
  WaitModule
} from '@giftdibs/ux';

import {
  LoginComponent
} from './login.component';

import { AccountService } from './account.service';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    AlertModule,
    CommonModule,
    FormFieldModule,
    FormsModule,
    LoginRoutingModule,
    PasswordViewerModule,
    ReactiveFormsModule,
    RouterModule,
    WaitModule
  ],
  providers: [
    AccountService
  ]
})
export class LoginModule { }

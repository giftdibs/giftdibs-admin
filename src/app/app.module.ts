import {
  NgModule
} from '@angular/core';

import {
  BrowserModule
} from '@angular/platform-browser';

import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';

import {
  SessionModule
} from '@giftdibs/session';

import {
  environment
} from 'src/environments/environment';

import { NavbarModule } from './shared/navbar/navbar.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from '@giftdibs/ux';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AlertModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NavbarModule,
    SessionModule.forRoot(environment.apiUrl)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

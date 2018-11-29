import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import { GiftsRoutingModule } from './gifts-routing.module';
import { GiftsComponent } from './gifts.component';
import { GiftsService } from './gifts.service';
import { ThumbnailModule } from '@giftdibs/ux';

@NgModule({
  declarations: [
    GiftsComponent
  ],
  imports: [
    CommonModule,
    GiftsRoutingModule,
    ThumbnailModule
  ],
  providers: [
    GiftsService
  ]
})
export class GiftsModule { }

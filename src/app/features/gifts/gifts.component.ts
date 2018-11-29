import { Component, OnInit } from '@angular/core';
import { GiftsService } from './gifts.service';
import { Gift } from './gift';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.scss']
})
export class GiftsComponent implements OnInit {
  public gifts: Gift[];

  constructor(
    private giftService: GiftsService
  ) { }

  public ngOnInit(): void {
    this.giftService.getAll().subscribe((gifts) => {
      this.gifts = gifts;
    });
  }
}

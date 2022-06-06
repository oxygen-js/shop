import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss']
})
export class ShopCardComponent {

  @Input() id: string = '';
  @Input() title: string = '';
  @Input() imgUrl: string = '';
  @Input() price: number = 0;
  @Input() description: string = '';


  constructor(
    private _router: Router
  ) {
  }

  go(): void {
    this._router.navigate([`/shop/${this.id}`]).then(() => null);
  }

  add(): void {

  }

}

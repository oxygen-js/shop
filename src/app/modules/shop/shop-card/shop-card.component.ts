import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss']
})
export class ShopCardComponent implements OnInit {

  @Input() id: string = '';
  @Input() title: string = '';
  @Input() imgUrl: string = '';
  @Input() price: number = 0;
  @Input() description: string = '';

 
  constructor() { }

  ngOnInit(): void {
  }

}

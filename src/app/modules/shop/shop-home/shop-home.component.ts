import { Component, OnInit } from '@angular/core';
import { ProductDto } from '../models/product.dto';

@Component({
  selector: 'app-shop-home',
  templateUrl: './shop-home.component.html',
  styleUrls: ['./shop-home.component.scss']
})
export class ShopHomeComponent implements OnInit {

  get mokeData(): ProductDto[] {
    return [
      {
        id: '1',
        title: "Product #1",
        description: "Proin auctor urna nec dictum sollicitudin.",
        price: 1000.10,
        imgUrl: 'https://100fon.ru/upload/iblock/55f/55f6aca5f3e8f08d36a9d57b59256371.jpg'
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}

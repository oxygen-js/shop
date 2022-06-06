import { Component, OnInit } from '@angular/core';
import { ProductDto } from '../models/product.dto';

@Component({
  selector: 'app-shop-home',
  templateUrl: './shop-home.component.html',
  styleUrls: ['./shop-home.component.scss']
})
export class ShopHomeComponent implements OnInit {

  get mokeData(): ProductDto[] {
    const result = [];
    for (let i = 1; i < 40; i++) {
      result.push(
        {
          id: `${i}`,
          title: `Product #${i}`,
          description: "Proin auctor urna nec dictum sollicitudin.",
          price: +(1000.10 * i).toFixed(2),
          imgUrl: 'https://100fon.ru/upload/iblock/55f/55f6aca5f3e8f08d36a9d57b59256371.jpg'
        }
      );
    }
    return result;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

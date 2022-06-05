import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopHomeComponent } from './shop-home/shop-home.component';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopCardComponent } from './shop-card/shop-card.component';



@NgModule({
  declarations: [
    ShopHomeComponent,
    ShopCardComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }

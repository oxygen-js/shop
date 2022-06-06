import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopHomeComponent } from './shop-home/shop-home.component';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopCardComponent } from './shop-card/shop-card.component';
import { ShopItemComponent } from './shop-item/shop-item.component';
import { StoreModule } from "@ngrx/store";
import { reducer } from "./store/shop.reducer";



@NgModule({
  declarations: [
    ShopHomeComponent,
    ShopCardComponent,
    ShopItemComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    StoreModule.forFeature('shop', reducer)
  ]
})
export class ShopModule { }

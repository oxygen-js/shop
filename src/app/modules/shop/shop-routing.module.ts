import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopHomeComponent } from './shop-home/shop-home.component';
import { ShopItemComponent } from "./shop-item/shop-item.component";

const routes: Routes = [
  { path: '', component: ShopHomeComponent, pathMatch: 'full' },
  { path: ':id', component: ShopItemComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}

import {createAction, props} from "@ngrx/store";
import {ProductDto} from "../models/product.dto";

export enum ShopActions {
  LOAD = '[shop] load product',
  LOADING = '[shop] loading product',
  ADD = '[shop] add product',
}

export const load = createAction(ShopActions.LOAD);
export const loaded = createAction(ShopActions.LOADING, props<{ data: ProductDto[] }>());
export const add = createAction(ShopActions.ADD);

import {Action, createReducer, on} from "@ngrx/store";
import {load, loaded} from "./shop.actions";
import {ShopState} from "./shop.state";

export const initialState = (): ShopState => ({
  loading: false,
  initialized: false,
  value: []
})

export const shopReducer = createReducer<ShopState, Action>(
  initialState(),
  on(load, (state) => ({
    ...state,
    loading: true,
    initialized: false
  })),
  on(loaded, (state, props) => ({
    loading: false,
    initialized: true,
    value: props.data
  })),
);

export function reducer(state: ShopState, action: Action): ShopState {
  return shopReducer(state, action)
}

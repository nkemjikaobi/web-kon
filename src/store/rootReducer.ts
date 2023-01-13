import { AnyAction, CombinedState, combineReducers, Reducer } from "@reduxjs/toolkit";

import auth, { AuthState } from "./auth";
import order, { OrderState } from "./order";
import product, { ProductState } from "./product";

export interface AppState {
  auth: AuthState;
  product: ProductState;
  order: OrderState;
}

const rootReducer: Reducer<CombinedState<AppState>, AnyAction> = combineReducers({
  auth,
  product,
  order,
});

export default rootReducer;

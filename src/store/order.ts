import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { OrderProps } from "@dto/Order/OrderProps";

export interface OrderState {
  currentOrder: OrderProps | null;
  orders: Array<OrderProps>;
  loading: boolean;
}

const initialState: OrderState = {
  currentOrder: null,
  orders: [],
  loading: true,
};

const OrderState = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrderToInitialState: () => ({ ...initialState }),

    /**
     * Function to set the active order
     * Feell free to change the type of action to a suitable Type
     * @param {OrderState} state
     * @param {any} action
     */
    setCurrentOrder: (state: OrderState, action: any) => {
      state.currentOrder = action.payload;
    },

    /**
     * Function to set all products
     * Feell free to change the type of action to a suitable Type
     * @param {OrderState} state
     * @param {any} action
     */
    setAllOrder: (state: OrderState, action: PayloadAction<Array<OrderProps>>) => {
      state.orders = action.payload;
    },

    /**
     * Function to set loading state
     * Feell free to change the type of action to a suitable Type
     * @param {OrderState} state
     * @param {any} action
     */
    setLoading: (state: OrderState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setOrderToInitialState, setCurrentOrder, setAllOrder, setLoading } = OrderState.actions;

export default OrderState.reducer;

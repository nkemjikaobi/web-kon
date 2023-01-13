import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ProductProps } from "@dto/Product/ProductProps";

export interface ProductState {
  currentProduct: ProductProps | null;
  products: Array<ProductProps>;
  loading: boolean;
}

const initialState: ProductState = {
  currentProduct: null,
  products: [],
  loading: true,
};

const productState = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductToInitialState: () => ({ ...initialState }),

    /**
     * Function to set the active product
     * Feell free to change the type of action to a suitable Type
     * @param {ProductState} state
     * @param {any} action
     */
    setCurrentProduct: (state: ProductState, action: any) => {
      state.currentProduct = action.payload;
    },

    /**
     * Function to set all products
     * Feell free to change the type of action to a suitable Type
     * @param {ProductState} state
     * @param {any} action
     */
    setAllProducts: (state: ProductState, action: any) => {
      state.products = action.payload;
    },

    /**
     * Function to set loading state
     * Feell free to change the type of action to a suitable Type
     * @param {ProductState} state
     * @param {any} action
     */
    setLoading: (state: ProductState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setProductToInitialState, setCurrentProduct, setAllProducts, setLoading } = productState.actions;

export default productState.reducer;

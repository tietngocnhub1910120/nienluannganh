import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    product: {},
    totalProduct: null,
  },
  reducers: {
    getProductsAction: (state, actions) => {
      state.products = actions.payload.products;
      state.totalProduct = actions.payload.countProducts;
    },
    getProductAction: (state, actions) => {
      state.product = actions.payload.product;
    },
    removeProductAction: (state, actions) => {
      state.products = state.products.filter(
        (product) => product._id !== actions.payload
      );
    },
    addProductAction: (state, actions) => {
      state.products = [...state.products, actions.payload.newProduct];
    },
  },
});

export const {
  getProductsAction,
  getProductAction,
  addProductAction,
  removeProductAction,
} = productSlice.actions;
export default productSlice.reducer;

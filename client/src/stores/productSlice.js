import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    product: {},
  },
  reducers: {
    getProductsAction: (state, actions) => {
      state.products = actions.payload.products;
    },
    getProductAction: (state, actions) => {
      state.product = actions.payload.product;
    },
    removeProductAction: (state, actions) => {
      state.products = state.products.filter(
        (product) => product._id !== actions.payload.id
      );
    },
    addProductAction: (state, actions) => {
      state.products = state.products.push(actions.payload.newProduct);
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

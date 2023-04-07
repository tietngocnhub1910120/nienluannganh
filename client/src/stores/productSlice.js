import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    product: {},
    totalProduct: null,
    reviews: []
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
    // review
    addReviewAction: (state, actions) => {
      state.reviews = [...state.reviews, actions.payload];
    },
    getReviewsAction: (state, actions) => {
      state.reviews = actions.payload
    },
    deleteReviewAction: (state, actions) => {
      state.reviews = state.reviews.filter(review => review._id !== actions.payload);
    },
    editReviewAction: (state, actions) => {
      state.reviews = state.reviews.map((review) => {
        if (review._id === actions.payload.reviewId) {
          review.start = actions.payload.start
          review.content = actions.payload.content
        }
        return review
      })
    },
  },
});

export const {
  getProductsAction,
  getProductAction,
  addProductAction,
  removeProductAction,
  // review
  addReviewAction, deleteReviewAction, getReviewsAction, editReviewAction
} = productSlice.actions;
export default productSlice.reducer;

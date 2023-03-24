import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: {},
    cart: {},
  },
  reducers: {
    updateProfileAction: (state, actions) => {
      state.profile = actions.payload.user;
    },
    getProfileAction: (state, actions) => {
      state.profile = actions.payload.user;
    },
    //cart
    getCartAction: (state, actions) => {
      state.cart = actions.payload;
    },
    addToCartAction: (state, actions) => {
      state.cart = actions.payload;
    },
    removeFromCartAction: (state, actions) => {
      state.cart = actions.payload;
    },
    updateCartAction: (state, actions) => {
      state.cart = actions.payload;
    },
  },
});

export const {
  getProfileAction,
  updateProfileAction,
  // cart
  addToCartAction,
  getCartAction,
  removeFromCartAction,
  updateCartAction,
} = userSlice.actions;
export default userSlice.reducer;

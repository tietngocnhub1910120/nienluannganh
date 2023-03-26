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
    saveCartAction: (state, actions) => {
      state.cart = actions.payload;
    },
  },
});

export const {
  getProfileAction,
  updateProfileAction,
  // cart
  saveCartAction
} = userSlice.actions;
export default userSlice.reducer;

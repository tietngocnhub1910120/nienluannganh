import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: {},
    cart: {},
    orders: []
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
    // orders
    saveOrderAction: (state, actions) => {
      state.orders = actions.payload;
    },
    updateStatusAction: (state, actions) => {
      state.orders = state.orders.map(order => {
        if (order._id === actions.payload) {
          order.status = 'Đã hủy'
        }
        return order
      })
    },
  },
});

export const {
  getProfileAction,
  updateProfileAction,
  // cart
  saveCartAction,
  // order
  saveOrderAction, updateStatusAction
} = userSlice.actions;
export default userSlice.reducer;

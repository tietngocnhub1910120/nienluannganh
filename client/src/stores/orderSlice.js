import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
  },
  reducers: {
    getOrdersAction: (state, actions) => {
      state.orders = actions.payload.orders;
    },
  },
});

export const { getOrdersAction } = orderSlice.actions;
export default orderSlice.reducer;

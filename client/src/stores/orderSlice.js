import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
  },
  reducers: {
    getOrdersAction: (state, actions) => {
      state.orders = actions.payload;
    },
    addNewOrderAction: (state, actions) => {
      state.orders = [...state.orders, actions.payload]
    }
  },
});

export const { getOrdersAction, addNewOrderAction } = orderSlice.actions;
export default orderSlice.reducer;

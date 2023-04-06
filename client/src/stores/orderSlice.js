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
    },
    updateOrderAction: (state, actions) => {
      state.orders = state.orders.map(order => {
        if (order._id === actions.payload.orderId) {
          order.status = actions.payload.newStatus;
        }
        return order
      })
    },
  },
});

export const { getOrdersAction, addNewOrderAction, updateOrderAction } = orderSlice.actions;
export default orderSlice.reducer;

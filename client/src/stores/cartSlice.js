import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    carts: [],
  },
  reducers: {
    getCartsAction: (state, actions) => {
      state.carts = actions.payload.carts;
    },
  },
});

export const { getCartsAction } = cartSlice.actions;
export default cartSlice.reducer;

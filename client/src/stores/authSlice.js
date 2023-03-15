import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    loginAction: (state, actions) => {
      state.user = actions.payload.user;
      state.token = actions.payload.accessToken;
    },
    registerAction: (state, actions) => {
      state.user = actions.payload.user;
      state.token = actions.payload.accessToken;
    },
    logoutAction: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { loginAction, registerAction } = authSlice.actions;
export default authSlice.reducer;

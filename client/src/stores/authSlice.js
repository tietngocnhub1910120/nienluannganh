import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    saveAuthAction: (state, actions) => {
      state.user = actions.payload.user;
      state.token = actions.payload.accessToken;
    },
    updateAuthAction: (state, actions) => {
      state.user = actions.payload.user;
    },
    logoutAction: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { saveAuthAction, logoutAction, updateAuthAction } =
  authSlice.actions;
export default authSlice.reducer;

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
    saveBookmarkAction: (state, actions) => {
      state.user = {
        ...state.user,
        bookmarks: [...state.user.bookmarks, actions.payload],
      };
    },
    unBookmarkAction: (state, actions) => {
      state.user = {
        ...state.user,
        bookmarks:
          state.user.bookmarks.filter(
            (productId) => productId !== actions.payload
          ),
      };
    },
  },
});

export const {
  saveAuthAction,
  logoutAction,
  updateAuthAction,
  saveBookmarkAction,
  unBookmarkAction,
} = authSlice.actions;
export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: {},
  },
  reducers: {
    updateProfileAction: (state, actions) => {
      state.profile = actions.payload.user;
    },
    getProfileAction: (state, actions) => {
      state.profile = actions.payload.user;
    },
  },
});

export const { getProfileAction, updateProfileAction } = profileSlice.actions;
export default profileSlice.reducer;

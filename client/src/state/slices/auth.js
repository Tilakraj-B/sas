import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  role: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials(state, action) {
      const { user } = action.payload;
      state.user = user;
      state.role = user.role;
    },
    clearCredentials(state, action) {
      state.user = null;
      state.role = null;
    },
  },
});

export const selectUser = (state) => state.auth.user;
export const selectRole = (state) => state.auth.role;

export const { setCredentials, clearCredentials } = authSlice.actions;

export default authSlice.reducer;

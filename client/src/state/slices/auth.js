import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  role: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials(state, action) {
      const { user, token } = action.payload;
      state.user = user;
      state.role = user.role;
      state.token = token;
    },
    clearCredentials(state, action) {
      state.user = null;
      state.role = null;
      state.token = null;
    },
  },
});

export const selectUser = (state) => state.auth.user;
export const selectRole = (state) => state.auth.role;

export const { setCredentials, clearCredentials } = authSlice.actions;

export default authSlice.reducer;

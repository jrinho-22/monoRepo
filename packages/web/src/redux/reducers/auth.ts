import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
  user: undefined,
  signUp: false
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = false
    },
    signUp(state) {
        state.signUp = true;
    },
    signIn(state) {
        state.signUp = false;
      },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  login: false,
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
    },
    loginFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    userUpdate: (state, action) => {
      state.currentUser = { ...state.currentUser, ...action.payload };
    },
    login: (state) => {
      state.login = true;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, userUpdate, login } =
  userSlice.actions;
export default userSlice.reducer;

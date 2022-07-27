import { createSlice } from "@reduxjs/toolkit";

const login = createSlice({
  name: "login",
  initialState: {
    isLoggedIn: false,
    token: "",
    userName: "Account",
  },
  reducers: {
    // payload({token,userName})
    loginAction(state, action) {
      
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.userName = action.payload.userName;
    },

    signOutAction(state, action) {
      state.isLoggedIn = false;
      state.token = "";
      state.userName = "Account";
    },
  },
});

export const { loginAction,signOutAction } = login.actions;
export default login.reducer;

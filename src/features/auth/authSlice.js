import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    user: null,
  },
  reducers: {
    setUser: (state, payload) => {
      state.user = payload.payload.user;
      state.token = payload.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
/* eslint-disable import/no-anonymous-default-export */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    start_fetch: (state) => {
      state.loading = true
    },
    user_loaded: (state, action) => {
      state.isAuthenticated = true
      state.loading = false
      state.user = action.payload
    },
    auth_success: (state, action) => {
      localStorage.setItem('token', action.payload.token)
      state.loading = false
      state.isAuthenticated = true
    },
    auth_remove: (state) => {
      localStorage.removeItem('token')
      state.loading = false
      state.token = null
      state.isAuthenticated = false
    }
  },
  extraReducers: (builder) => {
  }
})

export const authSelector = state => state.auth;

export const { start_fetch, user_loaded, auth_success, auth_remove } = authSlice.actions;

export default authSlice.reducer;

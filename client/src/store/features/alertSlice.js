/* eslint-disable import/no-anonymous-default-export */
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    remove_alert: (state, action) => {
      return state.filter((alert) => alert.id !== action.payload)
    },
    set_alert: (state, action) => {
      return [...state, action.payload];
    }
  }
})

export const alertSelector = state => state.alert;

export const { set_alert, remove_alert } = alertSlice.actions;

export default alertSlice.reducer;

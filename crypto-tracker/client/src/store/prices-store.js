import { createSlice } from '@reduxjs/toolkit';

const pricesSlice = createSlice({
  name: 'prices',
  initialState: {
    "btcusdt": 0.00,
    "ethusdt": 0.00,
    "bnbusdt": 0.00,
  },
  reducers: {
    updatePrice (state, action) {
      state[action.payload.symbol] = action.payload.price;
    }
  }
});

export const priceActions = pricesSlice.actions;

export default pricesSlice.reducer;
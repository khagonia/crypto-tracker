import { configureStore } from '@reduxjs/toolkit';
import pricesReducer from './prices-store'

const store = configureStore({
  reducer: {
    prices: pricesReducer
  }
})

export default store;
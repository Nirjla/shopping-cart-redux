import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api/api";
import cartReducer from "../slices/cartSlice";
export const store = configureStore({
  reducer: {
    reducer: cartReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import darkThemeSlice from "./darkThemeSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    theme: darkThemeSlice,
  },
});

export default appStore;

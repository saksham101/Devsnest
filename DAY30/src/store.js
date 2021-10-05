import { configureStore } from "@reduxjs/toolkit";
import allProductsReducer from "./redux/slices/productSlice";
const store = configureStore({
  reducer: {
    allProducts: allProductsReducer,
  },
});

export default store;

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
};
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getAllproducts: (state, action) => {
      state.products = [...action.payload];
    },
  },
});
export const { getAllproducts } = productSlice.actions;

export default productSlice.reducer;

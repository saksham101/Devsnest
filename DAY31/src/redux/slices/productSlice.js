import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts, getSignleProduct } from '../../services/product';

export const loadProducts = createAsyncThunk(
	'products/loadProducts',
	async () => {
		const data = await getProducts();
		return data;
	}
);

export const getProdcutDetails = createAsyncThunk(
	'products/getSingleProduct',
	async id => {
		const data = await getSignleProduct(id);
		return data;
	}
);

const productSlice = createSlice({
	name: 'productSlice',
	initialState: {
		products: [],
		currentProduct: null,
	},

	reducers: {
		// by default this will be a action
		resetCurrentProduct: state => {
			state.currentProduct = null;
		},
	},

	extraReducers: cases => {
		cases
			.addCase(loadProducts.fulfilled, (state, action) => {
				state.products = [...action.payload];
			})
			.addCase(getProdcutDetails.fulfilled, (state, action) => {
				state.currentProduct = action.payload;
			});
	},
});

export const { resetCurrentProduct } = productSlice.actions;
export default productSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cartSlice',
	initialState: {
		isSidebarVisible: false,
		cartItems: [],
	},

	reducers: {
		addItem: (state, { payload }) => {
			console.log(payload);
			const alreadyExits = state.cartItems.some(val => val.id === payload.id);
			if (alreadyExits) {
				state.cartItems = state.cartItems.map(val => {
					if (val.id === payload.id)
						return { ...val, quantity: val.quantity + payload.quantity };
					else return val;
				});

				return;
			}
			state.cartItems = [...state.cartItems, payload];
		},
		removeItem: (state, { payload }) => {
			state.cartItems = state.cartItems.filter(val => val.id != payload);
		},
		toggleVisibility: state => {
			state.isSidebarVisible = !state.isSidebarVisible;
		},
		increaseQuantity: (state, action) => {
			state.cartItems = state.cartItems.map(val => {
				if (val.id === action.payload) {
					return { ...val, quantity: val.quantity + 1 };
				}

				return val;
			});
		},
		decreaseQuantity: (state, action) => {
			state.cartItems = state.cartItems.map(val => {
				if (val.id === action.payload && val.quantity > 1) {
					return { ...val, quantity: val.quantity - 1 };
				}

				return val;
			});
		},
	},
});

export const {
	addItem,
	toggleVisibility,
	increaseQuantity,
	decreaseQuantity,
	removeItem,
} = cartSlice.actions;
export default cartSlice.reducer;

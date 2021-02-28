export const sumItems = (cartItems) => {
	return {
		itemCount: cartItems.reduce((total, product) => total + product.quantity, 0),
		total: cartItems.reduce((total, product) => total + product.price * product.quantity, 0),
	};
};

const cartReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_ITEM':
			// check if item is in cart
			if (!state.cartItems.find((item) => item.id === action.payload.id)) {
				state.cartItems.push({
					...action.payload,
					quantity: 1,
				});
			}

			return {
				...state,
				cartItems: [...state.cartItems],
				...sumItems(state.cartItems),
			}
			case 'INCREASE':
				const increaseIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
				state.cartItems[increaseIndex].quantity++;
				return {
					
				}
		default:
			return state;
	}
};

export default cartReducer;

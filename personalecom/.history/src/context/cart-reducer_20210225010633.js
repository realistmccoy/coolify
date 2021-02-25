const cartReducer = (state, action) => {
	switch (action.type) {
    case 'ADD_ITEM':
      // check if item is in cart
      if(!state.cartItems.find(item => item.id === action.payload.id)) {
        state.cartItems.push()
      }
		default:
			return state;
	}
};

export default cartReducer;

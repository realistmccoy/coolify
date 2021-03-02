export const isInCart = (product, cartItems) => {
	return cartItems.find((item) => item.id === product.id);
};

const API = 'https://localhost:8080';

export async function fetchFromAPI
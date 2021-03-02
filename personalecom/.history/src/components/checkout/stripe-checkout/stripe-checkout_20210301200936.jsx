import React, { useState, useContext } from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import { CartContext } from '../../../context/cart-context';
import { fetchFromAPI } from '../../../helpers';

const StripeCheckOut = () => {
	const [email, setEmail] = useState('');
	const { cartItems } = useContext(CartContext);
  const stripe = useStripe();

  const handleGuestCheckout = () => {
    e.preventDefault();
    const line_items = cartItems.map((item) => {
      return {
        quantity: item.quantity, 
        price_data: { 
          currency: 'usd', 
          unit
        }
      }
    })
  }

	return (
		<form onSubmit={handleGuestCheckout}>
			<div>
				<input
					type='email'
					onChange={(e) => setEmail(e.target.value)}
					placeholder='Email'
					value={email}
					className='cool-input'
				/>
			</div>
			<div className='submit-btn'>
				<button type='submit' className='button is-black nomad-btn submit'>
					Checkout
				</button>
			</div>
		</form>
	);
};

export default StripeCheckOut
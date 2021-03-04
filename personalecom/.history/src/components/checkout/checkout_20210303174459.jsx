import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/cart-context';
import Layout from '../shared/layout';
import ShippingAddress from './custom-checkout/shipping-address'
import './checkout.styles.scss';

const Checkout = () => {
	const { itemCount, total } = useContext(CartContext);
	const [shipping, setShipping] = useState(null)
	return (
		<Layout>
			<div className='checkout'>
				<h2> checkout summary </h2>
				<h3>{`Total Items: ${itemCount}`}</h3>
				<h4>{`Amount to Pay: $${total}`}</h4>
				<div>
					<ShippingAddress />
				</div>
			</div>
		</Layout>
	);
};

export default Checkout;

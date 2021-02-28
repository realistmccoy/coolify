import React from 'react';
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from '../../../icons/index';

const CartItem = (product) => {
	const { title, imageUrl, price, quantity } = product;

	return (
		<div className="cart-item">
			<div className="item-image">
				<img src={imageUrl} alt='product' />
			</div>
			<div className='name-price'>
				<h4>{title}</h4>
				<p>${price}</p>
			</div>
			<div className='quantity'>
				<p>{`Quantity: ${quantity}`}</p>
			</div>
			<div className='btns-container'>
				<button className="btn ">
					<PlusCircleIcon width='20px' />
				</button>
				{quantity === 1 && (
					<button>
						<TrashIcon width='20px' />
					</button>
				)}
				{quantity > 1 && (
					<button>
						<MinusCircleIcon width='20px' />
					</button>
				)}
			</div>
		</div>
	);
};

export default CartItem;

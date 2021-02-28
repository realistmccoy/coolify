import React, {useContext} from 'react';
import {isInCart} from '../../helpers'
import {CartContext} from '../../context/cart-context'
import { withRouter} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import './featureProduct.styles.scss';

const FeatureProduct = (props) => {
  const {title, imageUrl, price, history, id, description} = props;
  const product = {title, imageUrl, price, history, id, description}
  const { addProduct, cartItems, increase } = useContext(CartContext);

  return (
		<div className='featureProduct'>
			<div className='featureImage' onClick={() => history.push(`/product/${id}`)}>
				<img src={imageUrl} alt='product' />
				<div className='namePrice'>
				</div>
				<h3>{title}</h3>
				<p>$ {price}</p>
				{!isInCart(product, cartItems) && (
					<Button
						className='button is-black nomad-btn'
						id='btn-white-outline'
						variant='contained'
						onClick={() => addProduct(product)}>
						ADD TO CART
					</Button>
				)}
				{isInCart(product, cartItems) && (
					<Button
						className='button is-white nomad-btn'
						id='btn-white-outline'
						variant='contained'
						onClick={() => increase(product)}>
						ADD MORE
					</Button>
				)}
			</div>
		</div>
  );
}

export default withRouter(FeatureProduct)
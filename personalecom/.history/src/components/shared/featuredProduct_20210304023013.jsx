import React, {useContext} from 'react';
import {isInCart} from '../../helpers'
import {CartContext} from '../../context/cart-context'
import { withRouter} from 'react-router-dom'
// import Button from '@material-ui/core/Button';
import './featureProduct.styles.scss';



const FeatureProduct = (props) => {
  const {title, imageUrl, price, history, id, description} = props;
  const product = {title, imageUrl, price, history, id, description}
  const { addProduct, cartItems, increase } = useContext(CartContext);

  return (
		<div className='featured-product'>
		<div className='featured-image' onClick={() => history.push(`/product/${id}`)}>
			<img src={imageUrl} alt='product' />
		</div>
		<div className='name-price'>
			<h3>{title}</h3>
			<p>$ {price}</p>
			{ 
				!itemInCart && 
				<button 
					className='button is-black nomad-btn'
					onClick={() => addProduct(product)}>
						ADD TO CART</button>
			}
			{
				itemInCart &&
				<button 
					className='button is-white nomad-btn'
					id='btn-white-outline'
					onClick={()=> increase(product)}>
						ADD MORE</button>
			}
			
		</div>
	</div>
  );
}

export default withRouter(FeatureProduct)
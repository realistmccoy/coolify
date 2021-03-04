import React, {useContext} from 'react';
import {isInCart} from '../../helpers'
import {CartContext} from '../../context/cart-context'
import { withRouter} from 'react-router-dom'
// import Button from '@material-ui/core/Button';
import Card from '../stylescard/card';
import styled from 'styled-components';
import './featureProduct.styles.scss';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  min-height: -webkit-fill-available; /* mobile viewport bug fix */
  overflow-x: auto;
  scroll-behavior: smooth;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding-left: calc(50vw - 160px);

  /* Fake padding-right */
  &::after {
    content: '';
    position: relative;
    display: block;
    flex-shrink: 0;
    width: calc(50vw - 160px);
    height: 1px;
  }

  > button {
    margin-right: 40px;
  }

  /* Hide the others cards */
  > button:not(:first-child) {
    visibility: visible; /* switch to 'visible' */
  }
`;


const FeatureProduct = (props) => {
  const {title, imageUrl, price, history, id, description,hexa} = props;
  const product = {title, imageUrl, price, history, id, description}
  const { addProduct, cartItems, increase } = useContext(CartContext);

  return (
		<div className='featureProduct'>
			<div className='featureImage' onClick={() => history.push(`/product/${id}`)}>
			 <Page>
   			<Grid>
				<Card 
				
				title={title}
				image={imageUrl}
				hexa={hexa}
				/>
				
       </Grid>
			 
     </Page>

				{/* <img src={imageUrl} alt='product' />
				</div>
				<div className='namePrice'>
				<h3>{title}</h3>
				<p>$ {price}</p>
				{!isInCart(product, cartItems) && (
					<button
						className='button is-black nomad-btn'
						id='btn-white-outline'
						variant='contained'
						onClick={() => addProduct(product)}>
						ADD TO CART
					</button>
				)}
				{isInCart(product, cartItems) && (
					<button
						className='button is-white nomad-btn'
						id='btn-white-outline'
						variant='contained'
						onClick={() => increase(product)}>
						ADD MORE
					</button>
				)} */}
			</div>
		</div>
  );
}

export default withRouter(FeatureProduct)
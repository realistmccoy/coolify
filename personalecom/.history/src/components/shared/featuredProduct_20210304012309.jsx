import React, {useContext} from 'react';
import {isInCart} from '../../helpers'
import {CartContext} from '../../context/cart-context'
import { withRouter} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import Card from '../stylescard/card';
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
  const {title, imageUrl, price, history, id, description} = props;
  const product = {title, imageUrl, price, history, id, description}
  const { addProduct, cartItems, increase } = useContext(CartContext);

  return (
		<Page>
			<Grid onClick={() => history.push(`/product/${id}`)}>

				<img src={imageUrl} alt='product' />

				<Card />
				</Grid>
				<Grid className='namePrice'>
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
			</Grid>
		</Page>
  );
}

  //   <Page>
     
  //   <Grid>
  //     {productItems.map((product, index) => (
  //       <Card
  //         key={product.description}
  //         hexa={product.hexa}
  //         title={product.title}
  //         description={product.description}
  //         image={product.imageUrl}
  //       />
  //     ))}
  //   </Grid>
  // </Page>



export default withRouter(FeatureProduct)
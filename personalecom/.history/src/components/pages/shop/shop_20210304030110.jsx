import React, {useContext} from 'react';
import Layout from '../../shared/layout'
import FeaturedProduct from '../../shared/featuredProduct'
import {ProductsContext} from '../../../context/productContext'
import './shop.styles.scss'
import styled from 'styled-components';
import Card from '../../stylescard/Card';

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


const Shop = () => {
  const {products} = useContext(ProductsContext);
  const allProducts = products.map(product => (
    <FeaturedProduct {...product} key={product.id}/>
  ))
  return (
		<Layout>
			<div className='product-list-container'>
				<h2 className='product-list-title'>Shop</h2>
				<Page>
					<Grid>
          {allProducts.map((i) => (

            <Card
            
            
            />
          )
					</Grid>
				</Page>
			</div>
		</Layout>
  );
}

export default Shop
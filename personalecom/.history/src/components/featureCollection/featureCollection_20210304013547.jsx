import React, {useContext} from 'react';
import {ProductsContext} from '../../context/productContext'
import FeaturedProduct from '../shared/featuredProduct'
import Card from '../stylescard/card';
import styled from 'styled-components';

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

const FeatureCollection = () => {
  const { products } = useContext(ProductsContext);
  const productItems = products.filter((product, i) => i < 4).map(product => (
    <FeaturedProduct {...product} key={product.id} />
  ));

  return (
    <Page>
      <Grid>
        <Card>

        </Card>
      
      </Grid>
    </Page>

    // <div className='featured-collection container'>
    //   <h2 className='featured-section-title'>Featured Collection</h2>
    //   <div className='products'>
    //     {
    //       productItems
    //     }
    //   </div>
    // </div>
  )
}

export default FeatureCollection
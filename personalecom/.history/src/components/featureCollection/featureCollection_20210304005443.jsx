import React, {useContext} from 'react';
import {ProductsContext} from '../../context/productContext'
import FeatureProduct from '../shared/featuredProduct'
import styled from 'styled-components';
import Card from '../stylescard/card';


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
  const {products} = useContext(ProductsContext);
  const productItems = products.filter((product, i) => i < 4).map((product, i) => (
    <FeatureProduct {...product} key={product.id}/>
  ))

  return(
    <Page>
     
    <Grid>
      {productItems.map((website, index) => (
        <Card
          key={website.description}
          hexa={website.hexa}
          title={website.title}
          description={website.description}
          image={website.image}
        />
      ))}
    </Grid>
  </Page>
  )
}

export default FeatureCollection
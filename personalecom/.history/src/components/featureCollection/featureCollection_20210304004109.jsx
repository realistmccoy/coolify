import React, {useContext} from 'react';
import {ProductsContext} from '../../context/productContext'
import FeatureProduct from '../shared/featuredProduct'
import styled from 'styled-components';
import Card from '../stylescard/card';
import './featureCollection.styles.scss'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  min-height: -webkit-fill-available; /* mobile viewport bug fix */
  overflow-x: auto;
  scroll-behavior: smooth
  `


const FeatureCollection = () => {
  const {products} = useContext(ProductsContext);
  const productItems = products.filter((product, i) => i < 4).map((product, i) => (
    <FeatureProduct {...product} key={product.id}/>
  ))

  return(
    <div className='featured-collection-container'>
      {/* <h2 className='featured-section-title'>
        Featured Collection
      </h2>
      <div className='products'>
        {productItems}
      </div> */}
      <div className='page-div'>
     
     <div className='grid'>
       {productItems.map((products, index) => (
         <Card
           key={products.description}
           hexa={product.hexa}
           title={product.title}
           description={product.description}
           image={product.image}
         />
       ))}
     </div>
   </div>
    </div>
  )
}

export default FeatureCollection
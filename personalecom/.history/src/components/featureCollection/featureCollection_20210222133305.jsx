import React, {useContext} from 'react';
import {ProductsContext} from '../../context/productContext'
import FeatureProduct from '../shared/featuredProduct'

const FeatureCollection = () => {
  const {products} = useContext(ProductsContext);
  const productItems = products.filter((product, i) => i < 4).map((product, i) => (
    <FeatureProduct {...products} key={product.id}/>
  ))

  return(
    <div className='featured='>
      <h2>
        Featured Collection
      </h2>
      <div>
        {productItems}
      </div>
    </div>
  )
}
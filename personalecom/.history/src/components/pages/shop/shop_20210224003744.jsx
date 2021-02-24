import React, {useContext} from 'react';
import Layout from './shared/layout'
import FeaturedProduct from '../../shared/featuredProduct'
import {ProductsContext} from '../../../context/productContext'
import './shop.styles.scss'

const Shop = () => {
  const {products} = useContext(ProductsContext);
  const allProducts = products.map(product => (
    <FeaturedProduct {...product} key={product.id}/>
  ))
  return (
    <div>
      <h2>Shop</h2>
      <div>
        {
          
        }
      </div>
    </div>
  )
}
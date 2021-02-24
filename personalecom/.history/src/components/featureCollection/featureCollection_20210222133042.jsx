import React, {useContext} from 'react';
import {ProductsContext} from '../../context/productContext'
import FeatureProduct from '../shared/featuredProduct'

const FeatureCollection = () => {
  const {products} = useContext(ProductsContext);
  const products = products.filter((product, i) => i < 4).map((product, i) => )
}
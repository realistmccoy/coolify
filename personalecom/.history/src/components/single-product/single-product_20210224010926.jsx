import React, {useContext, useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom'
import {ProductsContext} from '../../context/productContext'
import Layout from '../shared/layout'
import './single-product.styles.scss'

const SingleProduct = (match, history) => {
  const {products} = useContext(ProductsContext)
  const {id} = match.params;
  const [product, setProduct] = useState(null)
  useEffect()
  return (
    <div>

    </div>
  )
}

export default SingleProduct
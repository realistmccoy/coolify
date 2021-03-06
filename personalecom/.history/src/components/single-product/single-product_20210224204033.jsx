import React, {useContext, useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom'
import {ProductsContext} from '../../context/productContext'
import Layout from '../shared/layout'
import './single-product.styles.scss'

const SingleProduct = ({match, history: {push}}) => {
  const {products} = useContext(ProductsContext)
  const {id} = match.params;
  const [product, setProduct] = useState(null)
  useEffect(() => {
    const product = products.find(item => Number(item.id) === Number(id))  

    if (!product) {
      return push('/shop');
    }

    setProduct(product)
  })
  const {imageUrl, title, price, description} = product;
  return (
    <Layout>
      <div>
        <div>
          <img src={im}
        </div>
      </div>
    </Layout>
  )

}

export default SingleProduct
import React, {useContext, useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom'
import {ProductsContext} from '../../context/productContext'
import {CartContext} from '../../context/cart-context'
import {isInCart} from '../../helpers'
import Layout from '../shared/layout'
import Loader from "react-loader-spinner";
import Button from '@material-ui/core/Button';
import './single-product.styles.scss'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const SingleProduct = ({match, history: {push}}) => {
  const {products} = useContext(ProductsContext)
  const {addProduct, cartItems} = useContext(CartContext)
  const {id} = match.params;
  const [product, setProduct] = useState(null)
  
  useEffect(() => {
    const product = products.find(item => Number(item.id) === Number(id))  

    //if product doesnt exist, redirect to shop page
    if (!product) {
      return push('/shop');
    }
    setProduct(product)
  }, [id, product, push, products]);

  //while we check for product
  if(!product) {
    return  (
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    )
  }
    

  const {imageUrl, title, price, description} = product;
  const itemInCart = 

  return (
    <Layout>
      <div className="single-product-container">
        <div className="product-image">
          <img src={imageUrl} alt='product' />
        </div>
        <div className='product-details'>
          <div className='name-price'>
            <h3>{title}</h3>
            <p>{price}</p>
          </div>
          <div className='add-to-cart-btns'>
            {
              !isInCart(product, cartItems) && 
          <Button className="button is-white nomad-btn" 
          id='btn-white-outline'
          variant="contained"
          onClick={() => addProduct(product)}
          >
            ADD TO CART
          </Button>
          }
          {
            isInCart(product, cartItems) &&
            <Button className="button is-white nomad-btn" 
          id='btn-white-outline'
          variant="contained"
          onClick={() => {}}
          >
            ADD MORE
          </Button>
          }
          <Button className="button is-black nomad-btn" id='btn-white-outline'
          variant="contained"
         >
          Checkout
          </Button>
        </div>
        <div className='product-description'>
          <p>
            {description}
          </p>
        </div>
        </div>
      </div>
    </Layout>
  )

}

export default withRouter(SingleProduct)
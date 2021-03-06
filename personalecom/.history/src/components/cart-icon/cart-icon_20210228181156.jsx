import React, {useContext} from 'react';
import shoppingBag from '../../assets/2169842.svg'
import {CartContext} from '../../context/cart-context'
import './cart-icon.styles.scss'

const CartIcon = () => {
  const {itemCount, cartItems} = useContext(CartContext)
  console.log('CartItems:', cartItems)
  return (
    <div className="cart-container" onClick={() => history.push('')}>
      <img src={shoppingBag} alt='shopping-cart-icon' />
      {
        itemCount > 0 ? <span className="cart-count"> { itemCount} </span>: null
      }
      
    </div>
  )
}

export default CartIcon;
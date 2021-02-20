import React from 'react';
import shoppingBag from '../../assets/2169842.svg'
import './cart-icon.styles.scss'

const CartIcon = () => {
  return (
    <div className="cart-container">
      <img src={shoppingBag} alt='shopping-cart-icon' />
      <span className="cart-"> 5 </span>
    </div>
  )
}
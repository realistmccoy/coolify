import React, {useContext} from 'react';
import {CartContext} from '../../context/cart-context'
import Layout from '../shared/layout'
import './checkout.styles.scss'

const Checkout = () => {
  const { itemCount, total }= useContext(CartContext)

  return (
    <
  )
}
import React, {useContext} from 'react';
import { CartContext } from '../../../../context/cart-context';
import Layout from '../../../shared/layout';
import CartItem from './cart-item';
import './cart-page.styles.scss';

const CartPage = () => {
  const {cartItems, itemCount, total, } = useContext(CartContext)
  
}
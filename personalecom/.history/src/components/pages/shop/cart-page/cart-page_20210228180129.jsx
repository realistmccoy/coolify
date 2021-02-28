import React, {useContext} from 'react';
import { CartContext } from '../../../../context/cart-context';
import Layout from '../../../shared/layout';
import CartItem from './cart-item';
import './cart-page.styles.scss';

const CartPage = () => {
  const {cartItems, itemCount, total, } = useContext(CartContext)
  return (
    <Layout>
      <>
        <h1>
          Cart
        </h1>
        {
          cartItems.length === 0 ? <div>Your cart is empty</div>
        }
      </>
    </Layout>
  )
}
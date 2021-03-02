import React, {useState,useContext} from 'react';
import { useStripe} from '@stripe/react-stripe-js'
import {CartContext} from '../../../context/cart-context'
import {fetchFromAPI} from '../../../helpers'

const StripeCheckOut = () => {
  const [email, setEmail] = useState('');
  const {cartItems} = useContext(CartContext)

  return (
    <form>
      <div>
        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="">
        
        </input>
      </div>
    </form>
  )

}
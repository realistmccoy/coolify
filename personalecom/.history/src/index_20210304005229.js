import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ProductsContextProvider from './context/productContext'
import CartContextProvider from './context/cart-context'
import UserContextProvider from './context/user-context.jsx'
import { theme } from './theme/';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import GlobalStyles from '../../theme/global';
//STRIPES
import {Elements } from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY)

ReactDOM.render(
<BrowserRouter>
<ProductsContextProvider>
  <CartContextProvider>
    <Elements stripe={stripePromise}>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </Elements>
  </CartContextProvider>
</ProductsContextProvider>

</BrowserRouter>
, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

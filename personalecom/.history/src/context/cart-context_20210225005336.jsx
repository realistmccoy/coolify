import React, {createContext, useReducer} from 'react';
import cartReducer from './cart-reducer'

export const CartContext = createContext();

const initialState = { cartItems: [], itemCount: 0, totalItems: 0};

const CartContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const contextValue = {
    ...state,
  }
  return (<CartContext.)
}
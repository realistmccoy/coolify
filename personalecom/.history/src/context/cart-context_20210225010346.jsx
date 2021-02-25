import React, {createContext, useReducer} from 'react';
import cartReducer from './cart-reducer'

export const CartContext = createContext();

const initialState = { cartItems: [], itemCount: 0, totalItems: 0};

const CartContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  //action creator
  const addProduct = (product) => dispatch({type: 'ADD_ITEM', payload: product})
  const contextValue = {
    ...state,
    addProduct
  }
  return (
  <CartContext.Provider value={{contextValue}}>
  {children}
  </CartContext.Provider>
  )
}

export default CartContextProvider
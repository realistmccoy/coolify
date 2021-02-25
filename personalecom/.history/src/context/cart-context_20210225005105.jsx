import React, {createContext, useReducer} from 'react';
import cartReducer from './cart-reducer'

export const CartContext = createContext();

const initialState = {}
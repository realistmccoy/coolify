import React, { useContext} from 'react';
import { Link } from 'react-router-dom'
import CartIcon from '../cart-icon/cart-icon'
import { auth} from '../../firebase'
import {UserContext} from '../../context/user-context'
import './header.styles.scss';

const Header = () => {
  const {user} = useContext(UserContext)
  return (
    <nav className="nav-menu container">
      <div className="logo">
        <Link to='/'> Coolify</Link>
      </div>
      <ul>
        <li>
        <Link to='/'> Home</Link>
        </li>
        <li>
        <Link to='/shop'> Shop</Link>
        </li>
      </ul>
      <CartIcon/>
    </nav>

  )
}

export default Header
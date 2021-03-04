import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import CartIcon from '../cart-icon/cart-icon'
import { auth } from '../../firebase/index';
import { UserContext } from '../../context/user-context';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ToolbarMenu from "./ToolbarMenu";
import { Button, MenuItem } from "@material-ui/core";


// import './header.styles.scss';

	


const Header = (props) => {
  const { user } = useContext(UserContext);
  console.log('user', user);
	const { classes } = props;
  function onLogin() {
    alert("Login TBD");
  }
  function onSignup() {
    alert("Signup TBD");
  }

	const styles = {
		root: {
			flexGrow: 1
		},
		grow: {
			flexGrow: 1
		},
		menuButton: {
			marginLeft: -12,
			marginRight: 20
		}
	};

	

  return (
		



		<nav className='nav-menu container'>
			<div className='logo'>
				<Link to='/'> Coolify</Link>
			</div>
			<ul>
				<li>
					<Link to='/'> Home</Link>
				</li>
				<li>
					<Link to='/shop'> Shop</Link>
				</li>
				{!user && (
					<li>
						<Link to='/sign-in'> Sign In</Link>
					</li>
				)}
				{user && <li onClick={() => auth.signOut()}>Sign Out</li>}
				{!user && (
					<li>
						<Link to='/sign-up'>Sign Up</Link>
					</li>
				)}
			</ul>
			<CartIcon />
		</nav>
  );
}

export default Header
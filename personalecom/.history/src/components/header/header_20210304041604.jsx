import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import CartIcon from '../cart-icon/cart-icon'
import { auth } from '../../firebase/index';
import { UserContext } from '../../context/user-context';
import './header.styles.scss';


const Header = () => {
  const { user } = useContext(UserContext);
  console.log('user', user);
	return (
	<nav>
		<div className="logo">
			<h4>Coolify</h4>
		</div>
		<ul className="nav-link">
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
		<div className="burger"
			onClick={() => {
				const nav = document.querySelector(".nav-link");
				const burger = document.querySelector(".burger");
				nav.classList.toggle("nav-ativ");
				burger.classList.toggle("togle");
			}}
		>
			<div className="line1"></div>
			<div className="line2"></div>
			<div className="line3"></div>
			<div className="line4"></div>
			<div className="line5"></div> 
			
		
		</div>
	</nav>

	// <nav className='nav-menu container'>
	// 		<div className='logo'>
	// 			<Link to='/'> Coolify</Link>
	// 		</div>
	// 		<ul>
	// 			<li>
	// 				<Link to='/'> Home</Link>
	// 			</li>
	// 			<li>
	// 				<Link to='/shop'> Shop</Link>
	// 			</li>
	// 			{!user && (
	// 				<li>
	// 					<Link to='/sign-in'> Sign In</Link>
	// 				</li>
	// 			)}
	// 			{user && <li onClick={() => auth.signOut()}>Sign Out</li>}
	// 			{!user && (
	// 				<li>
	// 					<Link to='/sign-up'>Sign Up</Link>
	// 				</li>
	// 			)}
	// 		</ul>
	// 		<CartIcon />
	// 	</nav>
	);
};



export default Header;
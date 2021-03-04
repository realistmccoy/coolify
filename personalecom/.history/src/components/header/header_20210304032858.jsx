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
// import MenuIcon from "@material-ui/icons/Menu";
import ToolbarMenu from "";
import { Button, MenuItem } from "@material-ui/core";


// import './header.styles.scss';

	

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

	
	

  return (
		
<AppBar position="fixed">
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit">
          MyApp
        </Typography>

        <ToolbarMenu
          render={collapsed => {
            return collapsed
              ? [
                  <MenuItem key="login" onClick={onLogin} autoclose={true}>
                    Login
                  </MenuItem>,
                  <MenuItem key="signup" onClick={onSignup}>
                    Signup
                  </MenuItem>
                ]
              : [
                  <Button
                    key="login"
                    color="inherit"
                    onClick={onLogin}
                    className={classes.menuButton}
                  >
                    Login
                  </Button>,
                  <Button
                    key="signup"
                    color="inherit"
                    onClick={onSignup}
                    className={classes.menuButton}
                  >
                    Signup
                  </Button>
                ];
          }}
        />
      </Toolbar>
    </AppBar>
  


		// <nav className='nav-menu container'>
		// 	<div className='logo'>
		// 		<Link to='/'> Coolify</Link>
		// 	</div>
		// 	<ul>
		// 		<li>
		// 			<Link to='/'> Home</Link>
		// 		</li>
		// 		<li>
		// 			<Link to='/shop'> Shop</Link>
		// 		</li>
		// 		{!user && (
		// 			<li>
		// 				<Link to='/sign-in'> Sign In</Link>
		// 			</li>
		// 		)}
		// 		{user && <li onClick={() => auth.signOut()}>Sign Out</li>}
		// 		{!user && (
		// 			<li>
		// 				<Link to='/sign-up'>Sign Up</Link>
		// 			</li>
		// 		)}
		// 	</ul>
		// 	<CartIcon />
		// </nav>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header)
import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/user';
import { CartContext } from '../context/cart';

export default function LoginLink() {
  // Context:
  const { user, userLogout } = React.useContext(UserContext);
  const { clearCart } = React.useContext(CartContext);

  // If User Exists:
  if (user.token) {
    return (
      <React.Fragment>
        <button
          className='login-link-btn'
          onClick={() => {
            userLogout();
            clearCart();
          }}
        >
          Logout
        </button>
        <button
          className='login-link-btn-desk'
          onClick={() => {
            userLogout();
            clearCart();
          }}
        >
          Logout
        </button>
      </React.Fragment>
    );
  } else {
    return <Link to='/login'>Login</Link>;
  }
}

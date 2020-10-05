import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cart';
import { FaShoppingCart } from 'react-icons/fa';

export default function CartLink() {
  // Destructure Items
  const { cartItems } = useContext(CartContext);
  //Main:
  return (
    <div className='cart-link-container'>
      <Link to='/cart'>Cart</Link>
      <div className='cart-amount-container'>
        <FaShoppingCart></FaShoppingCart>
        <span className='cart-amount-number'>{cartItems}</span>
      </div>
    </div>
  );
}

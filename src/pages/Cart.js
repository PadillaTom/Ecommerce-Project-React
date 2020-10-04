import React, { useContext } from 'react';
import { CartContext } from '../context/cart';
import EmptyCart from '../components/Cart/EmptyCart';
import CartItem from '../components/Cart/CartItem';
import { Link } from 'react-router-dom';
// import { UserContext } from '../context/user';

export default function Cart() {
  // User Context
  let user = false;

  // Cart Context:
  const { cart, total } = useContext(CartContext);
  // console.log({ cart, total }); // Comprobamos
  if (cart.length === 0) {
    return <EmptyCart></EmptyCart>;
  }

  // Main:
  return <h1>hello from cart page</h1>;
}

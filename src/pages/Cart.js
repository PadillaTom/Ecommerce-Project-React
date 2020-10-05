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
  return (
    <section className='section cart-section'>
      <div className='section-center'>
        <h2 className='section-title'>Your Cart</h2>
        <div className='cart-items-container'>
          {cart.map((item) => {
            return <CartItem key={item.id} {...item}></CartItem>;
          })}
          <h2 className='cart-total'>Total: ${total}</h2>
        </div>
        {user ? (
          <Link to='/checkout' className='btn-checkout'>
            Checkout
          </Link>
        ) : (
          <Link to='/login' className='btn-checkout'>
            Login
          </Link>
        )}
      </div>
    </section>
  );
}

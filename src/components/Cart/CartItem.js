import React, { useContext } from 'react';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import { CartContext } from '../../context/cart';

export default function CartItem({ id, image, title, price, amount }) {
  // ::::::::::::: Cart Context ::::::::
  // Remove:
  const { removeItem, increaseAmount, decreaseAmount } = useContext(
    CartContext
  );

  // Main:
  return (
    <article className='cart-item'>
      <img src={image.url} alt={title} className='single-item-img' />
      <div className='cart-info-container'>
        <h4>{title}</h4>
        <h5>${price}</h5>
        <button
          type='button'
          className='btn-remove'
          onClick={() => {
            removeItem(id);
          }}
        >
          Remove
        </button>
      </div>
      <div className='cart-amount-container'>
        <button
          type='button'
          className='btn-amount'
          onClick={() => increaseAmount(id)}
        >
          <FaAngleUp></FaAngleUp>
        </button>
        <p className='cart-amount'>{amount}</p>
        <button
          type='button'
          className='btn-amount'
          onClick={() => decreaseAmount(id, amount)}
        >
          <FaAngleDown></FaAngleDown>
        </button>
      </div>
    </article>
  );
}

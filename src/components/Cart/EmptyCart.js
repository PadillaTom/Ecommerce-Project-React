import React from 'react';
import { Link } from 'react-router-dom';

export default function EmptyCart() {
  return (
    <section className='section'>
      <div className='section-center'>
        <div className='empty-cart-container'>
          <h2>Empty Cart...</h2>
          <Link to='/products' className='btn btn-emptycart'>
            See Products
          </Link>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function Product({ image, title, id, price }) {
  return (
    <article className='product'>
      <img src={image} alt={title} className='product-card-image' />
      <div className='product-footer'>
        <div className='pf-info'>
          <p className='product-title'>{title}</p>
          <p className='product-price'>${price}</p>
        </div>
        <Link to={`products/${id}`} className='btn-product-card'>
          Details
        </Link>
      </div>
    </article>
  );
}

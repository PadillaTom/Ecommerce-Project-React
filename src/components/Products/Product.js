import React from 'react';
import { Link } from 'react-router-dom';

export default function Product({ image, title, id, price }) {
  // Image URL:
  const url = image.url;
  return (
    <article className='product'>
      <div className='product-img-container'>
        <img src={url} alt={title} />
        <Link to={`products/${id}`} className='btn-product-card'>
          Details
        </Link>
      </div>
      <div className='product-footer'>
        <p className='product-title'>{title}</p>
        <p className='product-price'>${price}</p>
      </div>
    </article>
  );
}

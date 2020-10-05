import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/products';
import { CartContext } from '../context/cart';
import { useHistory } from 'react-router-dom';
// import Loading from '../components/Loading';

export default function ProductDetails() {
  // Params:
  const { id } = useParams();
  // Context:
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  // Return a product's data by matching Ids
  const product = products.find((item) => item.id === parseInt(id));

  // Link
  const history = useHistory();

  // Main:

  // Destructuramos el Object (Product)
  const {
    image: { url },
    title,
    price,
    description,
  } = product;

  return (
    <section className='single-product'>
      <img src={url} alt={title} className='single-product-img' />
      <article className='single-prod-info'>
        <h1>{title}</h1>
        <h2>${price}</h2>
        <p>{description}</p>
        <button
          className='btn-add-cart'
          onClick={() => {
            addToCart(product);
            history.push('/cart');
          }}
        >
          add to cart
        </button>
      </article>
    </section>
  );
}

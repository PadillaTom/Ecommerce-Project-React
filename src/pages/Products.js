import React, { useContext } from 'react';
import { ProductContext } from '../context/products';
import Loading from '../components/Loading';
import ProductList from '../components/Products/ProductList';

export default function Products() {
  // Context Response:
  const { loading, products } = useContext(ProductContext);
  // console.log(products); // Vemos los Products pasados del context.

  // Main:
  if (loading) {
    return <Loading></Loading>;
  }
  return <ProductList title='Nostre pizze' products={products}></ProductList>;
}

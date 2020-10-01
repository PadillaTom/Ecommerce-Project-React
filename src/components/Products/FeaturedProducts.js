import React, { useContext } from 'react';
import ProductList from './ProductList';
import { ProductContext } from '../../context/products';
import Loading from '../Loading';

export default function FeaturedProducts() {
  // Context:
  const { loading, featured } = useContext(ProductContext);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <ProductList title='featured products' products={featured}></ProductList>
  );
}

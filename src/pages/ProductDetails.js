import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  // Params:
  const { id } = useParams();

  // Main:
  return <h1>hello from product details page Product id is: {id}</h1>;
}

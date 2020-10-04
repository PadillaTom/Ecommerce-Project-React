import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Context:
import ProductProvider from './context/products';
import { CartProvider } from './context/cart';

ReactDOM.render(
  <ProductProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ProductProvider>,
  document.getElementById('root')
);

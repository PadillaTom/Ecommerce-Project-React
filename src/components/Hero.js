import React from 'react';

export default function Hero({ children }) {
  return (
    <div className='hero'>
      <div className='banner'>
        <h1>Quality Ingredients</h1>
        <p>Tambien dulce de leche!</p>
        {children}
      </div>
    </div>
  );
}

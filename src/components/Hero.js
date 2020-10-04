import React from 'react';

export default function Hero({ children }) {
  return (
    <div className='hero'>
      <div className='banner'>
        <h1>La vera Pizza Italiana</h1>
        <p>Buon Appetito!</p>
        {children}
      </div>
    </div>
  );
}

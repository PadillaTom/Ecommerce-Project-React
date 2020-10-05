import React from 'react';
//DOM:
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='header'>
      <div className='logo-container'>
        <h2>
          <Link to='/'>La Buona Pizza</Link>
        </h2>
      </div>
    </header>
  );
}

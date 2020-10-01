import React from 'react';
//DOM:
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='header'>
      <div className='logo-container'>
        <h2>My Store</h2>
      </div>
      <nav className='navbar'>
        <div className='nav-links-container'>
          <ul className='nav-links-browse'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/products'>Products</Link>
            </li>
          </ul>
          <ul className='nav-links-user'>
            <li>
              <Link to='/login'>Log In</Link>
            </li>
            <li>
              <Link to='/login'>Cart</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

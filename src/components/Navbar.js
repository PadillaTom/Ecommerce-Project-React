import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineBars } from 'react-icons/ai';
import CartLink from '../components/Cart/CartLink';

export default function Navbar() {
  // Dropdown:
  const [ddShow, setDdShow] = useState(false);
  return (
    <nav className='navbar'>
      {/* Desktop */}
      <div className='nav-links-container'>
        <ul className='nav-links-browse'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/products'>Le Pizze</Link>
          </li>
        </ul>
        <ul className='nav-links-user'>
          <li>
            <Link to='/login'>Log In</Link>
          </li>
          <li>
            <CartLink></CartLink>
          </li>
        </ul>
      </div>
      {/* End Desktop */}
      {/* Hamburguer */}
      <div className='hamburger-container' onClick={() => setDdShow(!ddShow)}>
        <AiOutlineBars></AiOutlineBars>
      </div>
      {/* Sidebar */}
      <div className={`dropdown ${ddShow && 'dropdown-show'}`}>
        <ul className='dd-users' onClick={() => setDdShow(!ddShow)}>
          <li>
            <Link to='/login'>Log In</Link>
          </li>
          <li>
            <CartLink></CartLink>
          </li>
        </ul>
        <div className='dd-division'></div>
        <ul className='dd-links' onClick={() => setDdShow(!ddShow)}>
          <li>
            <Link to='/'>Home</Link>
          </li>

          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/products'>Le Pizze</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

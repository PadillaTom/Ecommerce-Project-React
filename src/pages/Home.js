import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import FeaturedProducts from '../components/Products/FeaturedProducts';

export default function Home() {
  return (
    <React.Fragment>
      <Hero>
        <Link to='/products' className='btn-hero'>
          Our Menu
        </Link>
      </Hero>
      <FeaturedProducts></FeaturedProducts>
    </React.Fragment>
  );
}

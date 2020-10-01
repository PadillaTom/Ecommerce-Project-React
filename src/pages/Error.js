import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h1>Oops! its a dead end.</h1>
        <Link to='/' className='error-btn-home'>
          Back to Home
        </Link>
      </div>
    </section>
  );
}

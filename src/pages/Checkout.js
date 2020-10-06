import React, { useState } from 'react';
import { CartContext } from '../context/cart';
import { UserContext } from '../context/user';
import { useHistory } from 'react-router-dom';
import EmptyCart from '../components/Cart/EmptyCart';
// React-Stripe Elements:

// Submit Order:
import submitOrder from '../strapi/submitOrder';

export default function Checkout(props) {
  // Destructure:
  const { cart, total, clearCart } = React.useContext(CartContext);
  const { user, showAlert, hideAlert, alert } = React.useContext(UserContext);
  // History
  const history = useHistory();
  // States:
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  // Empty Values:
  const isEmpty = !name || alert.show;

  // Handle Submit :
  async function handleSubmit(e) {
    e.preventDefault();
  }

  // Empty Cart:
  if (cart.lenght < 1) return <EmptyCart></EmptyCart>;
  // Main:
  return (
    <section className='checkout-section'>
      <div className='section-title'>
        <h2>Checkout</h2>
      </div>
      <form className='checkout-form'>
        <h3>
          Order Total: <span>${total}</span>
        </h3>
        {/* Single Input */}
        <div className='form-control'>
          <label htmlFor='name'>Complete Name</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        {/* End Single Input */}
        {/* Card Element */}
        <div className='stripe-input'>
          <label htmlFor='card-element'>Credit or Debit Card</label>
          <p className='stripe-info'>
            Test Values: <span>4242 4242 4242 4242</span>
            <br />
            Any 5 digit for ZIP Code
            <br />
            Any 3 Digits for the CVC
          </p>
        </div>
        {/* End Card Element */}
        {/* STRIPE Elements */}
        {/* End STRIPEElements */}
        {/* STRIPE Errors */}
        {error && <p className='form-empty'>{error}</p>}
        {/* Empty Values */}
        {isEmpty ? (
          <div className='form-btns-container'>
            <p className='form-empty'>Please fill out the Form</p>
          </div>
        ) : (
          <div className='form-btns-container'>
            <button type='submit' onClick={handleSubmit} className='btn-form'>
              Submit
            </button>
          </div>
        )}
      </form>
    </section>
  );
}

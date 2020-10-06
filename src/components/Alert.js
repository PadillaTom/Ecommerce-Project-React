import React from 'react';
import { FaWindowClose } from 'react-icons/fa';
import { UserContext } from '../context/user';

export default function Alert() {
  // Destructure:
  const { alert, hideAlert } = React.useContext(UserContext);

  // Css Variable:
  let css = 'alert-container';
  if (alert.show) {
    css += ' alert-show';
    if (alert.type === 'danger') {
      css += ' alert-danger';
    }
  }

  // Main:
  return (
    <div className={css}>
      {alert.show && (
        <div className='alert'>
          <p>{alert.msg}</p>
          <button className='btn-close-alert' onClick={hideAlert}>
            <FaWindowClose></FaWindowClose>
          </button>
        </div>
      )}
    </div>
  );
}

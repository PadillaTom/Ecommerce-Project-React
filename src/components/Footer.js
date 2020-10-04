import React from 'react';
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
export default function Footer() {
  return (
    <footer className='footer-section'>
      <div className='footer-center'>
        <div className='footer-info-light'>
          <div className='light-left'>
            <h6>
              <GoLocation></GoLocation> 288 Chemin de la Ramasse
            </h6>
            <h6>74160 Collonges Sous-Saleve</h6>
          </div>
          <div className='light-right'>
            <AiOutlineFacebook></AiOutlineFacebook>
            <AiOutlineInstagram></AiOutlineInstagram>
          </div>
        </div>
        <div className='footer-info-dark'>
          <p>+00 00 000 00 00</p>
          <p>LaBuonaPizza@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}

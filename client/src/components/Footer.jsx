import '../../src/index.css';
import { Facebook, Instagram, Twitter} from '../config/icons-export'
import React from 'react';


function Footer () {
  return (
    <div className="footer">
    <p>Contáctenos en: eventasia@gmail.com</p>
    <div className="social-media-links">

      <a href="https://www.facebook.com">
        <img src={Facebook} alt="Facebook" />
      </a>
      <a href="https://www.twitter.com">
        <img src={Twitter} alt="Twitter" />
      </a>
      <a href="https://www.instagram.com">
        <img src={Instagram} alt="Instagram" />
      </a>
    </div>
    <p>&copy; 2023 Todos los derechos reservados.</p>
  </div>
  )
}

export default Footer
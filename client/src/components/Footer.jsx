import '../../src/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

function Footer () {
  return (
    <div className="footer">
    <p>Contáctenos en: eventasia@gmail.com</p>
    <div className="social-media-links">
        <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
    </div>
    <p>&copy; 2023 Todos los derechos reservados.</p>
  </div>
  )
}

export default Footer
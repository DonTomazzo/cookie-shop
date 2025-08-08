// src/components/Footer.jsx
import React from 'react';
// src/components/Footer.jsx
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';
import './Footer.css'; // Kontrollera att sökvägen är korrekt
import NewsletterForm from '../components/NewsletterForm';

function Footer() {
  const pinkColor = '#d8428e';

  return (
    <footer className="footer-container">
      <div className="footer-grid">
        {/* Kolumn 1: Logotyp & Sociala medier */}
        <div className="footer-column logo-column">
          <div className="logo-container">
            <h2 className="logo-text">le macaron</h2>
            <div className="logo-dots">
              <span className="dot pink"></span>
              <span className="dot grey"></span>
              <span className="dot pink"></span>
            </div>
            <p className="logo-subtext">french pastries</p>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/ditt-användarnamn" aria-label="Facebook">
              <FaFacebook style={{ color: pinkColor }} />
            </a>
            <a href="https://www.instagram.com/ditt-användarnamn" aria-label="Instagram">
              <FaInstagram style={{ color: pinkColor }} />
            </a>
            <a href="https://www.linkedin.com/in/ditt-användarnamn" aria-label="LinkedIn">
              <FaLinkedinIn style={{ color: pinkColor }} />
            </a>
          </div>
        </div>

 {/* Kolumn 2: Platser */}
<div className="footer-column">
  <h4 style={{ color: pinkColor }}>Besök vår Macaronfabrik</h4>
  <iframe
    title="Karta över Macaronfabriken"
    width="100%"
    height="200"
    frameBorder="0"     // Ändrad från 'frameborder' till 'frameBorder'
    scrolling="no"
    marginHeight="0"   // Ändrad från 'marginheight' till 'marginHeight'
    marginWidth="0"    // Ändrad från 'marginwidth' till 'marginWidth'
    src="https://www.openstreetmap.org/export/embed.html?bbox=12.9904%2C55.5901%2C13.0039%2C55.5968&amp;layer=mapnik"
    style={{ border: '1px solid black' }}
  ></iframe>
  <p className="location-subtext">Varje dag mellan 9-16.</p>
</div>

        {/* Kolumn 3: Snabblänkar */}
        <div className="footer-column">
          <h4 style={{ color: pinkColor }}>Länkar</h4>
          <ul>
            <li><Link to="/about">Om oss</Link></li>
            <li><Link to="/products">Vår butik</Link></li>
            <li><Link to="/blog">Öppettider</Link></li>
            <li><Link to="/contact">Kontakta oss</Link></li>
          </ul>
        </div>

        {/* Kolumn 4: Nyhetsbrev - Ersätter Catering-sektionen */}
        <div className="footer-column">
          <NewsletterForm />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
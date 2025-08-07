// src/components/Footer.jsx
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaSearchLocation } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css'; // Kontrollera att sökvägen är korrekt

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
            <a href="#" aria-label="Facebook">
              <FaFacebook style={{ color: pinkColor }} />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram style={{ color: pinkColor }} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn style={{ color: pinkColor }} />
            </a>
          </div>
        </div>

        {/* Kolumn 2: Platser */}
        <div className="footer-column">
          <h4 style={{ color: pinkColor }}>Locations</h4>
          <div className="location-icon-container">
            <FaSearchLocation className="location-icon" style={{ color: pinkColor }} />
          </div>
          <p className="location-subtext">Locations by state.</p>
        </div>

        {/* Kolumn 3: Snabblänkar */}
        <div className="footer-column">
          <h4 style={{ color: pinkColor }}>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Kolumn 4: Catering */}
        <div className="footer-column">
          <h4 style={{ color: pinkColor }}>Catering</h4>
          <ul>
            <li><Link to="/catering/towers">Macaron Towers</Link></li>
            <li><Link to="/catering/corporate">Corporate Gifts</Link></li>
            <li><Link to="/catering/giftboxes">Gift Boxes</Link></li>
            <li><Link to="/catering/favors">Party Favors</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
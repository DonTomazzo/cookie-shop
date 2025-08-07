// src/components/Header.jsx
import React from 'react';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header({ onToggleMenu, cartItemCount, onToggleCart, cartIconRef }) {
  // Ändra sökvägen här!
  const logoSrc = '/images/logo.jpg'; 

  return (
    <header className="app-header">
      <div className="header-left">
        <button className="hamburger-icon" onClick={onToggleMenu}>
          <FaBars />
        </button>
      </div>
      <div className="header-logo">
        <Link to="/">
          <img src={logoSrc} alt="The Bakery Shop Logo" className="logo" />
        </Link>
        <span className="slogan">
  Nu byter vi namn. Munamii Bakery blir <span className="slogan-highlight">Le Macaron!</span>
</span>
      </div>
      <div className="header-right">
        <div className="cart-indicator" onClick={onToggleCart} ref={cartIconRef}>
          <FaShoppingCart />
          {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
        </div>
      </div>
    </header>
  );
}

export default Header;
// src/components/HamburgerMenu.jsx
import React from 'react';
import { FaTimes } from 'react-icons/fa'; // För stäng-ikonen

function HamburgerMenu({ isOpen, onClose }) {
  if (!isOpen) {
    return null; // Rendera inget om menyn inte är öppen
  }

  return (
    <div className="overlay" onClick={onClose}> {/* Stäng menyn om man klickar utanför */}
      <div className="overlay-content" onClick={e => e.stopPropagation()}> {/* Hindra klick från att stänga */}
        <button className="overlay-close-btn" onClick={onClose}>
          <FaTimes />
        </button>
        <nav>
          <ul>
            <li><a href="#home" onClick={onClose}>Hem</a></li>
            <li><a href="#shop" onClick={onClose}>Butik</a></li>
            <li><a href="#about" onClick={onClose}>Om Oss</a></li>
            <li><a href="#contact" onClick={onClose}>Kontakt</a></li>
            {/* Fler länkar kan läggas till här */}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default HamburgerMenu;
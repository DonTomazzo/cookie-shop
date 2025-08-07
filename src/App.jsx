// src/App.jsx
import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa'; // Importera FaTimes för stäng-knappen
import Header from './components/Header';
import HomePage from './components/HomePage';
import ShopPage from './components/ShopPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {
  // Här är alla dina states och refs, inklusive de nya för popupen
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
    const localData = localStorage.getItem('cartItems');
    return localData ? JSON.parse(localData) : [];
  });
  const [showCart, setShowCart] = useState(false);
  const [flyingProducts, setFlyingProducts] = useState([]);
  const cartIconRef = useRef(null);
  const [showVideoPopup, setShowVideoPopup] = useState(false); // NY: State för video-popup

  // Här är din produktlista, som är definierad en gång
 const products = [
  { id: 1, name: 'Lemon-lime', price: 25, description: 'En klassisk chokladkaka med rik smak.', image: '/images/collection1.jpg' },
  { id: 2, name: 'Björnbär', price: 20, description: 'Mördegskaka med hallonsylt.', image: '/images/collection2.jpg' }, // KORREKT
  { id: 3, name: 'Tripple Berry', price: 30, description: 'En stor och saftig kanelbulle.', image: '/images/collection3.jpg' }, // KORREKT
  { id: 4, name: 'Prenumerera', price: 22, description: 'Grön marsipanrulle med chokladdopp.', image: '/images/collection.jpg' },
  { id: 5, name: 'Prenumerera 2', price: 18, description: 'En knäckig och smörig kaka.', image: '/images/collection4.jpg' },
  { id: 6, name: 'Överraska på mammas dag', price: 28, description: 'Muffins med smak av sommar.', image: '/images/collection6.jpg' },
  { id: 4, name: 'Prenumerera', price: 22, description: 'Grön marsipanrulle med chokladdopp.', image: '/images/collection.jpg' },
  { id: 5, name: 'Prenumerera 2', price: 18, description: 'En knäckig och smörig kaka.', image: '/images/collection4.jpg' },
  { id: 6, name: 'Överraska på mammas dag', price: 28, description: 'Muffins med smak av sommar.', image: '/images/collection6.jpg' },
];

  // Här är alla dina useEffect-hooks, samlade på en plats
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => { // NY: useEffect för video-popup-timern
    const timer = setTimeout(() => {
      setShowVideoPopup(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Här är alla dina funktioner samlade på en plats
  const addToCart = (productToAdd) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === productToAdd.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...productToAdd, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (idToRemove) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== idToRemove));
  };

  const updateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const handleFlyToCart = (startX, startY, imageUrl) => {
    const flyingId = Date.now();
    setFlyingProducts((prev) => [
      ...prev,
      { id: flyingId, startX, startY, imageUrl },
    ]);

    if (cartIconRef.current) {
      const cartRect = cartIconRef.current.getBoundingClientRect();
      const endX = cartRect.x + cartRect.width / 2;
      const endY = cartRect.y + cartRect.height / 2;

      setTimeout(() => {
        setFlyingProducts((prev) => prev.filter((p) => p.id !== flyingId));
      }, 700);
    }
  };

  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
      <div className="App">
        {/* NY: Video-popup, renderas villkorligt */}
        {showVideoPopup && (
          <div className="video-popup-overlay">
            <div className="video-popup-container">
              <button className="video-popup-close-btn" onClick={() => setShowVideoPopup(false)}>
                &times;
              </button>
              <video className="popup-video" autoPlay muted loop playsInline>
                <source src="/videos/nameswitch.mp4" type="video/mp4" />
                Din webbläsare stöder inte video.
              </video>
            </div>
          </div>
        )}

        <Header
          isMobileMenuOpen={isMenuOpen}
          onToggleMenu={toggleMobileMenu}
          cartItemCount={totalCartItems}
          onToggleCart={toggleCart}
          cartIconRef={cartIconRef}
        />

        {isMenuOpen && <div className="mobile-nav-overlay" onClick={toggleMobileMenu}></div>}

        <nav className={`mobile-nav ${isMenuOpen ? 'mobile-nav-open' : ''}`}>
          <button className="menu-close-btn" onClick={toggleMobileMenu}>
            <FaTimes />
          </button>
          <ul>
            <li><Link to="/">Hem</Link></li>
            <li><Link to="/shop">Butik</Link></li>
            <li><Link to="/about">Om Oss</Link></li>
            <li><Link to="/contact">Kontakt</Link></li>
          </ul>
        </nav>

        {showCart && (
          <Cart
            cartItems={cartItems}
            onRemoveFromCart={removeFromCart}
            onUpdateQuantity={updateQuantity}
            onClose={toggleCart}
          />
        )}

        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={<HomePage onAddToCart={addToCart} onFlyToCart={handleFlyToCart} />}
            />
            <Route
              path="/shop"
              element={<ShopPage products={products} onAddToCart={addToCart} onFlyToCart={handleFlyToCart} />}
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />

        {flyingProducts.map((product) => (
          <img
            key={product.id}
            src={product.imageUrl}
            alt="flygande kaka"
            className="flying-product-animation"
            style={{
              left: product.startX,
              top: product.startY,
              width: '50px',
              height: '50px',
              objectFit: 'cover',
              borderRadius: '50%',
              transform: `translate(${
                (cartIconRef.current?.getBoundingClientRect().x || 0) +
                (cartIconRef.current?.getBoundingClientRect().width || 0) / 2 -
                product.startX
              }px, ${
                (cartIconRef.current?.getBoundingClientRect().y || 0) +
                (cartIconRef.current?.getBoundingClientRect().height || 0) / 2 -
                product.startY
              }px) scale(0.1)`,
              opacity: 0,
            }}
          />
        ))}
      </div>
    </Router>
  );
}

export default App;
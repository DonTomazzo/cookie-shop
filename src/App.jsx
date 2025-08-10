// src/App.jsx
import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa'; 
import Header from './components/Header';
import HomePage from './components/HomePage';
import ShopPage from './components/ShopPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import Cart from './components/Cart';

// Ny komponent för att hantera de flygande bilderna
const FlyingProduct = ({ startX, startY, imageUrl, cartRect, onAnimationEnd }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Starta animationen efter en kort fördröjning för att React ska hinna rendera startpositionen.
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 10);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <img
      src={imageUrl}
      alt="flygande produkt"
      className="flying-product"
      onTransitionEnd={onAnimationEnd}
      style={{
        left: startX,
        top: startY,
        transform: isAnimating
          ? `translate(${cartRect.x - startX}px, ${cartRect.y - startY}px) scale(0.1)`
          : 'translate(0, 0) scale(1)',
        opacity: isAnimating ? 0 : 1,
      }}
    />
  );
};


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
    const localData = localStorage.getItem('cartItems');
    return localData ? JSON.parse(localData) : [];
  });
  const [showCart, setShowCart] = useState(false);
  const [flyingProducts, setFlyingProducts] = useState([]);
  const cartIconRef = useRef(null);
  const [showVideoPopup, setShowVideoPopup] = useState(false);
  // NYTT: State för puls-effekt på varukorgen
  const [isCartPulsing, setIsCartPulsing] = useState(false); 

  const products = [
    { id: 1, name: 'Lemon-lime', price: 25, description: 'En klassisk macaron med rik smak.', image: '/images/collection1.jpg' },
    { id: 2, name: 'Björnbär', price: 20, description: 'Passar som efterrätt.', image: '/images/collection2.jpg' },
    { id: 3, name: 'Tripple Berry', price: 30, description: 'Tre smaker i en.', image: '/images/collection3.jpg' },
    { id: 4, name: 'Prenumerera', price: 22, description: 'Missa aldrig en macaron.', image: '/images/collection.jpg' },
    { id: 5, name: 'Prenumerera 2', price: 18, description: 'En låda som räcker hela veckan.', image: '/images/collection4.jpg' },
    { id: 6, name: 'Överraska på mammas dag', price: 28, description: 'Uppvakta med macarons', image: '/images/collection6.jpg' },
  ];

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => { 
    const timer = setTimeout(() => {
      setShowVideoPopup(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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
  // Spela upp swoosh-ljudet här
  try {
    const swooshSound = new Audio('/swoosh.mp3');
    swooshSound.play();
  } catch (error) {
    console.error("Kunde inte spela upp ljudet:", error);
  }

  const flyingId = Date.now();
  const cartRect = cartIconRef.current.getBoundingClientRect();

  setFlyingProducts((prev) => [
    ...prev,
    { id: flyingId, startX, startY, imageUrl, cartRect },
  ]);

  // Aktivera puls-effekten när animationen startar
  setIsCartPulsing(true);
  // Stäng av den igen efter animationens tid (600ms + lite extra)
  setTimeout(() => {
    setIsCartPulsing(false);
  }, 700);
};

  const removeFlyingProduct = (id) => {
    setFlyingProducts((prev) => prev.filter(p => p.id !== id));
  };

  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
      <div className="App">
        {showVideoPopup && (
          <div className="video-popup-overlay">
            <div className="video-popup-container">
              <button className="video-popup-close-btn" onClick={() => setShowVideoPopup(false)}>
                &times;
              </button>
              <video className="popup-video" autoPlay muted loop playsInline>
                <source src="/videos/mac.mp4" type="video/mp4" />
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
          // NYTT: Skicka med className för puls-effekten
          className={isCartPulsing ? 'cart-pulse' : ''} 
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
          <FlyingProduct
            key={product.id}
            startX={product.startX}
            startY={product.startY}
            imageUrl={product.imageUrl}
            cartRect={product.cartRect}
            onAnimationEnd={() => removeFlyingProduct(product.id)}
          />
        ))}
      </div>
    </Router>
  );
}

export default App;
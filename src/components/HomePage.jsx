// src/pages/HomePage.jsx
import React from 'react';
import ProductCard from '../components/ProductCard'; // Importera ProductCard

function HomePage({ onAddToCart, onFlyToCart }) {
  // Här definierar du din produktlista.
  const products = [
    { 
      id: 1, 
      name: 'Erbjudande Mammas dag', 
      description: 'En hel kartong med kärlek.', 
      price: 25, 
      image: '/images/collection6.jpg' 
    },
    { 
      id: 2, 
      name: 'Prenumerera', 
      description: 'Godsaker varje månad.', 
      price: 18, 
      image: '/images/collection4.jpg' 
    },
    { 
      id: 3, 
      name: 'Företagspaket', 
      description: 'Höj trivseln med socker.', 
      price: 22, 
      image: '/images/collection6.jpg' 
    },
       { 
      id: 4, 
      name: 'Bröllop?', 
      description: 'Varför inte beställa vår Macarontårta.', 
      price: 22, 
      image: '/images/collection7.jpg' 
    },
    // Lägg till fler produkter här
  ];

  return (
    <div>
      <div className="homepage-greeting">
    <h2>Välkommen till The Bakery Shop!</h2>
    
    </div>
      
      {/* Här är din produktgrid som använder ProductCard direkt */}
      <div className="products-grid">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart}
            onFlyToCart={onFlyToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
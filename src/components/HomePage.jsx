// src/pages/HomePage.jsx
import React from 'react';
import ProductCard from '../components/ProductCard'; // Importera ProductCard

function HomePage({ onAddToCart, onFlyToCart }) {
  // Här definierar du din produktlista.
  const products = [
    { 
      id: 1, 
      name: 'Chokladkaka', 
      description: 'En rik och fyllig chokladkaka med mörk choklad.', 
      price: 25, 
      image: '/images/chokladkaka.jpg' 
    },
    { 
      id: 2, 
      name: 'Kanelbulle', 
      description: 'En klassisk svensk kanelbulle med pärlsocker.', 
      price: 18, 
      image: '/images/kanelbulle.jpg' 
    },
    { 
      id: 3, 
      name: 'Wienerbröd', 
      description: 'Spröda wienerbröd med vaniljkräm.', 
      price: 22, 
      image: '/images/wienerbrod.jpg' 
    },
    // Lägg till fler produkter här
  ];

  return (
    <div>
      <h2>Välkommen till The Bakery Shop!</h2>
      <p>Detta är startsidan.</p>
      
      {/* Här är din produktgrid som använder ProductCard direkt */}
      <div className="product-grid">
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
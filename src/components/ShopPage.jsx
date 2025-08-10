// src/components/ShopPage.jsx
import React from 'react';
import ProductCard from './ProductCard';

// Ändra här: Lägg till onFlyToCart som en prop
function ShopPage({ products, onAddToCart, onFlyToCart }) { 
  return (
    <div className="shop-page">
      <h2>Våra bakverk</h2>
      <section className="products-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            // Ändra här: Skicka onFlyToCart vidare till ProductCard
            onFlyToCart={onFlyToCart} 
          />
        ))}
      </section>
    </div>
  );
}

export default ShopPage;
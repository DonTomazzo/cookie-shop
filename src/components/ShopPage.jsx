// src/components/ShopPage.jsx
import React from 'react';
import ProductCard from './ProductCard'; // Se till att sökvägen är rätt

function ShopPage({ products, onAddToCart }) {
  return (
    <div className="shop-page">
      <h2>Våra Ljuvliga Kakor</h2>
      {/* HÄR MÅSTE PRODUCTS-GRID VARA RUNT DINA PRODUKTER */}
      <section className="products-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </section>
    </div>
  );
}

export default ShopPage;
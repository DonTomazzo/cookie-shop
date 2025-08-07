// src/components/ProductCard.jsx
import React, { useRef } from 'react'; // IMPORTEN MÅSTE VARA LÄNGST UPP I FILEN

function ProductCard({ product, onAddToCart, onFlyToCart }) {
  const productImageRef = useRef(null); // Skapa en ref för bilden

  const handleAddToCart = () => {
    // Kontrollera om onFlyToCart är definierad innan den anropas
    if (productImageRef.current && onFlyToCart) {
      const rect = productImageRef.current.getBoundingClientRect();
      onFlyToCart(rect.x, rect.y, product.image); // product.image ska redan vara den korrekta absoluta sökvägen (/images/...)
    }
    onAddToCart(product); // Anropa den vanliga onAddToCart-funktionen
  };

  return (
    <div className="product-card">
      <img
        src={product.image} // Denna 'product.image' kommer från products-arrayen i App.jsx
        alt={product.name}
        ref={productImageRef} // Koppla ref till bilden
      />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="price">{product.price} kr</p>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Lägg i varukorgen
      </button>
    </div>
  );
}

export default ProductCard; // export default ska vara sist i filen
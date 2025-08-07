// src/components/Cart.jsx
import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';

function Cart({ cartItems, onRemoveFromCart, onClearCart }) {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h2>Din Varukorg</h2>
        <p className="empty-cart-message">Varukorgen är tom.</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Din Varukorg</h2>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <div className="cart-item-info">
            <h4>{item.name}</h4>
            <p>{item.price} kr x <span className="cart-item-quantity">{item.quantity}</span></p>
          </div>
          <button className="cart-item-remove-btn" onClick={() => onRemoveFromCart(item.id)}>
            <FaTimesCircle /> Ta bort
          </button>
        </div>
      ))}
      <div className="cart-total">
        Totalt: {total} kr
      </div>
      <button className="checkout-button" onClick={onClearCart}>
        Gå till Kassan (Fejkad)
      </button>
    </div>
  );
}

export default Cart;
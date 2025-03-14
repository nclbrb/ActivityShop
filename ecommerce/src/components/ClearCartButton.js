import React from 'react';
import '../App.css';

const ClearCartButton = ({ clearCart }) => (
  <button onClick={clearCart} className="clear-cart-button">
    Clear Cart
  </button>
);

export default ClearCartButton;

import React from 'react';
import '../App.css';

const AddToCartButton = ({ product, onAddToCart }) => (
  <button onClick={() => onAddToCart(product)} className="add-to-cart-button">
    Add to Cart
  </button>
);

export default AddToCartButton;

import React from 'react';
import '../App.css';

const RemoveFromCartButton = ({ onRemove }) => (
  <button onClick={onRemove} className="remove-from-cart-button">
    Remove
  </button>
);

export default RemoveFromCartButton;

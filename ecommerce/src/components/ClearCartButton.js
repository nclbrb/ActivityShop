import React from 'react';

const ClearCartButton = ({ clearCart }) => (
  <button
    onClick={clearCart}
    style={{
      padding: '10px 20px',
      backgroundColor: '#ff4d4d',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontFamily: 'Outfit',
      marginTop: '15px',
    }}
  >
    Clear Cart
  </button>
);

export default ClearCartButton;

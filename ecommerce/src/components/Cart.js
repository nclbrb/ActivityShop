import React from 'react';

const Cart = ({ cart, total, updateQuantity, removeFromCart }) => (
  <div style={{ 
    marginTop: '20px',
    textAlign: 'center',
    width: '60%',  // Full-width design
    maxWidth: '60%',  // Ensures maximum expansion
    marginLeft: 'auto',
    marginRight: 'auto',
    border: '1px solid #ddd',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
    backgroundColor: '#f9f9f9'
  }}> 
    <h2>Shopping Cart</h2>
    {cart.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <div>
        {cart.map((item, index) => (
          <div 
            key={index} 
            style={{ 
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '15px 40px',  // Wider spacing for a larger layout
              borderBottom: '1px solid #ddd'
            }}
          >
            <p style={{ flex: 1, textAlign: 'left', fontWeight: 'bold' }}>
              {item.name} - ₱{item.price * item.quantity}
            </p>
            <div>
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
              <span style={{ margin: '0 15px' }}>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              <button 
                onClick={() => removeFromCart(item.id)}
                style={{
                  marginLeft: '15px',
                  backgroundColor: '#ff4d4d',
                  color: '#fff',
                  borderRadius: '4px'
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <h3 style={{ textAlign: 'right', marginRight: '40px' }}>Total: ₱{total}</h3>
      </div>
    )}
  </div>
);

export default Cart;

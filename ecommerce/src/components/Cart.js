import React, { Component } from 'react';

class Cart extends Component {
  state = {
    totalPrice: 0,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.cart !== this.props.cart) {
      this.calculateTotal();
    }
  }

  calculateTotal = () => {
    const total = this.props.cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    this.setState({ totalPrice: total });
  };

  handleClearCart = () => {
    this.props.onClearCart();
    this.setState({ totalPrice: 0 });
  };

  render() {
    const { cart, onRemoveItem } = this.props;
    const { totalPrice } = this.state;
    return (
      <div
        className="cart"
        style={{
          marginTop: '-5px',
          textAlign: 'center',
          width: '60%',
          maxWidth: '60%',
          marginLeft: 'auto',
          marginRight: 'auto',
          border: '1px solid #ddd',
          borderRadius: '4px',
          padding: '15px',
          fontFamily: 'Outfit'
        }}
      >
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cart.map((item) => (
              <li
                key={item.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '10px 20px',
                  marginTop: '-10px',
                  marginBottom: '-10px',
                  borderBottom: '1px solid #ddd',
                  fontFamily: 'Outfit'
                }}
              >
                <span style={{ flex: 1, textAlign: 'left' }}>
                  {item.name} - <span style={{ fontWeight: 'bold' }}>₱{(item.price * item.quantity).toFixed(2)}</span>
                </span>
                <button
                  onClick={() => onRemoveItem(item.id)}
                  style={{
                    padding: '5px 10px',
                    backgroundColor: '#ff4d4d',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginLeft: '15px',
                    fontFamily: 'Outfit'
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <div>
          <h3 style={{ textAlign: 'right', marginRight: '40px' }}>Total: ₱{totalPrice.toFixed(2)}</h3>
          <button
            onClick={this.handleClearCart}
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
        </div>
      </div>
    );
  }
}

export default Cart;
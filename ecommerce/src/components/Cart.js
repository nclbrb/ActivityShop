import React, { Component } from 'react';
import RemoveFromCartButton from './RemoveFromCartButton';
import ClearCartButton from './ClearCartButton';
import '../App.css';

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
    const { cart, onRemoveItem, updateQuantity } = this.props;
    const { totalPrice } = this.state;
    return (
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <p className="cart-item-info">
                  {item.name} - <span className="bold">₱{(item.price * item.quantity).toFixed(2)}</span>
                </p>
                <div>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span className="cart-item-quantity">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    +
                  </button>
                  <RemoveFromCartButton onRemove={() => onRemoveItem(item.id)} />
                </div>
              </div>
            ))}
            <h3 className="cart-total">
              Total: ₱{totalPrice.toFixed(2)}
            </h3>
          </div>
        )}
        <ClearCartButton clearCart={this.handleClearCart} />
      </div>
    );
  }
}

export default Cart;

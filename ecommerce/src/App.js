import React, { Component } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

class App extends Component {
  state = {
    cart: []
  };

  addToCart = (product) => {
    const existingItem = this.state.cart.find((item) => item.id === product.id);

    if (existingItem) {
      this.setState((prevState) => ({
        cart: prevState.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }));
    } else {
      this.setState((prevState) => ({
        cart: [...prevState.cart, { ...product, quantity: 1 }]
      }));
    }

  };

  updateQuantity = (id, newQuantity) => {
    this.setState((prevState) => ({
      cart: prevState.cart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    }));
  };

  removeFromCart = (id) => {
    this.setState((prevState) => ({
      cart: prevState.cart.filter((item) => item.id !== id)
    }));
  };

  calculateTotal = () => {
    return this.state.cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>Bulgatton Clothing</h1>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ProductList addToCart={this.addToCart} />
          <Cart 
            cart={this.state.cart} 
            total={this.calculateTotal()} 
            updateQuantity={this.updateQuantity} 
            removeFromCart={this.removeFromCart}
          />
        </div>
      </div>
    );
  }
}

export default App;

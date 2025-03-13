import React, { Component } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ClearCartButton from './components/ClearCartButton';

class App extends Component {
  state = {
    cart: [],
    total: 0
  };

  componentDidMount() {
    this.calculateTotal();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.cart !== this.state.cart) {
      this.calculateTotal();
    }
  }

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

  clearCart = () => {
    this.setState({ cart: [] });
  };

  calculateTotal = () => {
    const total = this.state.cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    this.setState({ total });
  };

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1 style={{ marginBottom: '-15px', fontFamily: 'Outfit' }}>Bulgatton Clothing</h1>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ProductList addToCart={this.addToCart} />
          <Cart
            cart={this.state.cart}
            total={this.state.total}
            updateQuantity={this.updateQuantity}
            removeFromCart={this.removeFromCart}
          />
          <ClearCartButton clearCart={this.clearCart} />
        </div>
      </div>
    );
  }
}

export default App;

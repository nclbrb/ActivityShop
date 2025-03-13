import React, { Component } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const products = [
  { id: 1, name: 'Black T-Shirt', price: 1000 },
  { id: 2, name: 'White T-Shirt', price: 1500 },
  { id: 3, name: 'Denim', price: 2000 },
  { id: 4, name: 'Leather', price: 3000 }
];

class App extends Component {
  state = {
    products: [],
    cart: [],
  };

  componentDidMount() {
    this.setState({ products });
  }

  handleAddToCart = (product) => {
    const { cart } = this.state;
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      this.setState({
        cart: cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      });
    } else {
      this.setState({
        cart: [...cart, { ...product, quantity: 1 }],
      });
    }
  };

  handleRemoveItem = (id) => {
    this.setState((prevState) => ({
      cart: prevState.cart.filter((item) => item.id !== id),
    }));
  };

  handleClearCart = () => {
    this.setState({ cart: [] });
  };

  render() {
    const { products, cart } = this.state;
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1 style={{ marginBottom: '-15px', fontFamily: 'Outfit' }}>Bulgatton Clothing</h1>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ProductList products={products} addToCart={this.handleAddToCart} />
          <Cart 
            cart={cart} 
            onRemoveItem={this.handleRemoveItem} 
            onClearCart={this.handleClearCart} 
          />
        </div>
      </div>
    );
  }
}

export default App;
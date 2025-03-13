import React, { Component } from 'react';
import ProductList from './components/ProductList';

class App extends Component {
  addToCart = (product) => {
    console.log('Added to cart:', product);
    alert(`${product.name} was added to the cart!`);
  };

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>Bulgatton Clothing</h1>
        <ProductList addToCart={this.addToCart} />
      </div>
    );
  }
}

export default App;
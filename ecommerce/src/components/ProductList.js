import React, { Component } from 'react';
import black from '../images/black.jpg';
import white from '../images/white.jpg';
import denim from '../images/denim.jpg';
import leather from '../images/leather.jpg';

class ProductList extends Component {
  state = {
    searchQuery: '',
    products: [
      { id: 1, name: 'Black T-Shirt', price: 1000, image: black },
      { id: 2, name: 'White T-Shirt', price: 1500, image: white },
      { id: 3, name: 'Denim', price: 2000, image: denim },
      { id: 4, name: 'Leather', price: 3000, image: leather }
    ]
  };

  handleSearch = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  render() {
    const filteredProducts = this.state.products.filter(product =>
      product.name.toLowerCase().includes(this.state.searchQuery.toLowerCase())
    );

    return (
      <div style={{ textAlign: 'center' }}>
        <h2>Product List</h2>
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search products..."
          value={this.state.searchQuery}
          onChange={this.handleSearch}
          style={{ marginBottom: '20px', padding: '8px', width: '300px' }}
        />
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          {filteredProducts.map((product) => (
            <div key={product.id} style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
              <img src={product.image} alt={product.name} style={{ width: '200px', height: '230px' }} />
              <h3>{product.name}</h3>
              <p>₱{product.price}</p>
              <button onClick={() => this.props.addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductList;

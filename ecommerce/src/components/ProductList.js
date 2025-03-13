import React, { Component } from 'react';
import black from '../images/black.jpg';
import white from '../images/white.jpg';
import denim from '../images/denim.jpg';
import leather from '../images/leather.jpg';
import SearchBar from './SearchBar'; 

class ProductList extends Component {
  state = {
    searchQuery: '',
    products: []
  };

  componentDidMount() {
    const simulatedProducts = [
      { id: 1, name: 'Black T-Shirt', price: 1000, image: black },
      { id: 2, name: 'White T-Shirt', price: 1500, image: white },
      { id: 3, name: 'Denim', price: 2000, image: denim },
      { id: 4, name: 'Leather', price: 3000, image: leather }
    ];
    this.setState({ products: simulatedProducts });
  }

  handleSearch = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  render() {
    const filteredProducts = this.state.products.filter(product =>
      product.name.toLowerCase().includes(this.state.searchQuery.toLowerCase())
    );

    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1 style={{ marginBottom: '-15px', fontFamily: 'Outfit' }}>Bulgatton Clothing</h1>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h2 style={{ marginBottom: '15px', fontSize: '20px', fontFamily: 'Outfit' }}>
          Product List
        </h2>
        <SearchBar 
          searchQuery={this.state.searchQuery} 
          onSearchChange={this.handleSearch}
        />
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                border: '1px solid #ddd',
                padding: '10px',
                borderRadius: '5px',
                marginBottom: '10px'
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '200px', height: '230px', objectFit: 'cover' }}
              />
              <h3 style={{ margin: '5px 0', fontSize: '16px', fontFamily: 'Outfit' }}>{product.name}</h3>
              <p style={{ margin: '5px 0', fontSize: '14px', fontFamily: 'Outfit' }}>₱{product.price}</p>
              <button
                onClick={() => this.props.addToCart(product)}
                style={{
                  padding: '5px 10px',
                  fontSize: '14px',
                  backgroundColor: '#28a745',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontFamily: 'Outfit'
                }}
              >Add to Cart
              </button>
              
            </div>
          ))}
          </div>
        </div>
      </div>
    );
  }
  
}

export default ProductList;

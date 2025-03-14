import React, { Component } from 'react';
import SearchBar from './SearchBar';
import AddToCartButton from './AddToCartButton';
import '../App.css';

class ProductList extends Component {
  state = {
    searchQuery: '',
  };

  handleSearch = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  render() {
    const { searchQuery } = this.state;
    const { products, addToCart } = this.props;

    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="product-list-container">
        <h1 className="brand-title">Bulgatton Clothing</h1>
        <div className="product-list-wrapper">
          <h2 className="product-list-heading">Product List</h2>
          <SearchBar 
            searchQuery={searchQuery} 
            onSearchChange={this.handleSearch}
          />
          <div className="products-wrapper">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-item">
                <img src={product.image} alt={product.name} className="product-image" />
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">₱{product.price}</p>
                <AddToCartButton product={product} onAddToCart={addToCart} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;

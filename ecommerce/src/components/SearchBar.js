import React from 'react';
import '../App.css';

const SearchBar = ({ searchQuery, onSearchChange }) => (
  <input
    type="text"
    placeholder="Search products..."
    value={searchQuery}
    onChange={onSearchChange}
    className="search-bar"
  />
);

export default SearchBar;

// components/SearchBar.js
import React from 'react';

const SearchBar = ({ searchQuery, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={searchQuery} // searchQuery is used here
      onChange={onSearchChange}
      style={{
        marginBottom: '15px',
        padding: '8px',
        width: '300px',
        borderRadius: '10px'
      }}
    />
  );
};

export default SearchBar;

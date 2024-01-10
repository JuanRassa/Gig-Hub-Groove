import React from 'react';

function SearchBar({ onSearchChange }) {
  return (
    <div>
      <p>Search</p>
      <input
        type='text'
        placeholder='search..'
        onChange={e => onSearchChange(e.target.value)}
      ></input>
    </div>
  );
}

export default SearchBar;

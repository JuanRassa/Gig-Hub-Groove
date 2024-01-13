import React from 'react';
import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  // const handleSearch = term => {
  //   setSearchTerm(term);
  // };

  return (
    <div>
      <p>Search</p>
      <input
        type='text'
        placeholder='search..'
        value={searchTerm}
        onChange={e => onSearchTerm(e.target.value)}
      ></input>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;

import React from 'react';
import { useState } from 'react';

function SearchBar({ allIndependent, setShowIndependent }) {
  const [search, setSearch] = useState('');

  const searchedEvents = query => {
    const filteredIndependent = allIndependent.filter(event => {
      const eventNameMatches = event.name
        .toLowerCase()
        .includes(query.toLowerCase());

      const performerMatches = event.performer.some(performer =>
        performer.name.toLowerCase().includes(query.toLowerCase())
      );

      return eventNameMatches || performerMatches;
    });
    console.log('filteredIndependent', filteredIndependent);
    setShowIndependent(filteredIndependent);
  };

  const handleSearch = e => {
    setSearch(e.target.value);
    searchedEvents(e.target.value);
  };

  return (
    <div>
      <p>Search</p>
      <input
        type='text'
        placeholder='search..'
        value={search}
        onChange={handleSearch}
      ></input>
      {/* <button onClick={handleSearch}>Search</button> */}
    </div>
  );
}

export default SearchBar;

import React from 'react';
import { useState } from 'react';
import { Input, Stack, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

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
    <Stack spacing='4'>
      <InputGroup>
        <InputLeftElement pointerEvents='none'>
          <Search2Icon color='#FDF8F2' margin='18px 0px 0px 500px' />
        </InputLeftElement>
        <Input
          margin='10px 250px 30px 250px'
          type='text'
          placeholder='search..'
          value={search}
          onChange={handleSearch}
          color='#FDF8F2'
        ></Input>
        {/* <button onClick={handleSearch}>Search</button> */}
      </InputGroup>
    </Stack>
  );
}

export default SearchBar;

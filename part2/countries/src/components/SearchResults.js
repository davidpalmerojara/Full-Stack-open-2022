import React from 'react';
import SearchResult from './SearchResult';

const SearchResults = ({ filteredCountries, setFilteredCountries }) => {
  return (
    <div className="mt-2 bg-white">
      {filteredCountries.map((country) => (
        <SearchResult
          key={country?.name.common}
          country={country}
          setFilteredCountries={setFilteredCountries}
        />
      ))}
    </div>
  );
};

export default SearchResults;

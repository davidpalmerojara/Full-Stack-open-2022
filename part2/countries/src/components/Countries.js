import Country from './Country';
import SearchResult from './SearchResult';

const Countries = ({ filteredCountries, setFilteredCountries }) => {
  return (
    <div>
      {filteredCountries.map((country) => {
        return filteredCountries.length === 1 ? (
          <Country key={country?.name.common} country={country} />
        ) : (
          <SearchResult
            key={country?.name.common}
            country={country}
            setFilteredCountries={setFilteredCountries}
          />
        );
      })}
    </div>
  );
};

export default Countries;

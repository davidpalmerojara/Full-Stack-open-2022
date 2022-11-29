const SearchResult = ({ country, setFilteredCountries }) => {
  return (
    <div>
      <p key={country.name.common}>{country.name.common}</p>
      <button
        onClick={() => {
          setFilteredCountries([country]);
        }}
      >
        show
      </button>
    </div>
  );
};

export default SearchResult;

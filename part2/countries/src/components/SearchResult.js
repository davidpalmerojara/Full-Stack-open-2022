const SearchResult = ({ country, setFilteredCountries }) => {
  return (
    <div className="">
      <div className="flex p-4 justify-between w-full ">
        <div className="flex gap-2 items-center">
          <img src={country?.flags.png} className="h-5" alt="flag"></img>
          {country.name.common.length > 29 ? (
            <p key={country.name.common}>
              {country.name.common.slice(0, 20)}...
            </p>
          ) : (
            <p key={country.name.common}>{country.name.common}</p>
          )}
        </div>
        <button
          className="text-blue-600"
          onClick={() => {
            setFilteredCountries([country]);
          }}
        >
          show
        </button>
      </div>
    </div>
  );
};

export default SearchResult;

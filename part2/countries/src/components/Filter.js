const Filter = ({ setFilteredCountries, countries }) => {
  const handleInput = (e) => {
    setFilteredCountries(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };
  return (
    <div>
      find countries <input onChange={handleInput}></input>
    </div>
  );
};

export default Filter;

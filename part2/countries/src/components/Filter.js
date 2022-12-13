const Filter = ({ setFilteredCountries, countries }) => {
  const handleInput = (e) => {
    setFilteredCountries(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    if (e.target.value === '') setFilteredCountries([]);
  };
  return (
    <div className="flex">
      <form className="">
        <input
          placeholder="Search country..."
          className="border border-gray-400 rounded-md py-2 m-0 pr-32 pl-10"
          onChange={handleInput}
        ></input>
      </form>
    </div>
  );
};

export default Filter;

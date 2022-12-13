const CountryInfo = ({ country }) => {
  return (
    <div className="bg-white border-grey-300 rounded-md rounded-tr-none rounded-br-none">
      <div>
        <img
          src={country?.flags.png}
          className="w-full border-grey-300 rounded-md rounded-b-none rounded-tr-none"
          alt="flag"
        ></img>
      </div>
      <div className="p-2">
        <h1 className="px-2 py-2 font-bold text-2xl uppercase">
          {country?.name.common}
        </h1>
        <ul>
          <div className="flex justify-start  text-gray-700 rounded-md px-2 py-2 my-2">
            <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
            <div className="flex-grow font-medium px-2">Capital</div>
            <div className="text-sm font-normal text-gray-500 tracking-wide">
              {country?.capital}
            </div>
          </div>
          <div className="flex justify-start  text-gray-700 rounded-md px-2 py-2 my-2">
            <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
            <div className="flex-grow font-medium px-2">Population</div>
            <div className="text-sm font-normal text-gray-500 tracking-wide">
              {country?.population}
            </div>
          </div>
          <h2 className="font-bold text-lg px-2">Languages</h2>
          <ul>
            {Object.values(country?.languages).map((language) => {
              return (
                <div
                  key={language}
                  className="flex justify-start text-gray-700 rounded-md px-2 py-2 my-2"
                >
                  <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
                  <div className="flex-grow font-medium px-2">{language}</div>
                </div>
              );
            })}
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default CountryInfo;

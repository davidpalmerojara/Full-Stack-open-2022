import { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import Countries from './components/Countries';
import Country from './components/Country';
import SearchResult from './components/SearchResult';
import SearchResults from './components/SearchResults';

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((res) => {
      setCountries(res.data);
    });
  }, []);

  return (
    <div className="bg-background bg-cover h-screen">
      <nav className="w-full bg-gray-100 p-4 border-b border-gray-400">
        <h1 className="text-xl text-black font-bold">CountryFinder</h1>
      </nav>
      <div className="flex flex-col p-4 pt-20 items-center align-center">
        <h1 className="text-6xl p-4 pb-8 font-bold">
          Find country stats and weather!
        </h1>
        <div className="flex flex-col">
          <Filter
            setFilteredCountries={setFilteredCountries}
            countries={countries}
          />
          {filteredCountries.length > 10 && (
            <div className="flex p-4 mt-2 justify-between bg-white w-full">
              <p className="text-center">
                Too many matches, specify another filter
              </p>
            </div>
          )}
          {filteredCountries.length !== 1 && filteredCountries.length <= 10 && (
            <SearchResults
              filteredCountries={filteredCountries}
              setFilteredCountries={setFilteredCountries}
            />
          )}
        </div>
        {filteredCountries.length === 1 && (
          <div>
            {filteredCountries.map((country) => (
              <Country key={country?.name.common} country={country} />
            ))}
            )
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

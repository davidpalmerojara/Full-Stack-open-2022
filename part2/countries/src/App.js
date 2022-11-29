import { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import Countries from './components/Countries';

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((res) => {
      setCountries(res.data);
    });
  }, []);

  return (
    <div>
      <Filter
        setFilteredCountries={setFilteredCountries}
        countries={countries}
      />
      {filteredCountries.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : (
        <Countries
          filteredCountries={filteredCountries}
          setFilteredCountries={setFilteredCountries}
        />
      )}
    </div>
  );
}

export default App;

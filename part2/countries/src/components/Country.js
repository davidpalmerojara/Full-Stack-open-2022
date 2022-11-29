import CountryInfo from './CountryInfo';
import Weather from './Weather';

const Country = ({ country }) => {
  return (
    <div>
      <CountryInfo country={country} />
      <Weather country={country} />
    </div>
  );
};

export default Country;

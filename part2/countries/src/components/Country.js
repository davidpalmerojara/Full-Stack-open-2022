import CountryInfo from './CountryInfo';
import Weather from './Weather';

const Country = ({ country }) => {
  return (
    <div className="flex my-10 rounded-md border-grey-400">
      <CountryInfo country={country} />
      <Weather country={country} />
    </div>
  );
};

export default Country;

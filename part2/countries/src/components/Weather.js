import { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ country }) => {
  const [weather, setWeather] = useState(null);
  const compass = [
    'N',
    'NNE',
    'NE',
    'ENE',
    'E',
    'ESE',
    'SE',
    'SSE',
    'S',
    'SSW',
    'SW',
    'WSW',
    'W',
    'WNW',
    'NW',
    'NNW',
    'N',
  ];

  const lat = country.capitalInfo.latlng[0];
  const lon = country.capitalInfo.latlng[1];
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
      )
      .then((res) => {
        setWeather(res.data);
      });
  }, [apiKey, lat, lon]);

  return (
    <div>
      <h3>Weather in {country?.capital}</h3>

      {weather && (
        <img
          src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
          alt="weather icon"
        />
      )}
      <h5>temperature: {weather?.main.temp}ºC</h5>
      <h5>
        wind: {weather?.wind.speed}KM/H {weather?.wind.deg}{' '}
        {compass[parseInt(weather?.wind.deg / 16, 10)]}
      </h5>
    </div>
  );
};

export default Weather;

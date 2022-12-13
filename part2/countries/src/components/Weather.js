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
    <div className="p-10 bg-white border-grey-300 rounded-md rounded-l-none">
      <h2 className="px-2 font-bold text-lg">Weather in {country?.capital}</h2>

      {weather && (
        <img
          className="mx-auto"
          src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
          alt="weather icon"
        />
      )}
      <ul>
        <div className="flex justify-start  text-gray-700 rounded-md px-2 py-2 my-2">
          <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
          <div className="flex-grow font-medium px-2">Temperature</div>
          <div className="text-sm font-normal text-gray-500 tracking-wide">
            {weather?.main.temp}ºC
          </div>
        </div>
        <div className="flex justify-start  text-gray-700 rounded-md px-2 py-2 my-2">
          <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
          <div className="flex-grow font-medium px-2">Max</div>
          <div className="text-sm font-normal text-gray-500 tracking-wide">
            {weather?.main.temp_max}ºC
          </div>
        </div>
        <div className="flex justify-start  text-gray-700 rounded-md px-2 py-2 my-2">
          <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
          <div className="flex-grow font-medium px-2">Min</div>
          <div className="text-sm font-normal text-gray-500 tracking-wide">
            {weather?.main.temp_min}ºC
          </div>
        </div>
        <div className="flex justify-start  text-gray-700 rounded-md px-2 py-2 my-2">
          <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
          <div className="flex-grow font-medium px-2">Wind</div>
          <div className="text-sm font-normal text-gray-500 tracking-wide">
            {weather?.wind.speed}KM/H {weather?.wind.deg}{' '}
            {compass[parseInt(weather?.wind.deg / 16, 10)]}
            {console.log(weather)}
          </div>
        </div>
        <div className="flex justify-start  text-gray-700 rounded-md px-2 py-2 my-2">
          <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
          <div className="flex-grow font-medium px-2">Humidity</div>
          <div className="text-sm font-normal text-gray-500 tracking-wide">
            {weather?.main.humidity}g/m3
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Weather;

import React from 'react';
import { Link } from 'react-router-dom';

const CurrentWeather = ({weather}) =>
  <div className="box">
    <Link key={weather.id} to={`/${weather.name}`}>
    <p>{weather.name}</p>
    <p>{Math.round(weather.main.temp)}&deg;</p>
    <p>
      <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="weather"/><br />
      {weather.weather[0].description}
    </p>
    </Link>
  </div>

export default CurrentWeather;

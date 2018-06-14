import React from 'react'

const CurrentWeather = ({weather}) =>
  <div className="box">
    <p>{weather.name}</p>
    <p>{Math.round(weather.main.temp)}&deg;</p>
    <p>
      <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="weather"/><br />
      {weather.weather[0].description}
    </p>
  </div>

export default CurrentWeather;

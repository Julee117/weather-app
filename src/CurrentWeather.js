import React from 'react'

const CurrentWeather = ({weather}) =>
  <div className="container">
    <div className="weatherBox">
      <p>{weather.name}</p>
      <p>{Math.round(weather.main.temp)}</p>
    </div>
  </div>

export default CurrentWeather;

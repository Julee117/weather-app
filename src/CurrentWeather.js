import React from 'react'

const CurrentWeather = ({weather}) =>
  <div className="box">
    <p>{weather.name}</p>
    <p>{Math.round(weather.main.temp)}</p>
  </div>


export default CurrentWeather;

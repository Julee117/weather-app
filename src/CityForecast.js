import React from 'react';

const CityForecast = ({day}) =>
  <div className="box">
    <p>{Math.round(day.main.temp)}&deg;</p>
    <p>
      <img src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`} alt="weather"/><br />
      {day.weather[0].description}
    </p>
  </div>

export default CityForecast;

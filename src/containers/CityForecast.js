import React, { Component } from 'react';

class CityForecast extends Component {

  render() {
    const { day } = this.props;
    let date = new Date(day.dt_txt).toString().split(" ");

    return (
      <div className="box">
        <p className="day">{date[0].toUpperCase()}</p>
        <p className="date">{date[1]} {date[2]}</p>
        <p className="temp">{Math.round(day.main.temp)}&deg;</p>
          <img src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`} alt="weather" height="70" width="70"/>
        <p>{day.weather[0].description}</p>
      </div>
    )
  }
}

export default CityForecast;

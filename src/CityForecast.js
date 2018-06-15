import React, { Component } from 'react';

class CityForecast extends Component {

  render() {
    const { day } = this.props;
    let date = new Date(day.dt_txt).toString().split(" ");

    return (
      <div className="box">
        <p>{date[0]}</p>
        <p>{date[1]} {date[2]}</p>
        <p>{Math.round(day.main.temp)}&deg;</p>
        <p>
          <img src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`} alt="weather" height="70" width="70"/><br />
          {day.weather[0].description}
        </p>
      </div>
    )
  }
}

export default CityForecast;

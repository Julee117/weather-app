import React, { Component } from 'react';
import CityForecast from "./CityForecast";
import Navbar from "../components/Navbar";

class CityForecastList extends Component {

  render() {
    let dayTempData;
    if (this.props.climate.length) {
      dayTempData = this.props.climate.filter(weather => {
        return weather.dt_txt.includes("15:00:00")
      })
    }

    let weather;
    if (dayTempData) {
      weather = dayTempData.map((day, index) => {
        return <CityForecast key={index} day={day} />
      })
    }

    return (
      <div>
        <Navbar />
        <header className="App-header">
          <h1 className="forecastTitle">5 Day Forecast</h1>
        </header>
        <div className="container">
          <div className="forecastBox">
            {weather}
          </div>
        </div>
      </div>
    )
  }
}

export default CityForecastList;

import React, { Component } from 'react';
import CityForecast from "./CityForecast";

class CityForecastList extends Component {

  render() {
    let hottestTemp;
    if (this.props.climate.length) {
      hottestTemp = this.props.climate.filter(weather => {
        return weather.dt_txt.includes("15:00:00")
      })
    }

    let weather;
    if (hottestTemp) {
      weather = hottestTemp.map((day, index) => {
        return <CityForecast key={index} day={day} />
      })
    }

    return (
      <div className="weatherBox">
        {weather}
      </div>
    )
  }
}

export default CityForecastList;

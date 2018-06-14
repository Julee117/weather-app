import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather';

class CurrentWeatherList extends Component {
  render() {
    let forecast;
    if (this.props.cityWeather.length) {
      forecast = this.props.cityWeather.map(weather => {
        return <CurrentWeather key={weather.id} weather={weather} />
      })
    }

    return (
      <div>{forecast}</div>
    )
  }
}

export default CurrentWeatherList;

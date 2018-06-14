import React, { Component } from 'react';
import CurrentWeatherList from "./CurrentWeatherList";
import './App.css';

const APIURL = "https://api.openweathermap.org/data/2.5/group?id=5128581,5368361,4699066,4164138,5809844";
const APIKEY = `&appid=${process.env.REACT_APP_API_KEY}`;
const UNITS = "&units=imperial";

class App extends Component {
  constructor() {
    super();

    this.state = {
      cityWeather: {},
    }
  }

  componentDidMount() {
    fetch(`${APIURL}${APIKEY}${UNITS}`)
      .then(response => response.json())
      .then(cityWeather => this.setState({cityWeather: cityWeather.list}))
  }

  render() {
    const {cityWeather} = this.state

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Weather App</h1>
        </header>
        <CurrentWeatherList cityWeather={cityWeather}/>
      </div>
    );
  }
}

export default App;

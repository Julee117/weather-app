import React, { Component } from 'react';
import './App.css';

const APIURL = "https://api.openweathermap.org/data/2.5/weather?q=";
const APIKEY = `&appid=${process.env.REACT_APP_API_KEY}`;
const UNITS = "&units=imperial";
const CITIES = ["new+york", "los+angeles", "houston", "miami", "seattle"]

class App extends Component {
  constructor() {
    super();

    this.state = {
      cityWeather: []
    }
  }

  componentDidMount() {
    CITIES.map((city) => {
      return fetch(`${APIURL}${city}${APIKEY}${UNITS}`)
        .then(response => response.json())
        .then(cityWeather => this.setState({cityWeather}))
    })
  }

  render() {
    const {cityWeather} = this.state
    console.log("List of weathers", cityWeather)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Weather App</h1>
        </header>
      </div>
    );
  }
}

export default App;

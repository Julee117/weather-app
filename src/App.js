import React, { Component } from 'react';
import './App.css';

const APIURL = "http://api.openweathermap.org/data/2.5/weather?q=";
const APIKEY = `&appid=${process.env.REACT_APP_API_KEY}`;
const UNITS = "&units=imperial";

class App extends Component {

  render() {
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

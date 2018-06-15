import React, { Component } from 'react';

const URL = `https://api.openweathermap.org/data/2.5/forecast?q=`;
const KEY = `us&appid=${process.env.REACT_APP_API_KEY}`;
const UNITS = "&units=imperial";

class City extends Component {
  constructor(props) {
    super(props);

    this.state = {
      climate: {},
    }
  }

  componentDidMount() {
    fetch(`${URL}${this.props.match.params.name},${KEY}${UNITS}`)
      .then(response => response.json())
      .then(climate => this.setState({climate: climate.list}))
  }

  render() {
    return(
      <div>hi</div>
    )
  }

}

export default City;

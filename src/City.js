import React, { Component } from 'react';

class City extends Component {
  
  render() {
    const { match } = this.props;

    return(
      <div>{match.params.name}</div>
    )
  }
}

export default City;

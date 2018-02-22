import React, { Component } from 'react';

class Api extends Component {
  constructor() {
    super();
    this.state = {
      prices: [],
    };
  }
  componentDidMount() {
    fetch('https://api-fxpractice.oanda.com/v3/instruments/EUR_USD/candles', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 0a26698799fc3119ac087e531bf7db1c-169884f84ca724ac0978b5d7bbeee5a8',
    }}).then(candles => {
      return candles.json();
    }).then(data => {
      let prices = data.candles.map((price) => {
        return(
          <div key={price.candles}>
            {price.time}
          </div>
        )
      })
      this.setState({prices: prices});
      console.log("state", this.state.prices);
    })
  }
  render() {
    return (
      <div>{this.state.prices}</div>
    )
  }
}

export default Api;

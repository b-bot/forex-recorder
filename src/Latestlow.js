import React, { Component } from 'react';

class Latestlow extends Component {
  constructor() {
    super();
    this.state = {
      prices: [],
    };
  }
  componentDidMount() {
    fetch('https://api-fxpractice.oanda.com/v3/instruments/EUR_USD/candles?price=B&granularity=M10&count=1', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 0a26698799fc3119ac087e531bf7db1c-169884f84ca724ac0978b5d7bbeee5a8',
    }}).then(candles => {
      return candles.json();
    }).then(data => {

      let prices = data.candles.map((price) => {
        return(
          price.bid.l
        )
      })
      this.setState({prices: prices});
    })
  }
  render() {
    return (
      <h3>Latest Low Price: {this.state.prices}</h3>
    )
  }
}

export default Latestlow;

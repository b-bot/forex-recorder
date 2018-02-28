import React, { Component } from 'react';

class Averageclosing extends Component {
  constructor() {
    super();
    this.state = {
      prices: [],
    };
  }
  componentDidMount() {
    fetch('https://api-fxpractice.oanda.com/v3/instruments/EUR_USD/candles?price=B&granularity=M10&count=100', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 0a26698799fc3119ac087e531bf7db1c-169884f84ca724ac0978b5d7bbeee5a8',
    }}).then(candles => {
      return candles.json();
    }).then(data => {

      let prices = data.candles.map((price) => {
        return(
          price.bid.o
        )
      })
      let integers = prices.map(Number);

      let sum = integers.reduce((previous, current) => current += previous);
      let avg = sum / integers.length;
      this.setState({avg: avg});
    })
  }
  render() {
    return (
      <h3>Average Closing Price: {this.state.avg}</h3>
    )
  }
}

export default Averageclosing;

import React, { Component } from 'react';

class Averagedifference extends Component {
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

      let pricesHigh = data.candles.map((price) => {
        return(
          price.bid.h
        )
      })
      let pricesLow = data.candles.map((price) => {
        return(
          price.bid.l
        )
      })
      let integersh = pricesHigh.map(Number);
      let integersl = pricesLow.map(Number);

      let sumh = integersh.reduce((previous, current) => current += previous);
      let highavg = sumh / integersh.length;

      let suml = integersl.reduce((previous, current) => current += previous);
      let lowavg = suml / integersl.length;

      let avgdiff = highavg - lowavg;

      this.setState({avgdiff: avgdiff});
    })
  }
  render() {
    return (
      <h3>Average Difference between High and Low Price: {this.state.avgdiff}</h3>
    )
  }
}

export default Averagedifference;

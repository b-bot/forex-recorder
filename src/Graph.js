import React, { Component } from 'react';
import axios from 'axios';
var LineChart = require("react-chartjs").Line;


class Graph extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chartData: [],
    }
  }

  componentDidMount() {

    axios('https://api-fxpractice.oanda.com/v3/instruments/EUR_USD/candles?price=B&granularity=M10&count=100', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 0a26698799fc3119ac087e531bf7db1c-169884f84ca724ac0978b5d7bbeee5a8',
    }}).then((response) => {

      const { candles } = response.data;

      const chartData = {
        labels: candles.map(t => t.time),
        datasets: [
          {
            label: 'High',
            data: candles.map(v => v.bid.h),
            fillColor: "rgba(220,220,220,0.2)",
      			strokeColor: "rgba(220,220,220,1)",
      			pointColor: "rgba(220,220,220,1)",
      			pointStrokeColor: "#fff",
      			pointHighlightFill: "#fff",
      			pointHighlightStroke: "rgba(220,220,220,1)",
          },
          {
            label: 'Low',
            data: candles.map(v => v.bid.l),
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
          },
          {
            label: 'Average Closing',
            data: candles.map(v => v.bid.c),
            fillColor: "rgba(215, 40, 40, 0)",
            strokeColor: "rgba(215, 40, 40, 0.9)",
            pointColor: "rgba(215, 40, 40, 0.9)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(215, 40, 40, 1)",
          },
        ]
      }

      this.setState({ chartData });
    });
}

  render() {
    return (
      <LineChart data={this.state.chartData} width="1920" height="1080" redraw/>
  )}
};

export default Graph;

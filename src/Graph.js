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
            label: 'Opening',
            data: candles.map(v => v.bid.o),
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(40,215,40,1)",
            pointColor: "rgba(40,215,40,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(40,215,40,1)",
          },
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
            strokeColor: "rgba(40,40,215,1)",
            pointColor: "rgba(40,40,215,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(40,40,215,1)",
          },
          {
            label: 'Closing',
            data: candles.map(v => v.bid.c),
            fillColor: "rgba(215, 40, 40, 0)",
            strokeColor: "rgba(215, 40, 40, 1)",
            pointColor: "rgba(215, 40, 40, 1)",
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
      <div>
        <LineChart data={this.state.chartData} width="1920" height="1080" redraw/>
      </div>

  )}
};

export default Graph;

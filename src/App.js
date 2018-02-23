import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Graph from './Graph.js';
import Latesthigh from './Latesthigh.js';
import Latestlow from './Latestlow.js';
import Averageclosing from './Averageclosing.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Forex Graph</h1>
        </header>
        <p className="App-intro">
          Euros to US Dollars monitor using OANDA API to fetch 100 most recent rates in 10 minute intervals.
        </p>
        <Latesthigh />
        <Latestlow />
        <Averageclosing />
        <Graph />
      </div>
    );
  }
}

export default App;

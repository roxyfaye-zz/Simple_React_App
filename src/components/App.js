import React, { Component } from 'react';
import '../styles/App.css';
import Earthquakeinfo from './EarthquakeInfo';
import Earthquakelist from './EarthquakeList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">

          <div className="my-header">"Earthquakes!"</div>
        </div>
        <Earthquakeinfo />
        <Earthquakelist />

      </div>
    );
  }
}

export default App;

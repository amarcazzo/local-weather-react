import React, { Component } from 'react';
import './App.css';
import { Header, Divider } from 'semantic-ui-react';
import Forecast from './components/Forecast.js';
import Parallax from './components/Parallax.js';
import Time from 'react-time';



class App extends Component {
  render() {
    return (
      <div>
        <Parallax></Parallax>
        <div className="App">
          <Header>
            <Time value={new Date()} format='dddd, MMMM Do HH:mm A'></Time>
          </Header>
          <Divider horizontal></Divider>
          <Forecast></Forecast>
        </div>
      </div>
    );
  }
}

export default App;

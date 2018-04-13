import React, { Component } from 'react';
import './App.css';

import Header from  './component/Header/Header.js';
import Dashboard from './component/Dashboard/Dashboard.js';
import Wizard from './component/Wizard/Wizard.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Dashboard />
      <Wizard />
      </div>
    );
  }
}

export default App;

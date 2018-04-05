import React, { Component } from 'react';
import Header from './components/Header';

class App extends Component {
  static displayName = "App";

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;

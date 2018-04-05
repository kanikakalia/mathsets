import React, { Component } from 'react';
import {render} from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Answers from "./components/Answers";
import Steps from "./components/Demo";
class App extends Component {
  static displayName = "App";

  render() {
    return (
      <Router>
      <div id="container">
        <Header />
        <Switch>
          <Route exact path="/" component={Answers}/>
          <Route exact path="/steps" component={Steps}/>
        </Switch>
      </div>
    </Router>
    );
  }
}


export default App;

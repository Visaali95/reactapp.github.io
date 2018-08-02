import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,Switch
} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Admin1 from './Admin/Admin1'


class App extends Component {
  render() {
    return (
      <Router>
      <div>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/admin1" component={Admin1} />

      </div>
      </Router>

      );
  }
}

export default App;

import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,Switch
} from 'react-router-dom'

import Home from './component/home'
import About from './component/about'
import Admin from './admin/adminhome'


class App extends Component {
  render() {
    return (
      <Router>
      <div>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/admin" component={Admin} />

      </div>
      </Router>

      );
  }
}

export default App;

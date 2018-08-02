import React, {Compon} from 'react'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Features from './components/Features'

//import UserEdit from './components/UserEdit'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <br/>
        <br/>
        <Features/>
      </div>
  );
  }
}
export default App;

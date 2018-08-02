import React from 'react';
import '../App.css';
import {BrowserRouter as Router, Route, Link, Redirect,NavLink} from 'react-router-dom';
class Home extends React.Component {
  render() {
    return (
      <div className="App ">
        <br/><br/>
        <li><NavLink to="/" exact >Home</NavLink></li>
        <li><NavLink to="/about">About </NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/admin1">Admin</NavLink></li>
      <h1>Welcome to Home</h1>
      <br/>


    </div>);
  }
}
export default Home;

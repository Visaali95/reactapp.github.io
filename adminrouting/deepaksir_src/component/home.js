import React, { Component } from 'react';

import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter,Switch,NavLink
} from 'react-router-dom'




export default class Home extends Component {
	render(){
		return(
			<div>
				<li><NavLink to="/" exact >Home</NavLink></li>
				<li><NavLink to="/About">About Us</NavLink></li>
				<li><NavLink to="/admin">Admin</NavLink></li>

				<div>This is home page</div>
			</div>
			)
	}
}
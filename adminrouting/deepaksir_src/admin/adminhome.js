import React,{Component} from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,Switch,NavLink
} from 'react-router-dom'

import Addcategory from './adminaddcategory'
import Userlists from './adminuserlists'


class Admin extends React.Component{
	render() {
    return (
      <Router>
      <div>
      <div className="leftsidebar">
      <ul>
      <li><Link to="/admin/adminaddcategory"> Add Category</Link></li>
      <li><Link to="/admin/Userlists"> Users List</Link></li>
      </ul>
      </div>


      <Route path="/admin/adminaddcategory" exact component={Addcategory} />
      <Route path="/admin/Userlists" component={Userlists} />
      </div>
      </Router>
      )
  }
}

export default Admin

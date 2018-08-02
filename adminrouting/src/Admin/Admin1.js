import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import Profile from './Profile';
import Documents from './Documents';
import Favourites from './Favourites';
class Admin1 extends React.Component {
  render() {

    return (
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/admin/profile">Profile</Link>
          </li>
          <li>
            <Link to="/admin/documents">Documents</Link>
          </li>
          <li>
            <Link to="/admin/favourites">Favourites</Link>
          </li>
        </ul>
        <Route path="/admin/profile" exact component={Profile}/>
        <Route path="/admin/documents" component={Documents}/>
        <Route path="/admin/favourites" component={Favourites}/>
       </div>
    </Router>);
  }
}
export default Admin1;

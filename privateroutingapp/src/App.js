import React from 'react'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import UserProfile from './components/UserProfile';
import SignIn from './components/SignIn';

const ProtectedRoute = (props) => {
  console.log(props);
  return props.isAuthenticated ? <Route path="/userprofile" component={() => <UserProfile isAuthenticate={props.isAuthenticated} handleLogout={props.handleLogout}/>} /> : <div>You are not logged in</div> }


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      isAuthenticated : false,
    }
  }

  handleLogin(){
    console.log("logging in")
    this.setState({
      isAuthenticated : true
    })
  }

  handleLogout(){
    this.setState({
      isAuthenticated : false
    })
  }


  render() {


    return (<Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/userprofile">UserProfile</Link>
          </li>
          <li>
            <Link to="/sigin">SignIn</Link>
          </li>

        </ul>
        <hr/>

        <Route exact="exact" path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact} isAuthenticated={this.state.isAuthenticated}/>
        <ProtectedRoute path="/userprofile" component={UserProfile} isAuthenticated={this.state.isAuthenticated} handleLogout={this.handleLogout.bind(this)}/>
        <Route path="/sigin" component={() => <SignIn handleLogin={this.handleLogin.bind(this)}/>}/>
      </div>
    </Router>);
  }
}

export default App;

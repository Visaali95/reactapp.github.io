import React from 'react'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import Home from './Home';
import About from './About';
import UserProfile from './UserProfile';
import Login from './Login';
import '../App.css'



const login = localStorage.getItem('login');
const Visaali = ({component: Component,...rest}) =>
 (<Route {...rest} render={(props) => (login) ? <Component /> : <Redirect to ='/login'/>}/>)

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      scrollUpdate:false
    }
  }

  menuHandler() {
    const currentState = this.state.active;
    this.setState({
      active: !currentState
    });
  //  console.log(this.state.active)
  }
//   componentDidMount() {
//     window.addEventListener('scroll', this.handleScroll);
//   }
//
//   componentWillUnmount() {
//     window.removeEventListener('scroll', this.handleScroll);
//   }
//   handleScroll() {
//   //console.log(this);
//   var domRect = element.getBoundingClientRect();
//   console.log(domRect)
// }
  render() {
    return (
      <Router>
         {/* className={`Header ${ (this.state.handleScroll )? 'fixedNav': ''}`} */}
      <div className='Header'>
        <img src={require('../images/logo.png')} alt='logo'/>
        <ul className={`NavList ${ (this.state.active)? 'show': ''}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/userprofile">UserProfile</Link>
          </li>
          <li>
            <Link to="/useredit">UserEdit</Link>
          </li>

        </ul>
        <Link to="/" className="icon" onClick={this.menuHandler.bind(this)}>&#9776;</Link>
        <Route exact="exact" path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Visaali path="/userprofile" component={UserProfile}/> {/* <Visaali path="/useredit"  component={UserEdit}/> */}
        <Route path="/login" component={Login}/>
      </div>
    </Router>);
  }
}
export default Header;

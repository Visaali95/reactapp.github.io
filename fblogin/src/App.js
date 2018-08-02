import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Topics from './components/Topics';
import Learn from './components/Learn';
import Login from './components/Login';
import './App.css'

import SocialButton from './components/SocialButton';

class BasicExample extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      logged: false,
      user: {},
      currentProvider: '',
      facebookdata: ''
    },

    this.nodes = {}

    this.onLoginSuccess = this.onLoginSuccess.bind(this)
    this.onLoginFailure = this.onLoginFailure.bind(this)

  }

  setNodeRef(provider, node) {
    if (node) {
      this.nodes[provider] = node
    }
  }

  onLoginSuccess(user) {
    console.log(user)
    //console.log(user._profile)
    this.setState({logged: true, currentProvider: user._provider, user, 'facebookdata': user._profile})

  }

  onLoginFailure(err) {
    console.error(err)

    this.setState({logged: false, currentProvider: '', user: {}})
  }

  textInput(e){
//    console.log(e.target.value)
    this.setState('data':textInput.current.value)
  }
  fileRead(){
    //  console.log(this.fileRead.value)
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
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <Link to="/learn">Learn</Link>
          </li>

        </ul>
        <hr/>

        <Route exact="exact" path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>
        <Route path="/login" component={Login}/>
        <Route path="/learn" component={Learn}/>

        <SocialButton provider='facebook' appId='973589209472033' onLoginSuccess={this.onLoginSuccess} onLoginFailure={this.onLoginFailure} getInstance={this.setNodeRef.bind(this, 'facebook')} key={'facebook'}>
        <span> <i>gggg</i> Login with Facebook</span>
        </SocialButton>
        <br/>
        <h2>the details of the user are:</h2>
        <br/>
        <input type='text' name='list' value={this.state.facebookdata.name} onChange={this.onLoginSuccess.bind(this)} placeholder='FirstName'/>
        <br/>
        <input type='text' name='list' value={this.state.facebookdata.email} onChange={this.onLoginSuccess.bind(this)} placeholder='LastName'/>
        <br/>
        <input type='text' name='list' value={this.state.facebookdata.lastName} onChange={this.onLoginSuccess.bind(this)} placeholder='Name'/>
        <br/>
        <input type='text' name='list' value={this.state.facebookdata.firstName} onChange={this.onLoginSuccess.bind(this)} placeholder='Token'/>

        <br/>
        <hr/>
        <br/>

        Select a file:
        <input type="file" name="myFile" onChange={this.textInput.bind(this)}  />
        <br/>
        <input type="submit"onClick={this.fileRead.bind(this)}/>
        <br/>
     {/* <input type="text" name="fileName" value={this.state.data} onChange={this.fileRead.bind(this)}/> */}

      </div>
    </Router>);

  }
}
export default BasicExample;

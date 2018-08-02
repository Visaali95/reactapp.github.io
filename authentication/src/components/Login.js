import React from 'react'
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      servername:'visaali',
      serverpassword:'1234'
    }
    console.log(props)
    }


  details(e) {
    let content = this.state;
    content[e.target.name] = e.target.value;

    this.setState({content:this.state})
  //   console.log(this.state)
  }

  userpage(e) {
    if(this.state.username==this.state.servername && this.state.password==this.state.serverpassword){
      this.props.history.push('userprofile')
      localStorage.login=true
    }//button routing


   }


  render() {

    return (<div className='App firstSection'>
      <h2>Please Login here</h2>
      <label>UserName:
      </label>
      <input type="text" name="username" value={this.state.username} onChange={this.details.bind(this)}/><br/><br/>
      <label>Password:
      </label>
      <input type="password" name="password"value={this.state.password} onChange={this.details.bind(this)}/><br/><br/>
      <button className="Loginbutt" type="submit" onClick={this.userpage.bind(this)}>Login</button><br/>
      <br/>
    </div>);
  }
}
export default Login;

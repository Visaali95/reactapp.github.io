import React from 'react'
class SignIn extends React.Component {
  render() {
    return (<div>
      <h2>Sign In</h2>
      <button onClick={this.props.handleLogin}>Login</button>
    </div>);
  }
}
export default SignIn;

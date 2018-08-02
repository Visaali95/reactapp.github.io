import React from 'react'
import {BrowserRouter as Router,Link,Route,Redirect} from 'react-router-dom'

class UserProfile extends React.Component {
  // usereditpage(){
  //   console.log('sfdsdf',this.props)
  //   //this.props.history.push('useredit')//button routing
  // }
  render() {
    return (<div className='App firstSection'>
      <h2>Welcome to UserProfile</h2>
      <p>This is your dashboard!!</p>
      <Link className="upEditbutt" to ='/useredit'>UserEdit</Link>
      <br/>
      <br/>
      {/* <button className="upEditbutt" type="submit" onClick={this.usereditpage.bind(this)}>User Edit</button> */}
    </div>);
  }
}
export default UserProfile;

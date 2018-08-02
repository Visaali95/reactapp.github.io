import React from 'react'
class UserProfile extends React.Component {
  constructor(props){
    super(props);

  }


  render() {
    console.log("======",this.props.isAuthenticate);

    return this.props.isAuthenticate ? (<div>
      <h2>User Profile</h2>
      <p>Welcome to your dashboard!!!</p>
      <button onClick={this.props.handleLogout}>Logout</button>
    </div>): <div>Please Login to view your profile</div>;
  }
}
export default UserProfile;

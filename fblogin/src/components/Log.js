import React from 'react';
import {

  withRouter,
} from 'react-router'

 class Log extends React.Component{


	render(){
	//console.log(this.props);
		return(
			<button onClick={() =>
         {this.props.history.push('/login')}}>Login</button>
       )
	}
}

export default withRouter(Log);

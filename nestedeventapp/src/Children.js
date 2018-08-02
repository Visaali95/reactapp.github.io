import React, {Component} from 'react';

class Children extends Component{

componentDidMount (){

}

  alertHandlerChild(){
      alert("Yayiiee! You clicked child button...")
  }
  render(){
    return (
      <div>
        <h2>Im children component</h2>
        <p>Onclick event in children component</p>
        <button type="button" onClick={this.props.testHandler}>Click me!!!</button>
      </div>
    );

  }
}

export default Children;

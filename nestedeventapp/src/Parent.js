import React, {Component} from 'react';
import Children from './Children';
class Parent extends Component{


  alertHandlerParent(){
    
  }

  render(){
    return (
      <div>
        <h2>Im parent component</h2>
        <p>Onclick event in parent component</p>
        <button type="button" onClick={this.alertHandlerParent.bind(this)}>Click me!!!</button>
        <Children datas="sfdsdf"/>
      </div>
    );

  }
}

export default Parent;

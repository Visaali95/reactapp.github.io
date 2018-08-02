import React from 'react';
import './Features.css';
import FontAwesome from 'react-fontawesome';
//import FontAwesomeIcon from 'react-fontawesome'
class Features extends React.Component {
  render() {
    return (<div className='App feactureSection'>
      <h2>Feature Section</h2>
      <br/>
      <ul class="flex-container">
        <li class="flex-item">
          <FontAwesome className=" fa-graduation-cap"size='2x'/><br/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,Lorem ipsum dolor sit amet, consectetur adipisicing elit,Lorem ipsum dolor sit amet, consectetur adipisicing elit, </p>
        </li>
        <li class="flex-item">
          <FontAwesome className=" fa-graduation-cap" size='2x'/><br/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,Lorem ipsum dolor sit amet, consectetur adipisicing elit,Lorem ipsum dolor sit amet, consectetur adipisicing elit, </p>
        </li>
        <li class="flex-item">
          <FontAwesome className=" fa-graduation-cap"size='2x'/><br/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,Lorem ipsum dolor sit amet, consectetur adipisicing elit,Lorem ipsum dolor sit amet, consectetur adipisicing elit, </p>
        </li>
        <li class="flex-item">
          <FontAwesome className=" fa-graduation-cap"size='2x'/><br/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,Lorem ipsum dolor sit amet, consectetur adipisicing elit,Lorem ipsum dolor sit amet, consectetur adipisicing elit, </p>
        </li>

      </ul>
    </div>);
  }
}
export default Features;

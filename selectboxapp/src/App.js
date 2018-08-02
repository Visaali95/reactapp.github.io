import React, {Component} from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      options :[
        {name:'select'},
        {
          name: 'Apple'
        },
       {
          name: 'Mango'
        },
      {
          name: 'Banana'
        },
       {
          name: 'Orange'
        }
      ],
      selectValue:"Banana"
    }
  }


  componentDidMount(){
    console.log(this.state.selectValue)
  }

  selectHandler(e){

  console.log(e.target.value)
  }
  render() {
    let options = this.state.options;
  //  console.log(options)
     let optionItems = options.map((op) =>
     <option selected={op.name === this.state.selectValue} value={op.name} key={op.name}> {op.name} </option>);
  //   console.log(optionItems)

    return (<div className="App">
      <br/>Please select :
      <select onChange={this.selectHandler.bind(this)}>
        {optionItems}
      </select>
    </div>);
  }
}

export default App;

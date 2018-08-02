import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  constructor(){
    super();
    this.state = {
      persons: [
        { key:0,name : 'visaali', age : 23},
        { key:1, name : 'jothika',age : 18 },
        { key:2 ,name : 'maha',age : 1 },
        ],
    otherstate: 'hello',
    showPersons: false,
    }
  }


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();//to copy a old array use slice
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }
  render() {

    let persons = null;
    if(this.state.showPersons){
       persons=(
        <div >
        {this.state.persons.map((person,index) => {
          return <Person key={person.id}
          click={this.deletePersonHandler.bind(this,index)}
          name={person.name}
          age={person.age}
          />
        })}
       </div>
       );
    }

    return (
      <div className="App">
       <h1>Hello Im developing react app</h1>
       <p>Welcome to the App!!!</p>
       <button  onClick={this.togglePersonsHandler.bind(this)} >Switch Name</button>
     {persons}

      </div>
    );
  }
}

export default App;

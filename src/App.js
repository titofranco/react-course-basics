import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  // state: Only available if you extend from component
  // Should not be changed, if you change it, it will rerender the DOM
  // You can of course pass the state  down to functional components, but these then can't directly edit it.
  state =  {
    people: [
      {name: 'Carlos', age: '32'},
      {name: 'Vivi', age: '34' }
    ],
    hobbies: ['Run', 'Read']
  }

  // Use ES6 syntax so this refers to the class
  switchNameHandler = () => {
    // DONT DO THIS -> this.state.people[1].name = 'Patri';
    this.setState({
      people: [
        {name: 'Vaco', age: '5'},
        {name: 'Axl', age: '3' }
      ]
    });
  }

  render() {
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!' ));
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.people[0].name} age={this.state.people[0].age}/>
        <Person name={this.state.people[1].name} age={this.state.people[1].age}>Hobbie is to: {this.state.hobbies[1]}</Person>
      </div>
    );
  }
}

export default App;

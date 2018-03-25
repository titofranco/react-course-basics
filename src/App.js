import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  // state: Only available if you extend from component
  // Should not be changed, if you change it, it will rerender the DOM
  state =  {
    people: [
      {name: 'Carlos', age: '32'},
      {name: 'Vivi', age: '34' }
    ]
  }

  render() {
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!' ));
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button>Switch Name</button>
        <Person name={this.state.people[0].name} age={this.state.people[0].age}/>
        <Person name={this.state.people[1].name} age={this.state.people[1].age}>Fashionist :v</Person>
      </div>
    );
  }
}

export default App;

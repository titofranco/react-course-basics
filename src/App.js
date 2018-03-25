import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  render() {
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!' ));
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Person name='Carlos' age='32'/>
        <Person name='Vivi' age='34'>Fashionist :v</Person>

      </div>
    );
  }
}

export default App;

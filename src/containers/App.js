import React, { Component } from 'react';
import styles from './App.css';
import Person from '../components/People/Person/Person.js';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.js';

class App extends Component {
  // state: Only available if you extend from component
  // Should not be changed, if you change it, it will rerender the DOM
  // You can of course pass the state  down to functional components, but these then can't directly edit it.
  state =  {
    people: [
      {id: 1, name: 'Carlos', age: '32'},
      {id: 2, name: 'Vivi', age: '34' }
    ],
    hobbies: ['Run', 'Read'],
    showPeople: false
  }

  // Use ES6 syntax so this refers to the class
  switchNameHandler = (newName) => {
    // DONT DO THIS -> this.state.people[1].name = 'Patri';
    this.setState({
      people: [
        {name: newName, age: '5'},
        {name: 'Axl', age: '3' }
      ]
    });
  }

  nameChangedHandler = (event, personId) => {
    const personIndex = this.state.people.findIndex(p => {
      return p.id === personId;
    });

    const person = {...this.state.people[personIndex]};
    // alternative to above
    // const person = Object.assign({}, this.state.people[personIndex]);
    person.name = event.target.value;

    const people = [...this.state.people];
    people[personIndex] = person;

    this.setState({people: people});
  }


  togglePeopleList = () => {
    this.setState({showPeople: !this.state.showPeople});
  }

  deletePersonHandler = (index) => {
    // Create a copy, remember arrays and objects holds the reference, that's why I can use const
    // const people = this.state.people.slice();
    // Equivalent to above using the spread operator
    const people = [...this.state.people];
    people.splice(index, 1);
    this.setState({people: people});
  }

  render() {
    let people = null;
    const classes = [];
    let buttonClass = '';

    if (this.state.people.length < 2 ) {
      classes.push(styles.red);
    } else {
      classes.push(styles.bold);
    }

    if (this.state.showPeople) {
      people = (
        <div>
          {this.state.people.map((person, index) => {
            return(
            <ErrorBoundary key={person.id}>
              <Person
                 name={person.name}
                 myCustomClickEvent={this.deletePersonHandler.bind(this, index)}
                 inputChanged={(event) => this.nameChangedHandler(event, person.id)}
                age={person.age}
                />
              </ErrorBoundary>
            );})}
        </div>
      );
      buttonClass = styles.Red;
    }

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!' ));
    return (
      <div className={styles.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={classes}>YAY</p>
        <button className={buttonClass}
           onClick={this.togglePeopleList}>Toggle People</button>
        { people }
      </div>
    );
  }
}

export default App;

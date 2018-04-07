import React, { Component } from 'react';
import styles from './App.css';
import People from '../components/People/People';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    super(props); // It has to be called at the beginning
    // state: Only available if you extend from component
    // Should not be changed, if you change it, it will rerender the DOM
    // You can of course pass the state  down to functional components, but these then can't directly edit it.
    this.state =  {
      people: [
        {id: 1, name: 'Carlos', age: '32'},
        {id: 2, name: 'Vivi', age: '34' }
      ],
      hobbies: ['Run', 'Read'],
      showPeople: false
    };
    console.log('[In App.js] #constructor ', props);
  }

  componentWillMount() {
    console.log('[In App.js] #componentWillMount');
  }

  componentDidMount() {
    console.log('[In App.js] #componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[In App.js] #shouldComponentUpdate ', nextProps, ' ', nextState);
    // Avoid calling the following hooks if people don't change
    // That improves the app performance
    return nextState.people !== this.state.people ||
      nextState.showPeople !== this.state.showPeople;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[In App.js] #componentWillUpdate ', nextProps, ' ', nextState);
  }

  componentDidUpdate() {
    console.log('[In App.js] #componentDidUpdate');
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
    console.log('[In App.js] #render');

    let people = null;

    if (this.state.showPeople) {
      people = <People people={this.state.people}
                  deletePersonHandler={this.deletePersonHandler}
                  nameChangedHandler={this.nameChangedHandler}
        />;
    }

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!' ));
    return (
      <div className={styles.App}>
        <button onClick={() => this.setState({showPeople: true})}>Show all People(shouldComponentUpdate test)</button>
        <Cockpit
           appTitle={this.props.title}
           showPeople={this.state.showPeople}
           people={this.state.people}
           togglePeopleList={this.togglePeopleList} />
        { people }
      </div>
    );
  }
}

export default App;

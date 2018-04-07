import React, {Component} from 'react';
import Person from './Person/Person';

class People extends Component {

  constructor(props) {
    super(props);
    console.log('[In People.js] #constructor ', props);
  }

  componentWillMount() {
    console.log('[In People.js] #componentWillMount');
  }

  componentDidMount() {
    console.log('[In People.js] #componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[In People.js] #componentWillReceiveProps ', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[In People.js] #shouldComponentUpdate ', nextProps, ' ', nextState);
    // return false // We stop the process
    return true; // THe update continues
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[In People.js] #componentWillUpdate ', nextProps, ' ', nextState);
  }

  componentDidUpdate() {
    console.log('[In People.js] #componentDidUpdate');
  }

  render() {
    console.log('[In People.js] #render');
    return(
      this.props.people.map((person, index) => {
        return <Person
          key={person.id}
          name={person.name}
          myCustomClickEvent={this.props.deletePersonHandler.bind(this, index)}
          inputChanged={(event) => this.props.nameChangedHandler(event, person.id)}
          age={person.age} /> ;
      })
    );
  }
}

export default People;

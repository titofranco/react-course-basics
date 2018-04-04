import React, {Component} from 'react';
import Person from './Person/Person';

class People extends Component {
  render() {
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

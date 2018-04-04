import React from 'react';
import Person from './Person/Person';

const people = (props) => props.people.map((person, index) => {
      return(
           <Person
              key={person.id}
             name={person.name}
             myCustomClickEvent={props.deletePersonHandler.bind(this, index)}
             inputChanged={(event) => props.nameChangedHandler(event, person.id)}
            age={person.age}
             />
      );
});

export default people;

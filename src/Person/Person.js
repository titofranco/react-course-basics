import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
  const style = {
    '@media (max-width: 500px)': {
      backgroundColor: 'yellow'
    }
  };
  return (
    <div className="Person" style={style}>
      <p onClick={props.myCustomClickEvent}>I'm a {props.name}! and I am { props.age } years old, click me! </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.inputChanged} value={props.name}/>
    </div>
  );
};

export default Radium(person);

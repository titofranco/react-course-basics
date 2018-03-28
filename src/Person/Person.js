import React from 'react';
import classes from './Person.css';

const person = (props) => {
  return (
    <div className={classes.Person}>
      <p onClick={props.myCustomClickEvent}>I'm a {props.name}! and I am { props.age } years old, click me! </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.inputChanged} value={props.name}/>
    </div>
  );
};

export default person;

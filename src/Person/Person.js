import React from 'react';

const person = (props) => {
  return (
    <div>
      <p onClick={props.myCustomClickEvent}>I'm a {props.name}! and I am { props.age } years old, click me! </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;

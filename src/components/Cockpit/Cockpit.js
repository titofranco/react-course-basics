import React from 'react';
import styles from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {
  const classes = [];
  let buttonClass = styles.Button;

  if (props.showPeople) {
    buttonClass = [styles.Button, styles.Red].join(' ');
  }

  if (props.people.length < 2 ) {
    classes.push(styles.red);
  } else {
    classes.push(styles.bold);
  }

  return (
      <Aux>
      <h1>{props.appTitle}</h1>
      <p className={classes}>YAY</p>
      <button className={buttonClass}
              onClick={props.togglePeopleList}>Toggle People</button>
      <button onClick={props.login}>Log in</button>
      </Aux>
  );
};

export default cockpit;

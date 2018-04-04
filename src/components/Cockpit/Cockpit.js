import React from 'react';
import styles from './Cockpit.css';

const cockpit = (props) => {
  const classes = [];
  let buttonClass = '';

  if (props.showPeople) {
    buttonClass = styles.Red;
  }

  if (props.people.length < 2 ) {
    classes.push(styles.red);
  } else {
    classes.push(styles.bold);
  }

  return (
    <div className={styles.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={classes}>YAY</p>
      <button className={buttonClass}
              onClick={props.togglePeopleList}>Toggle People</button>
    </div>
  );
};

export default cockpit;

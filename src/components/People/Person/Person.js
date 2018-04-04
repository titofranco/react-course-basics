import React, {Component} from 'react';
import classes from './Person.css';

class Person extends Component {
  render() {
    return (
      <div className={classes.Person}>
        <p onClick={this.props.myCustomClickEvent}>I'm a {this.props.name}! and I am { this.props.age } years old, click me! </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.inputChanged} value={this.props.name}/>
      </div>
    );
  }
}

export default Person;

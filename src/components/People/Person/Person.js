import React, {Component} from 'react';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[In Person.js] #constructor ', props);
  }

  componentWillMount() {
    console.log('[In Person.js] #componentWillMount');
  }

  componentDidMount() {
    console.log('[In Person.js] #componentDidMount');
    if (this.props.position === 0) {
      this.inputElement.focus();
    }
  }

  componentWillUnmount() {
    console.log('[In Person.js] #componentWillUnmount');
  }

  render() {
    console.log('[In Person.js] #render');
    return (
      <WithClass classes={classes.Person}>
        <p onClick={this.props.myCustomClickEvent}>I'm a {this.props.name}! and I am { this.props.age } years old, click me! </p>
        <p>{this.props.children}</p>
        <input
           ref={(inpt) => { this.inputElement = inpt; }}
           type="text" onChange={this.props.inputChanged} value={this.props.name}/>
      </WithClass>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};


export default Person;

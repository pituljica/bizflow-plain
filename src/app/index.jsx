import Counter from '../counter';
import Hello from '../components/hello';
import React, { Component } from 'react';
import World from '../components/world';

export default class App extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Counter />
        <Hello />
        <World />
      </div>
    );
  }
}

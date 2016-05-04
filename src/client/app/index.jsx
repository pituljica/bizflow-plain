import Counter from '../counter';
import React, { Component } from 'react';

export default class App extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}

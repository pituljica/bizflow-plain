import React, { Component, PropTypes as RPT } from 'react';
import { connect } from 'react-redux';

@connect(
  state => ({
    count: state.counter.count,
  }),
  dispatch => ({
    incrementClick: () => dispatch({ type: 'INCREMENT' }),
    decrementClick: () => dispatch({ type: 'DECREMENT' }),
  })
)
export default class Counter extends Component {

  static propTypes = {
    count: RPT.number,
    incrementClick: RPT.func,
    decrementClick: RPT.func,
  }

  render() {
    const { count, incrementClick, decrementClick } = this.props;

    return (
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={incrementClick}>increment</button>
        <button onClick={decrementClick}>decrement</button>
      </div>
    );
  }
}

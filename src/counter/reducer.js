import { Record } from 'immutable';

const InitialState = Record({
  count: 0
});
const initialState = new InitialState;

export default function (state = initialState, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state.update('count', counter => counter + 1);
  case 'DECREMENT':
    return state.update('count', counter => counter - 1);
  default:
    return state;
  }
}

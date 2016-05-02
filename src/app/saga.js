import * as counter from '../counter/saga';
import { fork } from 'redux-saga/effects';

function filterAndForkSagas(sagas) {
  return Object.keys(sagas).reduce((acc, name) => {
    const saga = sagas[name];
    if (typeof saga === 'function')
      return acc.concat(fork(saga));
    return acc;
  }, []);
}

export default function* root() {
  yield [
    ...filterAndForkSagas(counter),
  ];
}

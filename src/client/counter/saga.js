import { takeLatest } from 'redux-saga';
import { put } from 'redux-saga/effects';

export function* watcgIncrement() {
  yield* takeLatest('INCREMENT',
    function* () { // eslint-disable-line func-names
      yield put({ type: 'INCREMENT_FOR_REALS' });
    }
  );
}

export function* watchDecrement() {
  yield* takeLatest('DECREMENT',
    function* () { // eslint-disable-line func-names
      yield put({ type: 'DECREMENT_FOR_REALS' });
    }
  );
}

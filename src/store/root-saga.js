import { all } from 'redux-saga/effects';

import financesSaga from './finances/finances.saga';

export default function* rootSaga() {
  yield all([financesSaga()]);
}

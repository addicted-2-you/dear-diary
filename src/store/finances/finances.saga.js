import { all, call, put, takeEvery } from 'redux-saga/effects';

import { getAllCashCurrencies } from '../../api/cash-currencies.api';
import { getAllTransactionHistory } from '../../api/cash-transaction-history.api';
import { getAllTransactionLabels } from '../../api/cash-transaction-labels.api';

import {
  fetchCashCurrenciesAction,
  fetchCashTransactionLabelsAction,
  fetchTransactionHistoryAction,
  setCashCurrenciesAction,
  setCashTransactionLabelsAction,
  setTransactionHistoryAction,
} from './finances.slice';

function* fetchCashTransactionHistory() {
  const cashTransactionHistory = yield call(getAllTransactionHistory);
  yield put(setTransactionHistoryAction({ cashTransactionHistory }));
}

function* fetchCashCurrencies() {
  const cashCurrencies = yield call(getAllCashCurrencies);
  yield put(setCashCurrenciesAction({ cashCurrencies }));
}

function* fetchCashTransactionLabels() {
  const cashTransactionLabels = yield call(getAllTransactionLabels);
  yield put(setCashTransactionLabelsAction({ cashTransactionLabels }));
}

export default function* financesSaga() {
  yield all([
    takeEvery(fetchTransactionHistoryAction, fetchCashTransactionHistory),
    takeEvery(fetchCashCurrenciesAction, fetchCashCurrencies),
    takeEvery(fetchCashTransactionLabelsAction, fetchCashTransactionLabels),
  ]);
}

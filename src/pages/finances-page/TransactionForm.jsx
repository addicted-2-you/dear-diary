import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCashCurrenciesAction,
  fetchCashTransactionLabelsAction,
} from '../../store/finances/finances.slice';

const initTransactionFormState = {
  transactionFormAmount: 0,
  transactionDate: new Date().toISOString().substr(0, 10),
  transactionCurrency: 0,
  transactionLabels: [],
};

function transactionFormReducer(state, action) {
  switch (action.type) {
    case 'TEXT_INPUT_CHANGE': {
      return {
        ...state,
        ...action.payload,
      };
    }

    default: {
      throw new Error('Wrong action type!');
    }
  }
}

function TransactionForm() {
  const dispatch = useDispatch();

  const cashCurrencies = useSelector((state) => state.finances.cashCurrencies);
  const cashTransactionLabels = useSelector((state) => state.finances.cashTransactionLabels);

  const [state, dispatchFormUpdate] = React.useReducer(
    transactionFormReducer,
    initTransactionFormState,
  );

  React.useEffect(() => {
    dispatch(fetchCashCurrenciesAction());
    dispatch(fetchCashTransactionLabelsAction());
  }, []);

  function onTextInputChange(event) {
    dispatchFormUpdate({
      type: 'TEXT_INPUT_CHANGE',
      payload: { [event.target.name]: event.target.value },
    });
  }

  return (
    <div className="transaction-form">
      <label htmlFor="transaction-form-amount">
        <span>Amount</span>
        <input
          type="number"
          name="transactionFormAmount"
          id="transaction-form-amount"
          value={state.transactionFormAmount}
          onChange={onTextInputChange}
        />
      </label>

      <label htmlFor="transaction-date">
        <span>Date</span>
        <input
          type="date"
          name="transactionDate"
          id="transaction-date"
          value={state.transactionDate}
          onChange={onTextInputChange}
        />
      </label>

      <label htmlFor="transaction-currency">
        <span>Currency</span>
        <select
          name="transactionCurrency"
          id="transaction-currency"
          value={state.transactionCurrency}
          onChange={onTextInputChange}
        >
          {cashCurrencies.map((currency) => (
            <option key={currency.id} value={currency.id}>
              {currency.code}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="transaction-labels">
        <span>Labels</span>
        <select
          name="transactionLabels"
          id="transaction-labels"
          multiple
          value={state.transactionLabels}
          onChange={onTextInputChange}
        >
          {cashTransactionLabels.map((label) => (
            <option key={label.id} value={label.id}>
              {label.name}
            </option>
          ))}
        </select>
      </label>

      <div className="buttons">
        <button type="button">Submit</button>
      </div>
    </div>
  );
}

export default TransactionForm;

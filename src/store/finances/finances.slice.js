import { createAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  cashTransactionHistory: [],
  cashCurrencies: [],
  cashTransactionLabels: [],
};

// 'fetch data'-actions
export const fetchTransactionHistoryAction = createAction('fetchTransactionHistory');
export const fetchCashCurrenciesAction = createAction('fetchCashCurrencies');
export const fetchCashTransactionLabelsAction = createAction('fetchCashTransactionLabels');

export const financesSlice = createSlice({
  name: 'finances',

  initialState,

  reducers: {
    setTransactionHistoryAction: (state, action) => {
      const { cashTransactionHistory } = action.payload;
      state.cashTransactionHistory = cashTransactionHistory;
    },

    setCashCurrenciesAction: (state, action) => {
      const { cashCurrencies } = action.payload;
      state.cashCurrencies = cashCurrencies;
    },

    setCashTransactionLabelsAction: (state, action) => {
      const { cashTransactionLabels } = action.payload;
      state.cashTransactionLabels = cashTransactionLabels;
    },
  },
});

export const {
  setTransactionHistoryAction,
  setCashCurrenciesAction,
  setCashTransactionLabelsAction,
} = financesSlice.actions;

export default financesSlice.reducer;

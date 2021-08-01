import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchTransactionHistoryAction } from '../../store/finances/finances.slice';

import TransactionForm from './TransactionForm';

function FinancesPage() {
  const dispatch = useDispatch();
  const cashTransactionHistory = useSelector((state) => state.finances.cashTransactionHistory);

  React.useEffect(() => {
    dispatch(fetchTransactionHistoryAction());
  }, []);

  return (
    <div className="finances-page">
      <h2>Finances</h2>

      {JSON.stringify(cashTransactionHistory)}

      <TransactionForm />
    </div>
  );
}

export default FinancesPage;

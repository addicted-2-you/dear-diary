import React from 'react';

import { sendSql } from '../database/send-sql';

function FinancesPage() {
  const [finances, setFinances] = React.useState([]);

  React.useEffect(() => {
    sendSql('select * from cash_transaction_types').then((results) => {
      setFinances(results);
    });
  }, []);

  return (
    <div className="finances-page">
      <h2>Finances </h2>

      <p>{JSON.stringify(finances)}</p>
    </div>
  );
}

export default FinancesPage;

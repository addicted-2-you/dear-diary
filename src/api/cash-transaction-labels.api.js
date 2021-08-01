import { sendSql } from '../database/send-sql';

export function getAllTransactionLabels() {
  return sendSql('select * from cash_transaction_labels');
}

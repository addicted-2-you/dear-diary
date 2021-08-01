import { sendSql } from '../database/send-sql';

export function getAllTransactionHistory() {
  return sendSql('select * from cash_transactions');
}

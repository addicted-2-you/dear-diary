import { sendSql } from '../database/send-sql';

export function getAllCashCurrencies() {
  return sendSql('select * from cash_currencies');
}

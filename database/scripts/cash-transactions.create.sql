-- cash_transactions
drop table if exists cash_transactions;
create table cash_transactions (
  id integer primary key autoincrement,
  amount double(10, 2) not null,
  created_at datetime default now
);

drop table if exists wallets_tbl;
create table wallets_tbl (
  w_id integer primary key autoincrement,
  w_name varchar(255) not null,
  w_createdat datetime default current_timestamp
);

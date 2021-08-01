drop table if exists cash_transaction_labels;
create table cash_transaction_labels (
  id integer primary key autoincrement,
  name varchar(255) not null,
  description varchar(255) not null,
  color char(8) not null
);

insert into cash_transaction_labels(name, description, color) values('Food', '', 'f485634d');
insert into cash_transaction_labels(name, description, color) values('Rare', '', 'b5a3e84d');
insert into cash_transaction_labels(name, description, color) values('Optional', '', '68a7ea4d');
insert into cash_transaction_labels(name, description, color) values('Required', '', '68a7ea4d');
insert into cash_transaction_labels(name, description, color) values('Taxes', '', '68a7ea4d');

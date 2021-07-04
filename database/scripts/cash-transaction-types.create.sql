-- cash_transaction_types
drop table if exists cash_transaction_types;
create table cash_transaction_types (
  id integer primary key autoincrement,
  title varchar(255) not null,
  description varchar(255) not null,
  color char(8) not null
);

insert into cash_transaction_types(title, description, color) values('Food', 'Resources I get energy from', 'f485634d');
insert into cash_transaction_types(title, description, color) values('Rare', 'Stuff I need really rarely', 'b5a3e84d');
insert into cash_transaction_types(title, description, color) values('Optional', 'I dont really need that', '68a7ea4d');

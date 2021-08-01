drop table if exists cash_currencies;
create table cash_currencies (
  id integer primary key autoincrement,
  name varchar(255) not null,
  code char(4) not null
);

insert into cash_currencies(name, code) values('Belarussian Ruble', 'BYN');
insert into cash_currencies(name, code) values('US Dollar', 'USD');


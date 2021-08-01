# rm -rf ../dear_diary.sqlite3

sqlite3 ../dear_diary.sqlite3 < ./cash-transaction-labels.create.sql
sqlite3 ../dear_diary.sqlite3 < ./cash-transactions.create.sql
sqlite3 ../dear_diary.sqlite3 < ./cash-currencies.create.sql
